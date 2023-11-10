import { Post } from '#src/type';
import { useEffect, useState } from 'react';
import format from 'date-fns/format';
import Link from 'next/link';

const PostCardItem = ({ href, post }: { href: string; post: Post }) => {
  const [publishedAt, setPublishedAt] = useState<string>('');
  const { title, description, tags } = post.frontmatter;

  // 사파리용 split 서버, 클라이언트 다른 경우가 있음
  useEffect(() => {
    try {
      setPublishedAt(
        format(new Date(post.frontmatter.date), 'yyyy년 MM월 dd일')
      );
    } catch (e) {
      setPublishedAt(post.frontmatter.date.toString().split(/(\s+)/)[0]);
    }
  }, [post.frontmatter.date]);

  return (
    <div className="relative flex flex-col overflow-hidden h-full border border-[color:var(--theme2-color)] z-0 rounded-lg hover:-translate-y-2 hover:shadow-[10px_10px_lightgray] hover:duration-200">
      <Link href={href}>
        <section className="flex flex-col pb-2.5 p-5 [&>*]:block">
          <h3 className="font-bold mt-1">{title}</h3>
          <p className="text-[0.95rem] leading-normal overflow-hidden text-ellipsis mx-0 my-2.5">
            {description}
          </p>
          <p className="text-[0.8rem] mx-0 my-1">{publishedAt}</p>
        </section>
      </Link>
      <section className="flex flex-wrap ml-5 mr-auto mt-0 mb-4">
        {tags?.map((text: string) => (
          <Link
            className="text-[white] uppercase text-[0.85rem] font-semibold bg-[color:var(--theme1-color)] rounded-[var(--border-radius-sm)] ml-0 mr-2 mt-0 mb-2 px-2 py-0.5 hover:text-[color:var(--theme1-color)] hover:bg-[initial] hover:shadow-[0_0_0_2px_var(--theme1-color)_inset]"
            key={text}
            href={`/tags/${text}/1`}
          >
            {text.split(' ').join('-')}
          </Link>
        ))}
      </section>
      {/* todo Tag 4개 이상이면 안 보이도록 조치 필요 */}
    </div>
  );
};

export default PostCardItem;
