"use client";

import { Post } from "../type";
import Link from "next/link";
import Image from "next/image";
import mainImg from "public/images/main.webp";
import { useCallback, useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "lib/hook";
import ArticleCardItem from "components/article/ArticleCardItem";

interface Props {
  initialPosts: Post[];
  totalCount: number;
}

const DEFAULT_LIMIT = 10;

export default function HomePage({ initialPosts, totalCount }: Props) {
  const [posts, setPosts] = useState<Post[]>(() => initialPosts);
  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(
    initialPosts.length < totalCount
  );
  const [loading, setLoading] = useState(false);

  const observerTargetRef = useRef<HTMLDivElement>(null);
  const { setTarget } = useIntersectionObserver({
    onShow: () => fetchPosts(page + 1),
  });

  useEffect(() => {
    if (observerTargetRef.current) setTarget(observerTargetRef.current);
  }, [setTarget]);

  const fetchPosts = useCallback(async (nextPage: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/posts?page=${nextPage}&limit=${DEFAULT_LIMIT}`
      );
      const data = await res.json();
      if (data.data.length > 0) {
        setPosts((prev) => [...prev, ...data.data]);
      }

      setPage(data.page);
      setHasNextPage(data.hasNextPage);
    } catch (error) {
      console.error("failed to fetch posts", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <article id="home" className="md:flex gap-5 m-5 overflow-hidden">
      <Link
        className="cursor-pointer basis-1/4 shrink-0"
        href="https://www.linkedin.com/in/hailey-park/"
        target="_blank"
      >
        <Image
          className="transition ease-linear delay-50 hover:brightness-75 duration-100"
          alt="박하은의 이력서 보러가기"
          src={mainImg}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Link>
      <section className="flex flex-col gap-y-2 h-full overflow-y-scroll w-full">
        {posts.map((post, idx) => (
          <ArticleCardItem key={idx} post={post} />
        ))}
        {loading && <p>Loading...</p>}
        <div ref={observerTargetRef} style={{ height: 1 }} />
        {!hasNextPage && <p>모든 글을 보셨어요!</p>}
      </section>
    </article>
  );
}
