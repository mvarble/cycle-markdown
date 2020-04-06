/**
 * makeMarkdownCompiler
 *
 * This module exports a component responsible for converting markdown streams
 * to embedded Cycle.js apps.
 */

// module dependencies
import xs from 'xstream';
import visit from 'unist-util-visit';
import isolate from '@cycle/isolate';

// our export
export default makeMarkdownCompiler;
export { makeMarkdownCompiler };

function makeMarkdownCompiler(opts) {
  // parse the options
  const { compiler, components, domKey, vdomKey, sinkKeys } = parseOpts(opts);
  const customTags = Object.keys(components);
  const customTag = node => node && customTags.includes(node.sel);

  // create the component
  function MarkdownCompiler({ markdown, ...otherSources }) {
    // parse the markdown into a master sink
    const sink$ = markdown.map(md => {
      // compiler the markdown
      const tree = compiler(md);

      // these will be used for storing the sinks in a list
      const sinks = [];

      // this will perform the component generation on all of the custom tags,
      // along with keying their dom sources for mapping the DOM streams in.
      visit(tree, customTag, node => {
        // key the node for later replacement
        node._customId = sinks.length;

        // run the component and add its sink to the array
        const component = isolate(components[node.sel], `md-${sinks.length}`);
        const sink = component({ ...otherSources, [vdomKey]: xs.of(node) });
        sinks.push(sink);

        // return the signal to no longer traverse descendants
        return 'skip';
      });

      // build the DOM stream
      const domSinks = sinks.map(sink => sink[domKey] || xs.of(undefined));
      const dom$ = xs.combine(...domSinks).map(doms => customMap(tree, node => (
        typeof node._customId !== 'undefined' ? doms[node._customId] : node
      )));

      // build the sink
      return sinkKeys.reduce((obj, key) => ({
        ...obj,
        [key]: xs.merge(...sinks.map(sink => sink[key] || xs.empty())),
      }), { [domKey]: dom$ });
    });

    // extract the sink from within the stream
    return sinkKeys.reduce((obj, key) => ({
      ...obj,
      [key]: sink$.map(sink => sink[key]).flatten()
    }), { [domKey]: sink$.map(sink => sink[domKey]).flatten() });
  }

  // return the component
  return MarkdownCompiler;
}

function customMap(tree, iteratee) {
  function preorder(node) {
    const newNode = { ...iteratee(node) };
    if (typeof node._customId !== 'undefined') return newNode;
    if (node.children) { newNode.children = node.children.map(preorder); }
    return newNode;
  }
  return preorder(tree);
}

function parseOpts(opts) {
  if (
    typeof opts !== 'object'
    || typeof opts.compiler !== 'function'
    || typeof opts.components !== 'object'
    || opts.sinkKeys.some(key => typeof key !== 'string')
    || (opts.domKey && typeof opts.domKey !== 'string')
    || (opts.vdomKey && typeof opts.vdomKey !== 'string')
  ) throw new TypeError('makeMarkdownCompiler: the options were insufficient.');
  return {
    domKey: 'DOM',
    vdomKey: 'vdom',
    ...opts
  };
}
