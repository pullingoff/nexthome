import fs, { readdirSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { markdownRegex, sortByDate } from '.'
import { POST_DIRS } from '../config';

const blogDirectory = path.join(process.cwd(), 'posts', 'blog') // current directory/posts

export const getAllPosts = () => {
    // 모든 Post기 때문에 디렉토리 주소를 포함해야함
    let allFileNames = []
    
    for (let menu of POST_DIRS) {
        
        let fileNames = fs.readdirSync(path.join(process.cwd(), 'posts', menu));
        if(fileNames[0] == '.DS_Store') {
            fileNames.splice(0,1);
        } 
        let filesInDir = fileNames.map((file) => {
            return `${menu}/${file}`
        });
        allFileNames = [...allFileNames, ...filesInDir]
    }

    const allPostsData = allFileNames.map(fileName => {
        
        const slug = fileName.split('/')[1].split('.mdx')[0]
        const fullPath = path.join(process.cwd(), 'posts', fileName)
        
        // markdownWithMeta
        const fileContents = fs.readFileSync(fullPath, 'utf8') // path에 있는 파일 내용 읽어오기
        const {data: frontmatter, content: body} = matter(fileContents) // post의 metadata(frontmatter)
        
        return {frontmatter, body, slug}
    })
    return allPostsData
}

export const getSortedBlogPosts = async() => {
    const fileNames = fs.readdirSync(blogDirectory)
    // mac이라 생기는 DS_Store 일단 하드코딩으로 제거.
    if(fileNames[0] == '.DS_Store') {
        fileNames.splice(0,1);
    } 
    const allPostsData = fileNames.map(fileName => {
        // slug : 파일이름.md에서 .md 제거
        const slug = fileName.replace(markdownRegex, '') // .md 지우고 id로 설정
        const fullPath = path.join(blogDirectory, slug+ '.mdx')
        
        // markdownWithMeta
        const fileContents = fs.readFileSync(fullPath, 'utf8') // path에 있는 파일 내용 읽어오기
        const {data: frontmatter, content: body} = matter(fileContents) // post의 metadata(frontmatter)
        
        return { frontmatter, body, slug}
    })

    console.log(allPostsData.length)
    
    return allPostsData.sort(sortByDate)
}

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
        // prev:
        // curr: post 정보 전체
        (prev, curr) => {
            curr.frontmatter.tag.forEach((tag) => {
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
    // console.log(tagWithCount) 
    // { tag: '스터디', count: 1 },
    return tagWithCount.sort((a, b) => b.count - a.count)
}
