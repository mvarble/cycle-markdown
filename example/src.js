import xs from 'xstream';
import { makeDOMDriver, h } from '@cycle/dom';
import { run } from '@cycle/run';
import { withState } from '@cycle/state';
import isolate from '@cycle/isolate';
import makeMarkdownCompiler from '../index';
import { compiler } from '../extra';
import Definition from './Definition';
import Slider from './Slider';
import markdown from './index.md';

// create a fake HTTPDriver
function HTTPDriver(request$) {
  const stream$$ = request$.map(payload => ({
    _scope: payload._scope,
    stream: xs.create({
      start: listener => {
        const obj = payload.query.object;
        console.log(obj);
        if (obj !== 'rat' && obj !== 'math') {
          setTimeout(() => {
            listener.next({ body: { error: 404 } });
            listener.complete();
          }, 2000);
          return;
        }
        const def = (
          obj === 'rat'
          ? 'Cutest animal ever. Also brother.'
          : 'A pretty fun subject I spend a lot of time on'
        );
        const time = (obj === 'rat') ? 500 : 1000;
        setTimeout(() => {
          listener.next({ body: { object: obj, definition: def } })
          listener.complete();
        }, time);
      },
      stop: () => {},
    })
  }));
  return { 
    isolateSource: (source, scope) => ({ select: () => stream$$.filter(a => a._scope === scope).map(a => a.stream)  }),
    isolateSink: (sink, scope) => sink.map(obj => ({ _scope: scope, ...obj })),
  };
}


// create our app
const app = withState(makeMarkdownCompiler({
  compiler,
  components: { 'definition': Definition, 'slider': Slider },
  sinkKeys: ['state', 'HTTP'],
}));

// run our app
run(app, {
  DOM: makeDOMDriver('#app'),
  HTTP: HTTPDriver,
  debug: d$ => d$.addListener({ next: console.log }),
  markdown: () => xs.of(markdown),
});
