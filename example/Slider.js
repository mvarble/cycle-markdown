import xs from 'xstream';
import { h } from '@cycle/dom';
import { createDrag } from '@mvarble/viewport-utilities';

export default Slider;

function Slider({ state, DOM } ) {
  // get drags from the slider
  const drag$ = DOM.select('circle').events('mousedown').compose(createDrag);

  // we store a position of the slider in a state
  const dragState$ = drag$.map(d$ => d$.filter(e => e.type === 'mousemove'))
    .flatten()
    .map(event => (state => ({ 
      ...state,
      x: Math.min(Math.max(state.x + event.movementX, 0), state.width),
      drag: true 
    })));
  const unDragState$ = drag$.map(d$ => d$.filter(e => e.type === 'mouseup'))
    .flatten()
    .map(event => (state => ({ ...state, drag: false })));
  const state$ = xs.merge(dragState$, unDragState$).startWith(() => ({ 
    x: 0,
    width: 300,
    drag: false,
  }));

  // the view is declared from the position.
  const dom$ = state.stream.map(({ x, drag, width }) => h('div.slider', [
    h('svg', { attrs: { width: 1.2 * width, viewBox: "-10 -10 120 20" } }, [
      h('path', { attrs: { d: "M 0 0 H 100", stroke: "black" } }),
      h('circle', {
        attrs: {
          cx: 100 * x / width, 
          cy: 0, 
          r: 5, 
          stroke: "black",
          'fill-opacity': drag ? 0.5 : 1,
          fill: "blue",
        } 
      })
    ]),
  ]));

  return {
    state: state$,
    DOM: dom$,
  };
}
