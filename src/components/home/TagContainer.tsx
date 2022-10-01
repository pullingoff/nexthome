import { StyledTag } from '#components/tag/Tag';
import { ITag } from '#src/pages/tags/[tag]/[keyword]';
import styled from 'styled-components';
import { StyledSection, Title } from './RecentPost';
import blueHeart from '#public/images/blueheart.png';
import Image from 'next/image';

const TagContainer = ({
  allTags,
  moveToRandomPost,
}: {
  allTags: ITag[];
  moveToRandomPost: any;
}) => {
  return (
    <StyledSection>
      <TopContainer>
        <Title>Categories</Title>
        <GetRandomIcon
          alt="get random post"
          width="35px"
          height="35px"
          src={blueHeart}
          onClick={moveToRandomPost}
        />
      </TopContainer>
      <StyledTagContainer>
        {allTags.map(tag => (
          <StyledTagItem key={tag.tag} href={`/tags/${tag.tag}/1`}>
            {tag.tag} ({tag.count})
          </StyledTagItem>
        ))}
      </StyledTagContainer>
    </StyledSection>
  );
};

const GetRandomIcon = styled(Image)`
  margin: 0.25rem;
  &:hover {
    transform: translateX(-2px);
  }
`;

const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTagContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  row-gap: 0.5rem;
  text-align: center;
  font-size: 0.9rem;
  a {
    margin-bottom: 0;
  }
  a:nth-child(n + 17) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.device.sm}) {
    a:nth-child(n + 12) {
      display: none;
    }
  }
`;

const StyledTagItem = styled(StyledTag)`
  flex-grow: 1;
`;

export default TagContainer;
