import unified from 'unified';
import remark from 'remark-parse';
import math from 'remark-math';
import remark2rehype from 'remark-rehype';
import raw from 'rehype-raw';
import katex from 'rehype-katex';
import toSnabbdom from 'hast-util-to-snabbdom';

const processor = unified()
  .use(remark, { allowDangerousHTML: true })
  .use(math)
  .use(remark2rehype, { allowDangerousHTML: true })
  .use(raw)
  .use(katex)
  .use(() => toSnabbdom);

function compiler(md) {
  return processor.runSync(processor.parse(md));
}

export { processor, compiler };


