import styled from 'styled-components';
import blueHeart from '#public/images/blueheart.png';
import Image from 'next/image';
import { StyledTag } from '#components/posts/PostCardItem';
import S from '#styles/Common.styled';
import { ITag } from '#src/type';

const TagBox = ({
  allTags,
  moveToRandomPost,
}: {
  allTags: ITag[];
  moveToRandomPost?: any;
}) => {
  return (
    <>
      <section className="flex justify-between items-center">
        <S.PageTitle>Categories</S.PageTitle>
        <GetRandomIcon
          alt="get random post"
          width={35}
          height={35}
          src={blueHeart}
          onClick={moveToRandomPost}
        />
      </section>
      <TagList className="flex flex-row flex-wrap gap-y-1 text-center text-sm">
        {allTags.map(tag => (
          <StyledTag className="grow" key={tag.tag} href={`/tags/${tag.tag}/1`}>
            {tag.tag} ({tag.count})
          </StyledTag>
        ))}
      </TagList>
    </>
  );
};

const GetRandomIcon = styled(Image)`
  margin: 0.25rem;
  cursor: pointer;

  &:hover {
    transform: translateX(-2px);
  }
`;

const TagList = styled.ul`
  a {
    margin-bottom: 0;

    &:nth-child(n + 16) {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    a:nth-child(n + 12) {
      display: none;
    }
  }
`;

export default TagBox;
