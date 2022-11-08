import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import MetaContainer from '../MetaContainer';
import styled from 'styled-components';
import { IHeading, IPost } from '#type/post';
import { useRouter } from 'next/router';
import CustomLink from '#components/common/CustomLink';

const Post = ({
  post,
  mdxSource,
  headings,
}: {
  post: IPost;
  mdxSource: MDXRemoteSerializeResult;
  headings: IHeading[];
}) => {
  const router = useRouter();

  const { title, date, description } = post.frontmatter;
  const customMeta = {
    title: title,
    date: date,
    description: description,
  };
  return (
    <>
      <MetaContainer customMeta={customMeta} />
      <PostContainer>
        <article>
          <PostHeader date={date} title={title} />
          <PostDiv>
            <MDXRemote {...mdxSource} />
          </PostDiv>
          <StyledGoBackBtn onClick={() => router.back()}>
            &larr; 이전
          </StyledGoBackBtn>
        </article>
        {headings && <PostHeadings headings={headings} />}
      </PostContainer>
    </>
  );
};
export default Post;

const PostContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
`;
const StyledGoBackBtn = styled.span`
  display: block;
  margin: calc(2% - 1px);
  color: var(--color-point-blue);
  font-weight: 700;
  &:hover {
    color: salmon;
  }
  cursor: pointer;
`;

const PostDiv = styled.div`
  &:before {
    content: ' ';
    display: block;
    margin: 30px 2%;
  }
  margin: 20px 2vw 10px;
  font-size: 18px;
  word-break: break-word;

  p strong,
  li strong {
    font-weight: bold;
  }
  a {
    font-weight: 500;
    text-decoration: underline;
  }

  a:hover {
    color: salmon;
  }

  ul {
    margin-bottom: 1rem;
    line-height: 180%;
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
    line-height: 180%;
  }
  p img {
    margin: 15px 0;
    max-width: 400px;
  }

  h1 {
    font-size: var(--8xl);
  }
  h2 {
    font-weight: 800;
    font-size: var(--6xl);
  }
  h3 {
    font-size: var(--4xl);
    font-weight: 700;
  }
  h4 {
    font-size: var(--3xl);
  }
  h1,
  h2,
  h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    line-height: 150%;
  }

  h1,
  h2 {
    border-bottom: 1px solid rgb(211, 211, 211, 0.5);
    padding-bottom: 1rem;
  }
  h2,
  h3 {
    &:before {
      content: '# ';
    }
  }
  // h2 바로 아래 p는 margin-top 제거
  p:where(h2 + *):not(:where([class~='not-p'] *)) {
    margin-top: 0;
  }
`;

const PostHeader = ({ date, title }: { date: string; title: string }) => {
  return (
    <StyledHeader>
      <time>{date}</time>
      <h1>{title}</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding-top: var(--lg);
  text-align: center;
  animation: 1s anim-lineUp 0.1s ease-out 1;

  time {
    font-weight: 500;
    color: var(--theme1-color);
  }

  h1 {
    font-size: var(--10xl);
    line-heigth: var(--4xl);
    font-weight: 800;
    color: var(--theme1-color);
    @media (min-width: ${({ theme }) => theme.device.sm}) {
      font-size: var(--8xl);
    }
  }
`;

const filterSpecialChars = (str: string) => {
  return str.replace(':', '').replace('(', '').replace(')', '');
};

const PostHeadings = ({ headings }: { headings: IHeading[] }) => {
  return (
    <>
      {headings ? (
        <HeadingContainer>
          <ul>
            {headings.map(heading => (
              <li key={heading.text}>
                <CustomLink href={filterSpecialChars(heading.link)}>
                  {heading.text}
                </CustomLink>
              </li>
            ))}
          </ul>
        </HeadingContainer>
      ) : null}
    </>
  );
};

const HeadingContainer = styled.aside`
  @media (max-width: ${({ theme }) => theme.device.md}) {
    display: none;
  }
  min-width: 15%;
  position: sticky;
  top: 70px;
  order: 1;
  overflow-y: scroll;
  max-height: 90vh;
  margin-left: 1rem;
  ul {
    list-style: none;
    font-size: 0.9rem;
    color: #1e293bd1;
    border-left: 1px solid #1e293bd1;
    padding-left: 1rem;

    li {
      list-style: none;
      margin-bottom: 2px;
      &:hover {
        font-weight: bold;
      }
      &:not(:last-child):after {
        content: '﹒';
        line-height: 0.5rem;
        display: block;
      }
    }
  }
`;