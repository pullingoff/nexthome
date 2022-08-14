import * as S from '#src/styles/aboutStyle';
import { IEducation, IExp, ITechStack } from '#type/about';
import CustomEmoji from '#components/common/CustomEmoji';
import WorkProject from './WorkProject';
import styled from 'styled-components';
import CustomLink from '#components/common/CustomLink';

const ProjectContainer = ({ title, list }: { title: string; list: any[] }) => {
  return (
    <S.StyledMain>
      <S.SectionHeader>
        <CustomEmoji aria="Woman Technologist">👩🏻‍💻 </CustomEmoji>
        {title}
      </S.SectionHeader>
      <S.StyledOrgContainer>
        {title.includes('Education') &&
          list.map((edu: IEducation) => (
            <S.StyledPjContainer key={edu.course}>
              <Education {...edu} />
            </S.StyledPjContainer>
          ))}
        {title.includes('Experiences') &&
          list.map((exp: IExp) => (
            <S.StyledPjContainer key={exp.organization}>
              <Project {...exp} />
            </S.StyledPjContainer>
          ))}
        {title.includes('Projects') &&
          list.map((exp: IExp) => (
            <S.StyledPjContainer key={exp.organization}>
              <Project {...exp} />
            </S.StyledPjContainer>
          ))}
        {title.includes('Skills') &&
          list.map((skill: ITechStack) => (
            <SkillP key={skill.type}>
              - {skill.type}:
              {skill?.skill.map(sk => (
                <S.SkillSpan key={sk}> {sk}</S.SkillSpan>
              ))}
            </SkillP>
          ))}
      </S.StyledOrgContainer>
    </S.StyledMain>
  );
};

const Education = (edu: IEducation) => {
  return (
    <>
      <S.Org>{edu.institute}</S.Org>
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
          <S.OrgHoverLink>{exp.organization} 🔗</S.OrgHoverLink>
        </CustomLink>
      ) : (
        <S.Org>{exp.organization}</S.Org>
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
    <S.JobDate>
      {first} | {last}
    </S.JobDate>
  );
};

const DetailSection = ({ list }: { list: string[] }) => {
  return (
    <S.DetailUl>
      {list.map((det, idx) => (
        <S.Detail key={idx}>{det} </S.Detail>
      ))}
    </S.DetailUl>
  );
};

const SkillP = styled.span`
  line-height: 160%;
  font-weight: bold;
  font-size: 1.05srem;
`;

export default ProjectContainer;
