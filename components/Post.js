import { MDXRemote } from "next-mdx-remote"
import MetaContainer from "./MetaContainer"
import { capitalize } from "../lib"
import PostHeader from "./PostHeader"
import styled from "styled-components"
import PostGoBackLink from "./PostGoBackLink"
import PostHeadings from "./PostHeadings"

export default function Post({frontmatter, mdxSource, headings}) {
    const {title , date, category } = frontmatter
    const customMeta = {
      title: `${capitalize(category)}: ${title}`
    }
    const goToLink = `/${category}`

    return (
      <>
      <MetaContainer customMeta={customMeta}/>
      <article>
        <PostHeader date={date} title={title} />
        {/* <PostHeadings headings={headings}/> */}
        <PostDiv>
            <MDXRemote {...mdxSource} />
        </PostDiv>
        <PostGoBackLink link={goToLink}/>
      </article>
      </>
    )
}


const PostDiv = styled.div`
margin-top: 20px;
    
    p strong, li strong {
        font-weight: bold;
    }
    a {
        font-weight: 500;
        text-decoration: underline;
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
    // code {
    //     background: var(--color-main);
    //     padding: 0 3px;
    //     font-size: 90%;
    //     border-radius: 2px;
    //     color: var(--color-white);
    // }
`