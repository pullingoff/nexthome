import S from '#styles/About.styled';
import CustomEmoji from '#components/common/CustomEmoji';
import styled from 'styled-components';
import CustomLink from '#components/common/CustomLink';
import { Education, Experience, TechStack, WorkProject } from '#src/type';

const ProjectSection = ({ title, list }: { title: string; list: any[] }) => {
  return (
    <S.StyledMain>
      <S.SectionHeader>
        <CustomEmoji aria="Woman Technologist">👩🏻‍💻 </CustomEmoji>
        {title}
      </S.SectionHeader>
      <S.OrgContainer>
        {title.includes('Education') &&
          list.map((edu: Education) => (
            <S.PjArticle key={edu.course}>
              <EducationBox {...edu} />
            </S.PjArticle>
          ))}
        {title.includes('Experiences') &&
          list.map((exp: Experience) => (
            <S.PjArticle key={exp.organization}>
              <ProjectBox {...exp} />
            </S.PjArticle>
          ))}
        {title.includes('Projects') &&
          list.map((exp: Experience) => (
            <S.PjArticle key={exp.organization}>
              <ProjectBox {...exp} />
            </S.PjArticle>
          ))}
        {title.includes('Skills') &&
          list.map((skill: TechStack) => (
            <SkillSpan key={skill.type}>
              - {skill.type}:
              {skill?.skill.map(sk => (
                <S.SkillSpan key={sk}> {sk}</S.SkillSpan>
              ))}
            </SkillSpan>
          ))}
      </S.OrgContainer>
    </S.StyledMain>
  );
};

const WorkProjectBox = (pj: WorkProject) => {
  return (
    <S.PjArticle>
      {pj.link ? (
        <CustomLink href={pj.link} target="_blank">
          <S.PjTitleWithLink>{pj.title} 🔗</S.PjTitleWithLink>
        </CustomLink>
      ) : (
        <S.PjTitle> {pj.title}</S.PjTitle>
      )}
      <S.ExplainP>{pj.description}</S.ExplainP>
      {pj.tech?.map(t => (
        <S.PjTech key={t}>{t}</S.PjTech>
      ))}
      {pj.details && (
        <S.DetailList>
          {pj.details.map((det, idx) => (
            <S.DetailItem key={idx}>{det} </S.DetailItem>
          ))}
        </S.DetailList>
      )}
    </S.PjArticle>
  );
};

const EducationBox = (edu: Education) => {
  return (
    <>
      <S.Org>{edu.institute}</S.Org>
      <DateSection first={edu.course} last={edu.period} />
      {edu.details && <DetailSection list={edu.details} />}
    </>
  );
};

const ProjectBox = (exp: Experience) => {
  return (
    <>
      {exp.link ? (
        <CustomLink href={exp.link} target="_blank">
          <S.OrgHoverLink>{exp.organization} 🔗</S.OrgHoverLink>
        </CustomLink>
      ) : (
        <S.Org>{exp.organization}</S.Org>
      )}
      <DateSection first={exp.description} last={exp.period} />
      {exp.projects?.map((pj, idx) => (
        <div key={pj.title || idx}>
          <WorkProjectBox {...pj} />
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
    <S.DetailList>
      {list.map((det, idx) => (
        <S.DetailItem key={idx}>{det} </S.DetailItem>
      ))}
    </S.DetailList>
  );
};

const SkillSpan = styled.span`
  line-height: 160%;
  font-weight: bold;
  font-size: 1.05rem;
`;

export default ProjectSection;
