import fs from "fs";
import path from "path";
import matter from 'gray-matter'
import {parseMarkdownToMdx} from "../../utils/Markdown"
import Post from "../../components/post/Post";
import {markdownRegex} from "../../lib";
import { GetStaticPaths, GetStaticProps } from "next";
// import rehypeSlug from 'rehype-slug';

const blogDir = path.join(process.cwd(), 'posts', 'blog') // current directory/posts

export const getStaticPaths : GetStaticPaths = async() => {
    const fileNames = fs.readdirSync(blogDir)
    const paths = fileNames.map(fileNm => ({
        params: {
            slug : fileNm.replace(markdownRegex, '')
        }
    }));
    
    return {paths, fallback: 'blocking'}
}

export const getStaticProps : GetStaticProps = async({params: {slug}}) => {

    const markdownToMeta = fs.readFileSync(path.join(blogDir, slug+'.mdx'), 'utf-8');
    const {data:frontmatter, content}= matter(markdownToMeta);
    const headings = getHeadings(content)
    const mdxSource = await parseMarkdownToMdx(content);

    return {props: {slug, frontmatter, mdxSource, headings}}
}

const PostPage = ( {slug, frontmatter, mdxSource, headings}) => {
    return(
        <Post frontmatter={frontmatter}
              mdxSource={mdxSource} 
              headings={headings} />
    )
}

export default PostPage

const getHeadings = (source) => {
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

