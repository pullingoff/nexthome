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
  moveToRandomPost: any;
}) => {
  return (
    <>
      <TopContainer>
        <S.PageTitle>Categories</S.PageTitle>
        <GetRandomIcon
          alt="get random post"
          width="35px"
          height="35px"
          src={blueHeart}
          onClick={moveToRandomPost}
        />
      </TopContainer>
      <TagList>
        {allTags.map(tag => (
          <TagItem key={tag.tag} href={`/tags/${tag.tag}/1`}>
            {tag.tag} ({tag.count})
          </TagItem>
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

const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TagList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  row-gap: 0.5rem;
  text-align: center;
  font-size: 0.9rem;

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

const TagItem = styled(StyledTag)`
  flex-grow: 1;
`;

export default TagBox;
