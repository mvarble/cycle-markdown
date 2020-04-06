import xs from 'xstream';
import dropRepeats from 'xstream/extra/dropRepeats';
import { h } from '@cycle/dom';

export default Definition;

function Definition({ vdom, HTTP }) {
  /**
   * Intent
   */
  // get the definition we request from the snabbdom
  const object$ = vdom.map(dom => dom.data.attrs.object);

  // parse the HTTP streams from the definition request
  const payload$ = HTTP.select().flatten().map(res => res.body);
  const definition$ = payload$
    .filter(res => res.definition)
    .map(res => res.definition);
  const notFound$ = payload$.filter(res => res.error).map(res => res.error);

  /**
   * Model
   */
  // map the object attribute to an HTTP request
  const request$ = object$.map(object => ({
    method: 'GET',
    url: 'https://somesite.com/db/definition',
    query: { object },
  }));

  // create a state for debug purposes
  const state$ = payload$.map(payload => (() => payload));

  /**
   * view
   */
  const searchDom$ = object$.map(object => (
    h('div.definition', { attrs: { object } }, [
      h('p', `Requesting definition of "${object}" from server...`)
    ])
  ));
  const successDom$ = xs.combine(object$, definition$)
    .map(([object, definition]) => h(
      'div.definition', 
      { attrs: { object, definition } },
      [h('p', [h('strong', 'Definition.'), `(${object}) ${definition}`])]
    ));
  const failDom$ = xs.combine(object$, notFound$)
    .map(([object]) => h(
      'div.definition',
      { attrs: { object } },
      [`Could not find the definition of "${object}"`]
    ));

  return {
    DOM: xs.merge(searchDom$, successDom$, failDom$),
    HTTP: request$,
    state: state$,
  };
}
