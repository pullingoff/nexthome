import styled from 'styled-components';
import { StyledTag } from '#components/posts/PostCardItem';
import { ITag } from '#src/type';

const TagBox = ({ allTags }: { allTags: ITag[] }) => {
  return (
    <TagList className="flex flex-row flex-wrap gap-y-1 text-center text-sm">
      {allTags.map(tag => (
        <StyledTag className="grow" key={tag.tag} href={`/tags/${tag.tag}/1`}>
          {tag.tag} ({tag.count})
        </StyledTag>
      ))}
    </TagList>
  );
};

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
