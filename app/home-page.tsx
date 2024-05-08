"use client";

import { Post } from "app/_components/type";
import Link from "next/link";
import Image from "next/image";
import mainImg from "#public/images/main.webp";

export default function HomePage({ recentPosts }: { recentPosts: Post[] }) {
  return (
    <>
      <Main />
      <h1 className="font-extrabold text-3xl my-3">Recent Posts</h1>
      <ul>
        {recentPosts.map(({ frontMatter, slug }, idx) => (
          <li
            key={idx}
            className="font-medium text-base md:mb-0.5 mb-1.5 before:content-['-'] before:mr-2 hover:text-light-blue"
          >
            <Link href={`/article/${slug}`}>{frontMatter.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

const Main = () => {
  return (
    <section className="mt-3 relative overflow-hidden">
      <Link href="/about">
        <Image
          className="cursor-pointer brightness-100 transition ease-linear delay-75 hover:scale-110 hover:brightness-75 duration-150"
          alt="박하은의 이력서 보러가기"
          src={mainImg}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          placeholder="blur"
        />
      </Link>
    </section>
  );
};
