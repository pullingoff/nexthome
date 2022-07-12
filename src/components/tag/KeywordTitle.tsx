import styled from 'styled-components';

const KeywordTitle = ({ pageNm, desc }: { pageNm: string; desc: string }) => {
  return (
    <StyledPageHeader>
      <PageName>{pageNm}</PageName>
      <PageDesc>{desc}</PageDesc>
    </StyledPageHeader>
  );
};

export default KeywordTitle;

const StyledPageHeader = styled.div`
  padding: var(--md) 0;
`;

const PageName = styled.h1`
  font-size: var(--9xl);
  font-weight: 800;
  @media (max-width: ${({ theme }) => theme.device.md}) {
    margin: var(--md) 0;
  }
`;

const PageDesc = styled.h3`
  @media (max-width: ${({ theme }) => theme.device.md}) {
    margin: var(--md) 0;
  }
`;
