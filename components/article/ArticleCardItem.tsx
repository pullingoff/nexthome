"use client";
import { Post } from "type";
import { useEffect, useState } from "react";
import Link from "next/link";
import { formatDate } from "lib/util/index";

const ArticleCardItem = ({ post }: { post: Post }) => {
  const [publishedAt, setPublishedAt] = useState<string>("");
  const { title, description, tags } = post.frontMatter;

  // 사파리용 split 서버, 클라이언트 다른 경우가 있음
  useEffect(() => {
    try {
      setPublishedAt(
        formatDate(new Date(post.frontMatter.date), "yyyy년 MM월 dd일")
      );
    } catch (e) {
      setPublishedAt(post.frontMatter.date.toString().split(/(\s+)/)[0]);
    }
  }, [post.frontMatter.date]);

  return (
    <div className="relative flex flex-col h-full z-0 rounded-lg hover:border-deep-brown hover:border-[1px]">
      <Link href={`/article/${post.slug}`}>
        <section className="flex flex-col pb-1 p-4 pt-2 [&>*]:block">
          <h3 className="font-extrabold mt-1 text-xl">{title}</h3>
          {description && (
            <p className="text-sm font-medium leading-normal overflow-hidden text-ellipsis mx-0 my-1">
              {description}
            </p>
          )}
          <p className="text-[0.8rem] mx-0 my-1">{publishedAt}</p>
        </section>
      </Link>
      <section className="flex flex-wrap ml-4 mr-auto mt-0 mb-3">
        {tags?.map((text: string) => (
          <Link
            className="text-[white] uppercase text-[0.85rem] font-semibold bg-deep-brown rounded ml-0 mr-2 mt-0 2 px-2 py-0.5 hover:text-deep-brown hover:bg-[initial] hover:shadow-deep-brown"
            key={text}
            href={`/tags/${text}/1`}
          >
            {text.split(" ").join("-")}
          </Link>
        ))}
      </section>
    </div>
  );
};

export default ArticleCardItem;
