import { serialize } from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import slug from "remark-slug";
import { visit } from "unist-util-visit";
import { Node } from "unist";
import prism from "rehype-prism-plus";
