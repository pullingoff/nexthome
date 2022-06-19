import styled from 'styled-components';

// about에서 공통되는 부분만 여기에 적음. 공통 아닌 것은 각 컴포넌트 안에 있음.

export const StyledMain = styled.main`
  &:before {
    content: ' ';
    border-top: 1px dashed lightgrey;
    margin-top: 20px;
    position: relative;
    top: 1px;
    display: block;
  }
`;
export const Org = styled.span`
  display: block;
  font-weight: 800;
  font-size: var(--3xl);
  margin-bottom: 7px;
`;

export const OrgHoverLink = styled(Org)`
  display: block;
  font-weight: 800;
  font-size: var(--3xl);
  margin-bottom: 7px;
  &:hover {
    cursor: pointer;
    color: salmon;
  }
`;

export const SectionHeader = styled.h2`
  margin: 20px 0 10px;
  font-size: var(--8xl);
  color: var(--theme1-color);
  font-weight: 800;
  letter-spacing: initial;
`;

export const StyledOrgContainer = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 15px;
`;

export const Project = styled.section`
  border: 2px solid violet;
  align-items: center;
  margin: 5px 0;
`;

export const PjTitle = styled.h3`
  margin: 10px 0;
`;

export const PjTitleHover = styled(PjTitle)`
  &:hover {
    cursor: pointer;
    color: salmon;
  }
`;

export const PExplain = styled.p`
  font-weight: 500;
  margin-top: 1px;
  margin-bottom: 7px;
  padding-left: 5px;
`;

export const PjTech = styled.span`
  font-weight: 300;
  padding-left: 5px;
  & + &:before {
    content: '|';
    margin-right: 5px;
  }
`;

export const StyledPjContainer = styled.article`
  // margin-top: var(--lg);
  margin-bottom: var(--md);
  line-height: 150%;
`;

export const DetailUl = styled.ul`
  margin: 5px;
  margin-bottom: 1rem;
  list-style: none;
`;

export const Detail = styled.li`
  margin: 4px 0;
  padding-left: 5px;
  &:before {
    content: '-';
    position: relative;
    margin-right: var(--md);
  }
`;

export const JobDate = styled.span`
  font-weight: 400;
`;

export const SkillSpan = styled.span`
  font-weight: initial;
  &:not(:last-child):after {
    content: ',';
  }
`;
