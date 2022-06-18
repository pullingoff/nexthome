import { serialize } from 'next-mdx-remote/serialize';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import slug from 'remark-slug';
import { visit } from 'unist-util-visit';
import { Node } from 'unist';
// import remarkGfm from 'remark-gfm' 라는 좋은 것이 있구나...
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import prism from '@mapbox/rehype-prism';

type TokenType =
  | 'tag'
  | 'attr-name'
  | 'attr-value'
  | 'deleted'
  | 'inserted'
  | 'punctuation'
  | 'keyword'
  | 'string'
  | 'function'
  | 'boolean'
  | 'comment';

const tokenClassNames: { [key in TokenType]: string } = {
  tag: 'text-code-red',
  'attr-name': 'text-code-yellow',
  'attr-value': 'text-code-green',
  deleted: 'text-code-red',
  inserted: 'text-code-green',
  punctuation: 'text-code-white',
  keyword: 'text-code-purple',
  string: 'text-code-green',
  function: 'text-code-blue',
  boolean: 'text-code-red',
  comment: 'text-gray-400 italic',
};

function parseCodeSnippet() {
  return (tree: Node) => {
    visit(tree, 'element', (node: any) => {
      const [token, type]: [string, TokenType] =
        node.properties.className || [];
      if (token === 'token') {
        node.properties.className = [tokenClassNames[type]];
      }
    });
  };
}

export async function parseMarkdownToMdx(body: string) {
  return serialize(body, {
    // 마크다운에서 html로 제대로 바꿀 수 있도록 도와주는 플러그인들
    mdxOptions: {
      remarkPlugins: [remarkMath, slug],
      rehypePlugins: [rehypeKatex, prism, parseCodeSnippet],
    },
  });
}
