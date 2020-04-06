# cycle-markdown

This is a package that creates [Cycle.js](https://cycle.js.org) components that that resolve markdown streams to subsequent Cycle.js components whose sinks are merged according to user's control.
The intention of this is so that the user could write some sort of markdown like:

```md
# This is a title

Here is some text and a nice little Carousel of images that the user can click through to navigate.

<carousel>
  <img src="/img/1.png">
  <img src="/img/2.png">
  <img src="/img/3.png">
  <img src="/img/4.png">
</carousel>

Here are my most recently read books; showing these amounts to looking at the current state of a database.

<recent-books route="/db/books"></recent-books>
```

and have each custom tag like `<carousel>` or `<recent-books>` resolve to Cycle.js components of which we may merge the sinks into the drivers of our app.


The package is designed as follows; we firstly have a function `makeMarkdownCompiler` which serves to generate components of form `({ markdown, ...otherSources }) => sinks`, where `markdown` is a stream of strings we would like to compile.
The compilation in big picture works as follows.

  1. The `MarkdownCompiler` uses a provided `compiler` (like one from the [unified](https://unifiedjs.com/) collection) that resolves Markdown+html to a snabbdom tree.
  2. The `MarkdownCompiler` uses a provided object `components`; any part of the snabbdom tree of the form `<custom-tag></custom-tag>` with `components['custom-tag']` being defined will now be replaced with the DOM sink of `components['custom-tag']`.
  3. All other sinks are merged with an isolation scope corresponding to the location within the tree.

## makeMarkdownCompiler

```js
MarkdownCompiler = makeMarkdownCompiler({
  compiler: markdownStringToSnabbdom,
  components: { 'carousel': Carousel, 'recent-books': RecentBooks },
  domKey: 'DOM',
  vdomKey: 'vdom',
  sinkKeys: ['state', 'viewport', 'HTTP'],
})
```

In an execution like the one above, `markdownStringToSnabbdom` is the function which is used in the first step of the procedure delineated in the previous section.
The object `{ 'carousel': Carousel, 'recent-books': RecentBooks }` is our way of providing the compiler the (custom tag, component) pairs necessary in the second step of the procedure.
The `domKey` is the key we assume all the components use in keying the dom stream in their sink; it is optional and `'DOM'` by default.
Each component will be given a copy of the snabbdom element that it is replacing, so that it may parse the attributes accordingly; the `vdomKey` corresponds to the key the components will use to get this stream out of its sources.
This key is optional and is `'vdom'` by default.
The `sinkKeys` array corresponds to the non-DOM sink keys we desire from the final component.
Each of these keys will correspond to the merged stream of the component streams corresponding to these keys; any component without such a sink will be opted to `xs.empty()`.

## Non-Fractal

It is important to note that we are prohibited from putting multiple layers of custom components in our markdown.

```html
<custom-component-1>
  <custom-component-2></custom-component-2>
</custom-component-1>
```

Will only replace `<custom-component-1>` with its resolved app, and in its `vdom` source, it will have the snabbdom element with that of `<custom-component-2>` as a child.
