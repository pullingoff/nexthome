import styled from 'styled-components';

const S: any = {};

S.StyledMain = styled.main`
  &:before {
    content: ' ';
    border-top: 1px dashed lightgrey;
    margin-top: 20px;
    position: relative;
    top: 1px;
    display: block;
  }
`;
S.Org = styled.span`
  display: block;
  font-weight: 800;
  font-size: var(--3xl);
  margin-bottom: 7px;
`;

S.OrgHoverLink = styled(S.Org)`
  display: block;
  font-weight: 800;
  font-size: var(--3xl);
  margin-bottom: 7px;

  &:hover {
    cursor: pointer;
    color: salmon;
  }
`;

S.SectionHeader = styled.h2`
  margin: 20px 0 10px;
  font-size: var(--8xl);
  color: var(--theme1-color);
  font-weight: 800;
  letter-spacing: initial;
`;

S.OrgContainer = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 15px;
`;

S.PjTitle = styled.h3`
  margin: 10px 0;
`;

S.PjTitleWithLink = styled(S.PjTitle)`
  &:hover {
    cursor: pointer;
    color: salmon;
  }
`;

S.ExplainP = styled.p`
  font-weight: 500;
  margin-top: 1px;
  margin-bottom: 7px;
  padding-left: 5px;
`;

S.PjTech = styled.span`
  font-weight: 300;
  padding-left: 5px;

  & + &:before {
    content: '|';
    margin-right: 5px;
  }
`;

S.PjArticle = styled.article`
  // margin-top: var(--lg);
  margin-bottom: var(--md);
  line-height: 150%;
`;

S.DetailList = styled.ul`
  margin: 5px;
  margin-bottom: 1rem;
  list-style: none;
`;

S.DetailItem = styled.li`
  margin: 4px 0;
  padding-left: 5px;

  &:before {
    content: '-';
    position: relative;
    margin-right: var(--md);
  }
`;

S.JobDate = styled.span`
  font-weight: 400;
`;

S.SkillSpan = styled.span`
  font-weight: initial;

  &:not(:last-child):after {
    content: ',';
  }
`;

export default S;
