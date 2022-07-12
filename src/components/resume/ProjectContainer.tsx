import {
  StyledOrgContainer,
  SectionHeader,
  StyledMain,
  StyledPjContainer,
  Org,
  Detail,
  DetailUl,
  JobDate,
  SkillSpan,
  OrgHoverLink,
} from '#src/styles/aboutStyle';
import { IEducation, IExp, ITechStack } from '#type/about';
import CustomEmoji from '#components/common/CustomEmoji';
import WorkProject from './WorkProject';
import styled from 'styled-components';
import CustomLink from '#components/common/CustomLink';

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
            <StyledPjContainer key={edu.course}>
              <Education {...edu} />
            </StyledPjContainer>
          ))}
        {title.includes('Experiences') &&
          list.map((exp: IExp) => (
            <StyledPjContainer key={exp.organization}>
              <Project {...exp} />
            </StyledPjContainer>
          ))}
        {title.includes('Projects') &&
          list.map((exp: IExp) => (
            <StyledPjContainer key={exp.organization}>
              <Project {...exp} />
            </StyledPjContainer>
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
      {exp.link ? (
        <CustomLink href={exp.link}>
          <OrgHoverLink>{exp.organization} 🔗</OrgHoverLink>
        </CustomLink>
      ) : (
        <Org>{exp.organization}</Org>
      )}
      <DateSection first={exp.description} last={exp.period} />
      {exp.projects?.map((pj, idx) => (
        <div key={pj.title || idx}>
          <WorkProject {...pj} />
        </div>
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

const SkillP = styled.span`
  line-height: 160%;
  font-weight: bold;
  font-size: 1.05srem;
`;

export default ProjectContainer;
