import styled from 'styled-components';
import CustomLink from '../common/CustomLink';
import { Post } from '#src/type';
import { useEffect, useState } from 'react';
import format from 'date-fns/format';

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
      <CustomLink href={href}>
        <section className="flex flex-col pb-2.5 p-5 [&>*]:block">
          <h3 className="font-bold mt-1">{title}</h3>
          <p className="text-[0.95rem] leading-normal overflow-hidden text-ellipsis mx-0 my-2.5">
            {description}
          </p>
          <p className="text-[0.8rem] mx-0 my-1">{publishedAt}</p>
        </section>
      </CustomLink>
      <section className="flex flex-wrap ml-5 mr-auto mt-0 mb-4">
        {tags?.map((t: string) => (
          <TagItem key={t} text={t} />
        ))}
      </section>
      {/* todo Tag 4개 이상이면 안 보이도록 조치 필요 */}
    </div>
  );
};

const TagItem = ({ text }: { text: string }) => {
  return (
    <StyledTag href={`/tags/${text}/1`}>{text.split(' ').join('-')}</StyledTag>
  );
};

export const StyledTag = styled(CustomLink)`
  color: var(--color-white);
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.125rem 0.75rem;
  background-color: var(--theme1-color);
  border-radius: var(--border-radius-sm);
  margin: 0 var(--md) var(--md) 0;

  &:hover {
    color: var(--theme1-color);
    background-color: initial;
    box-shadow: 0 0 0 2px var(--theme1-color) inset;
  }
`;

export default PostCardItem;
