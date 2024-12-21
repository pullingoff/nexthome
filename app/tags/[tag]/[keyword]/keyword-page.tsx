import ListLayout from "#components/layout/ListLayout";
import { Post } from "type";
import { TagItem } from "#components/article/TagList";
import Pagination from "#components/layout/Pagination";

export const TagPostList = ({
  posts,
  tag,
  currentPage,
  totalPageCount,
}: {
  posts: Post[];
  tag: string;
  currentPage: number;
  totalPageCount: number;
}) => {
  const capitalizedTag: string = tag.toUpperCase();

  // const customMeta = {
  //   title: `${capitalizedTag} : 개발자 박하은`,
  // };
  return (
    <>
      {/*<MetadataHead customMetadata={customMeta} />*/}
      <TagItem
        pageNm={capitalizedTag}
        desc={`'${capitalizedTag}'에 관한 글들을 모아봤어요.`}
      />
      <ListLayout posts={posts} />
      <Pagination
        path={`tags/${tag}`}
        totalPageCount={totalPageCount}
        currentPage={currentPage}
      />
    </>
  );
};
