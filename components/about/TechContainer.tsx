import { techStacks } from '../../data/about';
import {
  SectionHeader,
  StyledMain,
  StyledOrgContainer,
} from '@styles/aboutStyle.js';
import styled from 'styled-components';

export default function TechContainer() {
  return (
    <StyledMain>
      <SectionHeader>
        <span role="img" aria-label="">
          👩🏻‍💻{' '}
        </span>
        Skills.
      </SectionHeader>
      <StyledOrgContainer>
        {techStacks?.map((stack, idx) => (
          <StrongP key={idx}>
            {stack.type}:
            {stack?.skill.map((sk, _) => (
              <SkillSpan key={sk}> {sk}</SkillSpan>
            ))}
          </StrongP>
        ))}
      </StyledOrgContainer>
    </StyledMain>
  );
}

const StrongP = styled.strong`
  font-size: 1.1rem;
  margin-bottom: 5px;
  &:before {
    content: '-';
    margin-right: 0.5rem;
  }
`;

const SkillSpan = styled.span`
  font-weight: initial;
  &:not(:last-child):after {
    content: ',';
  }
`;
