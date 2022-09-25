import '#styles/aboutStyle.js';
import styled from 'styled-components';
import ProjectContainer from './ProjectContainer';
import {
  education,
  headerInfo,
  otherExperiences,
  projectExperiences,
  techStacks,
  workExperiences,
} from '#src/data/about';

export default function ResumeContainer() {
  return (
    <StyleResumeContainer>
      <ResumeHeader />
      <ProjectContainer title="Work Experiences" list={workExperiences} />
      <ProjectContainer title="Projects" list={projectExperiences} />
      <ProjectContainer title="Skills" list={techStacks} />
      <ProjectContainer title="Other Experiences" list={otherExperiences} />
      <ProjectContainer title="Education" list={education} />
    </StyleResumeContainer>
  );
}

const StyleResumeContainer = styled.main`
  margin: 20px 0;
  // desktop view
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    margin: 15px 30px 0;
  }
`;


const ResumeHeader = () => {
  return (
    <StyledHeader>
      <StyledTitle>
        <StyledName>{headerInfo.name}</StyledName>
        <StyledJob>{headerInfo.job}</StyledJob>
      </StyledTitle>
      <StyledEmail>
        Email: {headerInfo.email} <br />
      </StyledEmail>
      <div style={{ marginTop: '1rem' }}>
        {headerInfo.firstSentences?.map((stc, idx) => (
          <IntroLines key={idx}>{stc}</IntroLines>
        ))}
      </div>
    </StyledHeader>
  );
};

const IntroLines = styled.span`
  display: block;
  margin: var(--sm) 0;
  font-weight: 500;
`;

const StyledEmail = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
  margin: 6px 0;
  letter-spacing: initial;
`;
const StyledJob = styled.span`
  font-size: var(--3xl);
  margin-left: var(--md);
  padding-top: var(--md);
  font-weight: 600;
`;

const StyledTitle = styled.div`
  display: flex;
  align-self: flex-start;
  justify-self: flex-start;
`;
const StyledHeader = styled.section`
  width: 100%;
  display: grid;
`;
const StyledName = styled.h1`
  border-top: none;
  font-size: var(--9xl);
  font-weight: 900;
  margin: 0 auto 0 0;
  color: var(--theme1-color);
`;
