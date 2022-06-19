import ResumeHeader from './ResumeHeader';
import '@styles/aboutStyle.js';
import styled from 'styled-components';
import ProjectContainer from './ProjectContainer';
import {
  education,
  otherExperiences,
  projectExperiences,
  techStacks,
  workExperiences,
} from '@data/about';

export default function ResumeContainer() {
  return (
    <StyledAboutContainer>
      <ResumeHeader />
      <ProjectContainer title="Work Experiences." list={workExperiences} />
      <ProjectContainer title="Projects." list={projectExperiences} />
      <ProjectContainer title="Skills." list={techStacks} />
      <ProjectContainer title="Other Experiences." list={otherExperiences} />
      <ProjectContainer title="Education." list={education} />
    </StyledAboutContainer>
  );
}

const StyledAboutContainer = styled.main`
  margin: 20px 0;
  // desktop view
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    margin: 50px 30px 0;
  }
`;
