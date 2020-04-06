import xs from 'xstream';
import dropRepeats from 'xstream/extra/dropRepeats';
import flattenConcurrently from 'xstream/extra/flattenConcurrently';
import vfile from 'to-vfile';
import { withState } from '@cycle/state';
import { run } from '@cycle/run';
import { makeHTMLDriver } from '@cycle/html';
import { h } from '@cycle/dom';
import { makeMarkdownCompiler } from './index';

/**
 * We create components which have complicated enough logic to require 
 * imperative commands / states
 */

// slider will necessarily need some form of state
function slider(sources) {
  // get (fake) intent
  const slideIntent$ = sources.slides;

  // create the state reducer
  const initialReducer$ = xs.of(() => ({ v: 0, DOM: h('p', [`${0}`]) }));
  const reducer$ = slideIntent$
    .map(dx => (({v}) => ({ v: v+dx, DOM: h('p', [`${v + dx}`])})));

  return {
    state: xs.merge(initialReducer$, reducer$),
  };
}
const vals = [-1, 4, 2, -6, -2, -2, 5, 1];
const sliderDriver = () => (
  xs.periodic(250)
    .take(20)
    .filter(i => i == 1 || i % 2 == 0 || i % 5 == 0)
    .fold((a, b) => a + 1, 0)
    .map(i => vals[i % vals.length])
);

// definition will utilize an asynchronous driver
const defH = (object, definition) => 
  h('div.definition', { attrs: { object } }, [definition]);
function definition(sources) {
  // parse the snabbdom to create the request
  const request$ = sources.staleDom.map(dom => dom.data.attrs.object)
    .compose(dropRepeats());

  // parse the incoming HTTP
  const payload$ = xs.combine(sources.HTTP, request$)
    .filter(([defObj, obj]) => defObj.object === obj)
    .map(a => a[0]);
  const reducer$ = xs.merge(
    request$.map(obj => (() => ({ 
      DOM: defH(obj, `Loading definition for ${obj}...`),
      complete: false,
    }))),
    payload$.map(({ definition, object }) => (() => ({
      DOM: defH(object, definition),
      complete: true,
    }))),
  );
    
  return {
    HTTP: request$,
    state: reducer$,
  };
}
const fakeHTTPDriver = request$ => flattenConcurrently(
  request$.map(obj => xs.fromPromise(new Promise(resolve => {
    const def = (obj === 'rat')
      ? 'Cutest animal ever. Also brother.' 
      : (obj === 'math')
        ? 'A pretty fun subject that I spend a lot of time on'
        : `There is no definition for "${obj}"`;
    const time = (obj === 'rat') ? 500 : (obj === 'math') ? 1000 : 2000;
    setTimeout(() => resolve({ object: obj, definition: def}), time);
  })))
)


/**
 * Test with the components and their drivers
 */

const components = { 'definition': definition, 'slider': slider };
const compiler = makeMarkdownCompiler(components);
const md$ = xs.fromPromise(
  vfile.read('./test.md').then(res => res.contents.toString())
);
run(withState(compiler), { 
  markdown: () => md$,
  HTTP: fakeHTTPDriver,
  log: makeHTMLDriver(console.log),
  slides: sliderDriver,
});
