import ListLayout from "#components/ListLayout";
import { getAllTags, getAllPosts } from "#lib/posts";
import { POSTS_PER_PAGE } from "#src/config";
import MetadataHead from "#components/MetadataHead";
import { GetStaticPaths, GetStaticProps } from "next";
import { Post, ITag } from "#src/type";

const Tag = ({
  posts,
  tag,
  pageNo,
  pageTotal,
}: {
  posts: Post[];
  tag: string;
  pageNo: number;
  pageTotal: number;
}) => {
  const capitalizedTag: string = tag.toUpperCase();

  const customMeta = {
    title: `${capitalizedTag} : 개발자 박하은`,
  };
  return (
    <>
      <MetadataHead customMetadata={customMeta} />
      <KeywordBox
        pageNm={capitalizedTag}
        desc={`'${capitalizedTag}'에 관한 글들을 모아봤어요.`}
      />
      <ListLayout posts={posts} />
    </>
  );
};

export default Tag;

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = await getAllTags();
  const posts = await getAllPosts();

  const paths: { params: { tag: string; keyword: string } }[] = [];

  allTags.forEach(({ tag }) => {
    const tagsCount = posts.filter((post) =>
      post.frontMatter.tags.find((t) => t === tag)
    ).length;
    [...new Array(Math.round(tagsCount / POSTS_PER_PAGE)).keys()].forEach(
      (i) => {
        paths.push({ params: { tag, keyword: `${i + 1}` } });
      }
    );
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPosts = await getAllPosts();

  const { tag, keyword } = params as ITag;
  const pageNo = parseInt(keyword);
  const postsWithTag = allPosts.filter((post) =>
    post.frontMatter.tags.find((t) => t === tag)
  );

  if (
    isNaN(pageNo) ||
    pageNo > Math.ceil(postsWithTag.length / POSTS_PER_PAGE) ||
    pageNo < 1
  ) {
    return {
      notFound: true,
    };
  }

  const startIndex = (pageNo - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const resultPosts = postsWithTag.slice(startIndex, endIndex);

  return {
    props: {
      posts: resultPosts.map((post) => ({ ...post, path: "" })),
      tag,
      pageNo,
      pageTotal: Math.ceil(postsWithTag.length / POSTS_PER_PAGE),
    },
  };
};

const KeywordBox = ({ pageNm, desc }: { pageNm: string; desc: string }) => {
  return (
    <div className="px-0 py-2">
      <h1 className="text-[2rem] font-extrabold mt-0 mb-1">{pageNm}</h1>
      <h3 className="font-normal">{desc}</h3>
    </div>
  );
};
