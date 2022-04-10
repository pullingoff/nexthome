import fs, { readdirSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { markdownRegex, sortByDate } from '.'
import { POST_DIRS } from '../config';
import { IFrontMatter, IPost } from 'type';
import memoize from 'memoizee';

const blogDirectory = path.join(process.cwd(), 'posts', 'blog') // current directory/posts

export const retrieveAllPosts = async() : Promise<IPost[]> => {
    // 모든 Post기 때문에 디렉토리 주소를 포함해야함
    let allFileNames : string[] = []
    for (let menu of POST_DIRS) {
        let fileNames : string[] = fs.readdirSync(path.join(process.cwd(), 'posts', menu)).filter((f)=> {
            return !f.startsWith('.DS_')
        });
        
        let filesInDir : string[] = fileNames.map((file) => {
            return `${menu}/${file}`
        });
        allFileNames = [...allFileNames, ...filesInDir]
    }

    const allPostsData : Array<IPost> = allFileNames.map(fileName => {
        
        const slug = fileName.split('/')[1].split('.mdx')[0]
        const fullPath = path.join(process.cwd(), 'posts', fileName)
        
        // markdownWithMeta
        const fileContents = fs.readFileSync(fullPath, 'utf8') // path에 있는 파일 내용 읽어오기
        const {data: frontmatter, content: body} = matter(fileContents) // post의 metadata(frontmatter)
        const fm: IFrontMatter = frontmatter as IFrontMatter
        
        return {frontmatter: fm, body, slug}
    })
    return allPostsData.sort(sortByDate)
}

export const getAllPosts: () => Promise<Array<IPost>> = memoize(retrieveAllPosts)

// async로 할지 다시 한번 생각해보기
export const getRecentPosts = async() => {
    // getAllPosts()
    const allPostsData = await getAllPosts()
    return {
        recentPosts : allPostsData.sort(sortByDate).slice(0,6)  // prop으로 모든 블로그 포스트 넘겨주기
    }
  }

export const getAllTagsFromPosts = async() => {
    const tags = (await getAllPosts()).reduce(
        (prev : string[], curr) => {
            curr.frontmatter.tags.forEach((tag : string) => {
                prev.push(tag)
            })
            return prev
        },
        [],
    )
    const tagWithCount = [...new Set(tags)].map((tag) => ({
        tag,
        count: tags.filter((t) => t === tag).length,
    }))
    // { tag: '스터디', count: 1 },
    return tagWithCount.sort((a, b) => b.count - a.count)
}
