"use client";

import { Post } from "../type";
import Link from "next/link";
import Image from "next/image";
import mainImg from "public/images/main.webp";

export default function HomePage({ recentPosts }: { recentPosts: Post[] }) {
  return (
    <>
      <Link
        className="flex-1 cursor-pointer"
        href="https://www.linkedin.com/in/hailey-park/"
        target="_blank"
      >
        <Image
          className="brightness-100 transition ease-linear delay-50 hover:brightness-75 duration-100"
          alt="박하은의 이력서 보러가기"
          src={mainImg}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          // placeholder="blur"
        />
      </Link>
      <section className="flex-1">
        <h1 className="font-extrabold text-3xl my-5">Recent Posts</h1>
        <ul>
          {recentPosts.map(({ frontMatter, slug }, idx) => (
            <li
              key={idx}
              className="font-semibold md:mb-0.5 mb-1.5 before:content-['-'] before:mr-2 hover:text-light"
            >
              <Link href={`/article/${slug}`}>{frontMatter.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
