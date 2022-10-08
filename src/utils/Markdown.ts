import { serialize } from 'next-mdx-remote/serialize';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import slug from 'remark-slug';
import { visit } from 'unist-util-visit';
import { Node } from 'unist';
import prism from 'rehype-prism-plus';

type TokenType =
  | 'tag'
  | 'operator'
  | 'method'
  | 'known-class-name'
  | 'parameter'
  | 'punctuation'
  | 'keyword'
  | 'number'
  | 'function'
  | 'boolean'
  | 'comment'
  | 'arrow';

const tokenClassNames: { [key in TokenType]: string } = {
  tag: 'text-code-red',
  operator: 'text-code-yellow',
  method: 'text-code-green',
  'known-class-name': 'text-code-sky',
  parameter: 'text-code-khaki',
  punctuation: 'text-code-orange',
  keyword: 'text-code-pink',
  number: 'text-code-green',
  function: 'text-code-sky',
  boolean: 'text-code-red',
  arrow: 'text-code-pink',
  comment: 'text-gray-400 italic',
} as const;

const parseCodeSnippet = () => {
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
      remarkPlugins: [remarkMath, slug, remarkGfm],
      rehypePlugins: [
        // rehypeKatex,
        prism,
        parseCodeSnippet,
        rehypeAutolinkHeadings,
      ],
    },
  });
}
