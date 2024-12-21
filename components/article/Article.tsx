"use client";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
// import MetadataHead from '../MetadataHead';
import { Heading, Post } from "type";
import { useRouter } from "next/router";
import Comments from "./Comments";
import Link from "next/link";
import classNames from "classnames";

const PostArticle = ({
  post,
  mdxSource,
  headings,
}: {
  post: Post;
  mdxSource: MDXRemoteSerializeResult;
  headings?: Heading[];
}) => {
  // const router = useRouter();

  const { title, date, description } = post.frontMatter;
  const customMeta = {
    title: title,
    date: date,
    description: description,
  };

  const articleClasses = classNames(headings && "max-w-[90vw]");
  return (
    <>
      {/*<MetadataHead customMetadata={customMeta} />*/}
      <div className="flex items-start">
        <article className={articleClasses}>
          <PostHeader date={date} title={title} />
          <article className="postContent">
            <MDXRemote {...mdxSource} />
          </article>
          <span
            className="block mr-[-] ml-[-] text-deep-brown font-bold cursor-pointer mt-[calc(2%] mb-[1px)] hover:text-light"
            // onClick={() => router.back()}
          >
            &larr; 이전
          </span>
        </article>
        {headings && <PostHeadings headings={headings} />}
      </div>
      <Comments />
    </>
  );
};
export default PostArticle;

const PostHeader = ({ date, title }: { date: string; title: string }) => {
  return (
    <header className="text-center animate-[1s_anim-lineUp_0.1s_ease-out_1] pt-3">
      <time className="font-medium text-deep-brown">{date}</time>
      <h1 className="md:text-2xl font-extrabold text-deep-brown">{title}</h1>
    </header>
  );
};

const filterSpecialChars = (str: string) => {
  return str.replace(":", "").replace("(", "").replace(")", "");
};

const PostHeadings = ({ headings }: { headings: Heading[] }) => {
  return (
    <>
      {headings ? (
        <aside className="sticky min-w-[15%] max-h-[90vh] ml-2 top-[70px] hidden lg:block">
          <ul className="text-sm text-[#1e293bd1] pl-2 border-l-deep-brown border-l">
            {headings.map((heading) => (
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
