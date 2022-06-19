import {
  StyledOrgContainer,
  SectionHeader,
  StyledMain,
  PjContainer,
  Org,
  Detail,
  DetailUl,
  JobDate,
  SkillSpan,
} from '@styles/aboutStyle';
import { IEducation, IExp, ITechStack } from 'types/aboutTypes';
import CustomEmoji from '@components/common/CustomEmoji';
import WorkProject from './WorkProject';
import styled from 'styled-components';

const ProjectContainer = ({ title, list }: { title: string; list: any }) => {
  return (
    <StyledMain>
      <SectionHeader>
        <CustomEmoji aria="Woman Technologist">👩🏻‍💻 </CustomEmoji>
        {title}
      </SectionHeader>
      <StyledOrgContainer>
        {title.includes('Education') &&
          list.map((edu: IEducation) => (
            <PjContainer key={edu.course}>
              <Education {...edu} />
            </PjContainer>
          ))}
        {title.includes('Experiences') &&
          list.map((exp: IExp) => (
            <PjContainer key={exp.organization}>
              <Project {...exp} />
            </PjContainer>
          ))}
        {title.includes('Projects') &&
          list.map((exp: IExp) => (
            <PjContainer key={exp.organization}>
              <Project {...exp} />
            </PjContainer>
          ))}
        {title.includes('Skills') &&
          list.map((skill: ITechStack) => (
            <SkillP key={skill.type}>
              - {skill.type}:
              {skill?.skill.map(sk => (
                <SkillSpan key={sk}> {sk}</SkillSpan>
              ))}
            </SkillP>
          ))}
      </StyledOrgContainer>
    </StyledMain>
  );
};

const SkillP = styled.span`
  line-height: 160%;
  font-weight: bold;
  font-size: 1.05srem;
`;

const Education = (edu: IEducation) => {
  return (
    <>
      <Org>{edu.institute}</Org>
      <DateSection first={edu.course} last={edu.period} />
      {edu.details && <DetailSection list={edu.details} />}
    </>
  );
};

const Project = (exp: IExp) => {
  return (
    <>
      <Org>{exp.organization}</Org>
      <DateSection first={exp.description} last={exp.period} />
      {exp.projects?.map(pj => (
        <WorkProject {...pj} key={pj.title} />
      ))}
      {exp.details && <DetailSection list={exp.details} />}
    </>
  );
};

const DateSection = ({ first, last }: { first: string; last: string }) => {
  return (
    <JobDate>
      {first} | {last}
    </JobDate>
  );
};

const DetailSection = ({ list }: { list: string[] }) => {
  return (
    <DetailUl>
      {list.map((det, idx) => (
        <Detail key={idx}>{det} </Detail>
      ))}
    </DetailUl>
  );
};

export default ProjectContainer;
