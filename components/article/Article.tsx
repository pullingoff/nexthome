"use client";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Heading, Post } from "type";
import { useRouter } from "next/navigation";
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
  const { title, date, description } = post.frontMatter;
  // const customMeta = {
  //   title: title,
  //   date: date,
  //   description: description,
  // };

  const articleClasses = classNames("w-full", headings && "max-w-[90vw]");
  return (
    <>
      <div
        id="article"
        className="max-w-screen-sm Rmd:max-w-screen-md flex items-start"
      >
        <article className={articleClasses}>
          <PostHeader date={date} title={title} />
          <article className="postContent">
            <MDXRemote {...mdxSource} />
          </article>
        </article>
        {headings && <PostHeadings headings={headings} />}
      </div>
    </>
  );
};
export default PostArticle;

// 뒤로가기 버튼이 없어도 되지 않을까 싶어 제거
// export const GoBack = () => {
//   const router = useRouter();
//   return (
//     <span
//       id="goBack"
//       className="mr-[-] ml-[-] text-deep-brown font-bold cursor-pointer mt-[calc(2%] mb-[1px)] hover:text-light"
//       onClick={() => router.back()}
//     >
//       &larr; 이전
//     </span>
//   );
// };

export const ArticleComments = () => {
  return <Comments />;
};

const PostHeader = ({ date, title }: { date: string; title: string }) => {
  return (
    <header className="text-center animate-[1s_anim-lineUp_0.1s_ease-out_1] pt-5">
      <time className="font-medium text-md text-deep-brown">{date}</time>
      <h1 className="md:text-2xl text-xl font-extrabold text-deep-brown">
        {title}
      </h1>
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
        <aside
          id="headings"
          className="sticky min-w-[15%] max-h-[90vh] ml-2 top-[70px] hidden lg:block"
        >
          <ul className="text-sm text-deep-brown pl-2 border-l-deep-brown border-l">
            {headings.map((heading) => (
              <li
                key={heading.text}
                className="mb-0.5 hover:font-bold font-medium list-none [&:not(:last-child):after]:content-['﹒'] [&:not(:last-child):after]:block [&:not(:last-child):after]:leading-[0.5rem]"
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
