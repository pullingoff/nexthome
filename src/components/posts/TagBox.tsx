import { ITag } from '#src/type';
import Link from 'next/link';

const TagBox = ({ tags }: { tags: ITag[] }) => {
  return (
    <ul className="flex flex-row flex-wrap text-center text-sm">
      {tags.map(tag => (
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

export default TagBox;
