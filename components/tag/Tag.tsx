import CustomLink from '@components/common/CustomLink';
import styled from 'styled-components';

const Tag = ({ text }: { text: string }) => {
  return (
    <StyledTag href={`/tags/${text}/pages/1`}>
      {text.split(' ').join('-')}
    </StyledTag>
  );
};

export default Tag;

export const StyledTag = styled(CustomLink)`
  color: var(--color-white);
  text-transform: uppercase;
  font-weight: 700;
  padding: 0.125rem 0.75rem;
  background-color: var(--theme1-color);
  border-radius: var(--border-radius-sm);
  margin: 0 var(--md) var(--md) 0;
  &:hover {
    background-color: salmon;
    color: white;
  }
`;
