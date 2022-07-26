import { StyledTag } from '#components/tag/Tag';
import { ITag } from '#src/pages/tags/[tag]/[keyword]';
import styled from 'styled-components';
import { StyledSection, Title } from './RecentPost';

const TagContainer = ({ allTags }: { allTags: ITag[] }) => {
  return (
    <StyledSection>
      <Title>Categories</Title>
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

const StyledTagContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  row-gap: 0.5rem;
  text-align: center;
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
