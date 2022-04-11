import ListLayout from "../../../../components/ListLayout"
import { getAllTagsFromPosts, getAllPosts } from "../../../../lib/posts-related-api";
import { POSTS_PER_PAGE } from "../../../../config";
import MetaContainer from "../../../../components/MetaContainer"
import PageHeader from "../../../../components/PageHeader";
import { GetStaticPaths, GetStaticProps } from "next";
import {IPost} from "../../../../type"
import {ParsedUrlQuery} from 'querystring'

const Tag = ({ posts, tag, pageNo, hasNextPage} :{
    posts: Array<IPost>,
    tag: string,
    pageNo: number,
    hasNextPage?: boolean
}) => {
    const capitalizedTag : string = tag.toUpperCase();

    const customMeta = {
        title: `${capitalizedTag} : 개발자 박하은`,
    }
    return (
        <>
        <MetaContainer customMeta={customMeta} />
        <PageHeader pageNm={capitalizedTag}
                    desc={`'${capitalizedTag}'에 관한 글들을 모아봤어요.`}/>
        <ListLayout
            posts={posts}
            category='blog'
            pageNo={pageNo}
            // hasNextPage={hasNextPage}
            nextPath={`/tags/${tag}/pages/${pageNo + 1}`}
            prevPath={`/tags/${tag}/pages/${pageNo - 1}`}
            />
        </>
    )
}

export default Tag

export const getStaticPaths : GetStaticPaths = async()=> {
    const allTags = await getAllTagsFromPosts()
    const posts = await getAllPosts()
    
    let paths: { params: { tag: string; keyword: string; }; }[] = []
    
    allTags.forEach(({ tag }) => {
        const tagsCount = posts.filter((post) => 
            post.frontmatter.tags.find((t) => t === tag),
        ).length
        ;[
            ...new Array(Math.round(tagsCount / POSTS_PER_PAGE)).keys(),
        ].forEach((i) => {
            paths.push({ params: {tag, keyword: `${i + 1}`}})
        })
    })

    return { 
        paths, fallback: 'blocking'
    }
}

interface ITag extends ParsedUrlQuery {
    [key: string]: string | undefined,
    keyword: string,
    tag: string
}

export const getStaticProps : GetStaticProps= async({params}) => {
    const allPosts = await getAllPosts()
    const {tag , keyword} = params as ITag
    const pageNo = parseInt(keyword)
    const postsWithTag = allPosts.filter((post) => 
                            post.frontmatter.tags.find((t) => t === tag
                        ))

    if (
        isNaN(pageNo) ||
        pageNo > Math.ceil(postsWithTag.length / POSTS_PER_PAGE) ||
        pageNo < 1
    ) {
        return {
            notFound: true
        }
    }

    const startIndex = (pageNo - 1) * POSTS_PER_PAGE
    const endIndex = startIndex + POSTS_PER_PAGE
    const resultPosts = postsWithTag.slice(startIndex, endIndex)
    const hasNextPage =
        Math.ceil(postsWithTag.length / POSTS_PER_PAGE) > pageNo

    return {
        props: {
            posts: resultPosts.map((post) => ({ ...post, path: '' })),
            tag,
            pageNo,
            hasNextPage,
        },
    }
}