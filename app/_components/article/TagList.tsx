"use client";
import Link from "next/link";
import { Tag } from "../../utils/tag";

const TagList = ({ tags }: { tags: Tag[] }) => {
  return (
    <ul className="flex flex-row flex-wrap text-center text-sm">
      {tags.map((tag) => (
        <Link
          className="grow text-[white] uppercase text-[0.85rem] font-semibold bg-deep-blue rounded ml-0 mr-2 mt-0 mb-2 px-2 py-0.5 hover:text-deep-blue hover:bg-[initial] hover:shadow-deep-blue"
          key={tag.tag}
          href={`/tags/${tag.tag}/1`}
        >
          {tag.tag} ({tag.count})
        </Link>
      ))}
    </ul>
  );
};

export default TagList;

export const TagItem = ({ pageNm, desc }: { pageNm: string; desc: string }) => {
  return (
    <div className="px-0 py-2">
      <h1 className="text-[2rem] font-extrabold mt-0 mb-1">{pageNm}</h1>
      <h3 className="font-normal">{desc}</h3>
    </div>
  );
};
