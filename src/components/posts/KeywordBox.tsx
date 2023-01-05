import styled from 'styled-components';

const S: any = {};
const KeywordBox = ({ pageNm, desc }: { pageNm: string; desc: string }) => {
  return (
    <S.PageHeader>
      <S.PageName>{pageNm}</S.PageName>
      <S.PageDesc>{desc}</S.PageDesc>
    </S.PageHeader>
  );
};

export default KeywordBox;

S.PageHeader = styled.div`
  padding: var(--md) 0;
`;

S.PageName = styled.h1`
  font-size: var(--9xl);
  font-weight: 800;
  @media (max-width: ${({ theme }) => theme.device.md}) {
    margin: var(--md) 0;
  }
`;

S.PageDesc = styled.h3`
  @media (max-width: ${({ theme }) => theme.device.md}) {
    margin: var(--md) 0;
  }
`;
