import fs from "fs";
import path from "path";
import matter from 'gray-matter'
import { serialize } from "next-mdx-remote/serialize";
import Post from "../../components/Post";

const diaryDirectory = path.join(process.cwd(), 'posts', 'diary') // current directory/posts

export async function getStaticPaths() {
    const fileNames = fs.readdirSync(diaryDirectory)
    
    const paths = fileNames.map(filename => ({
        params: {slug : filename.replace(/(\.mdx$)|(\.md$)|(\.markdown$)/, '')}
    }));
    
    return {paths, fallback: 'blocking'}
}

export async function getStaticProps({params: {slug}}) {

    const markdownToMeta = fs.readFileSync(path.join(diaryDirectory, slug+'.mdx'), 'utf-8');
    
    const {data:frontmatter,content}= matter(markdownToMeta);
    
    const mdxSource = await serialize(content)
    return {props: {slug, frontmatter, mdxSource}}

}

export default function PostPage( {slug, frontmatter, mdxSource}) {
    
//    const { title, date} = frontmatter
    
    return(
       <Post frontmatter={frontmatter} mdxSource={mdxSource} />
    )
}