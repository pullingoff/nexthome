import styled from 'styled-components';

const S: any = {};

S.Org = styled.span`
  display: block;
  font-weight: 800;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

S.SectionHeader = styled.h2`
  margin: 1.25rem 0 0.5rem;
  font-size: 1.75rem;
  color: var(--theme1-color);
  font-weight: 800;
  letter-spacing: initial;
`;

S.OrgContainer = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 1rem;
`;

S.PjTech = styled.span`
  font-weight: 400;
  padding-left: 0.25rem;

  & + &:before {
    content: '|';
    margin-right: 5px;
  }
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

export default S;
