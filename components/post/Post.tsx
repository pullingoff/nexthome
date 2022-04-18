import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import MetaContainer from "../MetaContainer"
import { capitalize } from "@lib/index"
import PostHeader from "./PostHeader"
import styled from "styled-components"
import PostHeadings from "./PostHeadings"
import {IPost} from "types"
import { useRouter } from 'next/router'


// const Post = ({frontmatter, mdxSource, headings}) => {
const Post = ({post, mdxSource}: {
    post: IPost,
    mdxSource: MDXRemoteSerializeResult
}) => {
    const router = useRouter()

    const {title , date, category } = post.frontmatter
    const customMeta = {
      title: `${capitalize(category)}: ${title}`,
      date: date
    }
    // const goToLink = `/${category}`

    return (
      <>
      <MetaContainer customMeta={customMeta}/>
      <article>
        <PostHeader date={date} title={title} />
        {post.headings &&
            <PostHeadings headings={post.headings}/>
        }
        <PostDiv>
            <MDXRemote {...mdxSource} />
        </PostDiv>
        <StyledGoBackBtn onClick={()=>router.back()}>&larr; 이전</StyledGoBackBtn>
      </article>
      </>
    )
}
export default Post

const StyledGoBackBtn = styled.span`
display: block;
margin: 10px 0;
color: var(--color-point-blue);
font-weight: 700;
&:hover {
  color: var(--color-point-pink);
}
cursor:pointer;
`


const PostDiv = styled.div`
margin-top: 20px;
    
    p strong, li strong {
        font-weight: bold;
    }
    a {
        font-weight: 500;
        text-decoration: underline;
      }

    a:hover {
        color: var(--color-point-pink);
    }
  
    ul {
        margin-bottom: 1rem;
        li {
            list-style: none;
            padding-left: 1rem;
            &:before {
                content: '- ';
            }
        }
    }
    ol {
        margin-bottom: 1rem;
    }
    p img {
      margin: 15px 0;
    }

    h1 {
        font-size: 1.4rem;
        font-weight: 900;
        margin-top: 1rem;
        margin-bottom: 0.3rem;
    }
    h2 {
        font-weight: 800;
        font-size: 1.3rem;
        word-break: break-word;
        margin-top: 1rem;
        margin-bottom: 0.3rem;
    }
    h3 {
        font-size: 1.2em;
        margin-top: 0.8rem;
        margin-bottom: 0.2rem;
    }
    h4 {
        font-size: 1.1em;
    }
`