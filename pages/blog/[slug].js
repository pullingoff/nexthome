import fs from "fs";
import path from "path";
import matter from 'gray-matter'
import { serialize } from "next-mdx-remote/serialize";
import {parseMarkdownToMdx} from "../../utils/Markdown"
import Post from "../../components/Post";
// import rehypeSlug from 'rehype-slug';

const blogDirectory = path.join(process.cwd(), 'posts', 'blog') // current directory/posts

export async function getStaticPaths() {
    const fileNames = fs.readdirSync(blogDirectory)
    
    const paths = fileNames.map(filename => ({
        params: {slug : filename.replace(/(\.mdx$)|(\.md$)|(\.markdown$)/, '')}
    }));
    
    // 아래 fallback blocking으로 하는 경우도 있음. 찾아보기
    return {paths, fallback: 'blocking'}
}

export async function getStaticProps({params: {slug}}) {

    const markdownToMeta = fs.readFileSync(path.join(blogDirectory, slug+'.mdx'), 'utf-8');
    const {data:frontmatter, content}= matter(markdownToMeta);
    const headings = getHeadings(content)
    // const mdxSource = await serialize(content);
    const mdxSource = await parseMarkdownToMdx(content);

    return {props: {slug, frontmatter, mdxSource, headings}}
}

export default function PostPage( {slug, frontmatter, mdxSource, headings}) {
    return(
        <Post frontmatter={frontmatter}
              mdxSource={mdxSource} 
              headings={headings} />
    )
}

function getHeadings(source) {
    const regex = /^## (.*$)/gim;
    if (source.match(regex)) {
        return source.match(regex).map((heading) => {
            const headingText = heading.replace("## ", "");
            const link = "#" + headingText.replace(/ /g, "_").toLowerCase();
            // console.log(headingText)
            return {
                text: headingText,
                link,
            };
        });
    }
    return [];
}

