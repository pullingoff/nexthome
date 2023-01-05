import styled from 'styled-components';
import ProjectSection from './ProjectSection';
import {
  education,
  headerInfo,
  otherExperiences,
  projectExperiences,
  techStacks,
  workExperiences,
} from '#src/data/about';

const S: any = {};

const Resume = () => {
  return (
    <S.ResumeMain>
      <ResumeHeader />
      <ProjectSection title="Work Experiences" list={workExperiences} />
      <ProjectSection title="Projects" list={projectExperiences} />
      <ProjectSection title="Skills" list={techStacks} />
      <ProjectSection title="Other Experiences" list={otherExperiences} />
      <ProjectSection title="Education" list={education} />
    </S.ResumeMain>
  );
};

export default Resume;

S.ResumeMain = styled.main`
  margin: 20px 0;
  // desktop view
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    margin: 15px 30px 0;
  }
`;

const ResumeHeader = () => {
  return (
    <S.HeaderSection>
      <S.TitleBox>
        <S.NameH1>{headerInfo.name}</S.NameH1>
        <S.JobSpan>{headerInfo.job}</S.JobSpan>
      </S.TitleBox>
      <S.EmailSpan>
        Email: {headerInfo.email} <br />
      </S.EmailSpan>
      <div style={{ marginTop: '1rem' }}>
        {headerInfo.firstSentences?.map((stc, idx) => (
          <IntroLines key={idx}>{stc}</IntroLines>
        ))}
      </div>
    </S.HeaderSection>
  );
};

const IntroLines = styled.span`
  display: block;
  margin: var(--sm) 0;
  font-weight: 500;
`;

S.EmailSpan = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
  margin: 6px 0;
  letter-spacing: initial;
`;
S.JobSpan = styled.span`
  font-size: var(--3xl);
  margin-left: var(--md);
  padding-top: var(--md);
  font-weight: 600;
`;

S.TitleBox = styled.div`
  display: flex;
  align-self: flex-start;
  justify-self: flex-start;
`;
S.HeaderSection = styled.section`
  width: 100%;
  display: grid;
`;
S.NameH1 = styled.h1`
  border-top: none;
  font-size: var(--9xl);
  font-weight: 900;
  margin: 0 auto 0 0;
  color: var(--theme1-color);
`;
