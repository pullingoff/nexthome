import { GetStaticProps } from 'next';
import { Post } from '#src/type';
import { getRecentPosts } from '#lib/posts-related-api';
import mainImg from '#public/images/main.JPG';
import Image from 'next/image';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async () => {
  const { recentPosts } = await getRecentPosts();

  return {
    props: {
      recentPosts,
    },
  };
};

const Home = ({ recentPosts }: { recentPosts: Post[] }) => {
  return (
    <>
      <Main />
      <h1 className="font-extrabold text-3xl">Recent Posts</h1>
      <ul>
        {recentPosts.map(({ frontmatter, slug }, idx) => (
          <li
            key={idx}
            className="font-medium text-base mb-1 before:content-['-'] before:mr-2 hover:text-[salmon]"
          >
            <Link href={`/blog/${slug}`}>{frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const Main = () => {
  return (
    <section className="mt-3">
      <Link href="/about">
        <section className="relative">
          <Image
            className="cursor-pointer brightness-100 transition ease-linear delay-75 hover:scale-110 hover:brightness-50 duration-150"
            alt="박하은의 이력서 보러가기"
            src={mainImg}
            priority
          />
        </section>
      </Link>
    </section>
  );
};

export default Home;
