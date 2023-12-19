import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import MetadataBox from '../MetadataBox';
import styled from 'styled-components';
import { Heading, Post } from '#src/type';
import { useRouter } from 'next/router';
import Comments from '#components/posts/Comments';
import Link from 'next/link';

const S: any = {};
const PostArticle = ({
  post,
  mdxSource,
  headings,
}: {
  post: Post;
  mdxSource: MDXRemoteSerializeResult;
  headings: Heading[];
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
      <MetadataBox customMetadata={customMeta} />
      <div className='flex items-start justify-center'>
        <article className='max-w-[90vw]'>
          <PostHeader date={date} title={title} />
          <S.ContentBox>
            <MDXRemote {...mdxSource} />
          </S.ContentBox>
          <span className='block mr-[-] ml-[-] text-[color:var(--color-point-blue)] font-bold cursor-pointer mt-[calc(2%] mb-[1px)] hover:text-[salmon]' onClick={() => router.back()}>&larr; 이전</span>
        </article>
        {headings && <PostHeadings headings={headings} />}
      </div>
      <Comments />
    </>
  );
};
export default PostArticle;

S.ContentBox = styled.div`
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
    max-width: 700px;
    width: -webkit-fill-available;
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
    <header className="text-center animate-[1s_anim-lineUp_0.1s_ease-out_1] pt-3">
      <time className="font-medium text-[color:var(--theme1-color)]">
        {date}
      </time>
      <h1 className="md:text-3xl font-extrabold text-[color:var(--theme1-color)]">
        {title}
      </h1>
    </header>
  );
};

const filterSpecialChars = (str: string) => {
  return str.replace(':', '').replace('(', '').replace(')', '');
};

const PostHeadings = ({ headings }: { headings: Heading[] }) => {
  return (
    <>
      {headings ? (
        <aside className="sticky min-w-[15%] max-h-[90vh] ml-4 top-[70px] hidden lg:block">
          <ul className="text-sm text-[#1e293bd1] pl-4 border-l-[#1e293bd1] border-l border-solid">
            {headings.map(heading => (
              <li
                key={heading.text}
                className="mb-0.5 hover:font-bold list-none [&:not(:last-child):after]:content-['﹒'] [&:not(:last-child):after]:block [&:not(:last-child):after]:leading-[0.5rem]"
              >
                <Link href={filterSpecialChars(heading.link)}>
                  {heading.text}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </>
  );
};
