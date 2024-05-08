// post content에서 ## 찾아서 헤딩 구성 (목차용)
import { serialize } from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import slug from "remark-slug";
import remarkGfm from "remark-gfm";
import prism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Node } from "unist";
import { visit } from "unist-util-visit";

export const getHeadings = (source: string) => {
  const regex = /^## (.*$)/gim;
  if (source.match(regex)) {
    return source.match(regex)?.map((heading) => {
      const headingText = heading.replace("## ", "");
      // ?가 있을 경우 무한으로 링크가 붙어 필터링
      const link =
        "#" + headingText.replace("?", "").replace(/ /g, "-").toLowerCase();

      return {
        text: headingText,
        link,
      };
    });
  }
};

type TokenType =
  | "tag"
  | "operator"
  | "method"
  | "known-class-name"
  | "parameter"
  | "punctuation"
  | "keyword"
  | "number"
  | "function"
  | "boolean"
  | "comment"
  | "arrow";

const tokenClassNames: { [key in TokenType]: string } = {
  tag: "text-code-red",
  operator: "text-code-yellow",
  method: "text-code-green",
  "known-class-name": "text-code-sky",
  parameter: "text-code-khaki",
  punctuation: "text-code-orange",
  keyword: "text-code-pink",
  number: "text-code-green",
  function: "text-code-sky",
  boolean: "text-code-red",
  arrow: "text-code-pink",
  comment: "text-gray-400 italic",
} as const;

const parseCodeSnippet = () => {
  return (tree: Node) => {
    visit(tree, "element", (node: any) => {
      const [token, type]: [string, TokenType] =
        node.properties.className || [];
      if (token === "token") {
        node.properties.className = [tokenClassNames[type]];
      }
    });
  };
};

export const parseMarkdownToMdx = async (body: string) => {
  return serialize(body, {
    // 마크다운에서 html로 제대로 바꿀 수 있도록 도와주는 플러그인들
    mdxOptions: {
      remarkPlugins: [remarkMath, slug, remarkGfm],
      rehypePlugins: [prism, parseCodeSnippet, rehypeAutolinkHeadings],
    },
  });
};

export const MARKDOWN_REGEX = /(\.mdx$)|(\.md$)|(\.markdown$)/;
