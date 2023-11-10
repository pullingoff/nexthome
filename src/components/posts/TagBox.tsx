import { ITag } from '#src/type';
import Link from 'next/link';

const TagBox = ({ tags }: { tags: ITag[] }) => {
  return (
    <ul className="flex flex-row flex-wrap text-center text-sm">
      {tags.map(tag => (
        <Link
          className="grow text-[white] uppercase text-[0.85rem] font-semibold bg-[color:var(--theme1-color)] rounded-[var(--border-radius-sm)] ml-0 mr-2 mt-0 mb-2 px-2 py-0.5 hover:text-[color:var(--theme1-color)] hover:bg-[initial] hover:shadow-[0_0_0_2px_var(--theme1-color)_inset]"
          key={tag.tag}
          href={`/tags/${tag.tag}/1`}
        >
          {tag.tag} ({tag.count})
        </Link>
      ))}
    </ul>
  );
};

export default TagBox;
