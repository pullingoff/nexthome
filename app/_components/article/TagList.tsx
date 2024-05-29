"use client";
import Link from "next/link";
import { Tag } from "../../utils/tag";

const TagList = ({ tags }: { tags: Tag[] }) => {
  return (
    <ul className="flex flex-row flex-wrap text-center text-sm pb-2">
      {tags.map((tag) => (
        <Link
          className="grow text-[white] uppercase text-[0.85rem] font-semibold bg-deep-brown rounded ml-0 mr-2 mt-0 mb-2 px-2 py-0.5 hover:text-deep-brown hover:bg-[initial] hover:shadow-deep-brown"
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
    <div className="flex flex-col gap-2 pb-4">
      <h1 className="text-3xl font-extrabold mt-0 mb-1">{pageNm}</h1>
      <h3 className="font-normal">{desc}</h3>
    </div>
  );
};
