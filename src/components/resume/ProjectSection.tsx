import S from '#styles/About.styled';
import CustomEmoji from '#components/common/CustomEmoji';
import CustomLink from '#components/common/CustomLink';
import { Education, Experience, TechStack, WorkProject } from '#src/type';
import { Fragment } from 'react';

const ProjectSection = ({ title, list }: { title: string; list: any[] }) => {
  return (
    <main className="before:content-['_'] before:relative before:block before:mt-4 before:border-t-[lightgrey] before:border-t before:border-dashed before:top-px">
      <S.SectionHeader>
        <CustomEmoji aria="Woman Technologist">👩🏻‍💻 </CustomEmoji>
        {title}
      </S.SectionHeader>
      <S.OrgContainer>
        {title.includes('Education') &&
          list.map((edu: Education) => (
            <Fragment key={edu.course}>
              <EducationBox {...edu} />
            </Fragment>
          ))}
        {title.includes('Experiences') &&
          list.map((exp: Experience) => (
            <Fragment key={exp.organization}>
              <ProjectBox {...exp} />
            </Fragment>
          ))}
        {title.includes('Projects') &&
          list.map((exp: Experience) => (
            <Fragment key={exp.organization}>
              <ProjectBox {...exp} />
            </Fragment>
          ))}
        {title.includes('Skills') &&
          list.map((skill: TechStack) => (
            <span className="leading-6 font-bold" key={skill.type}>
              - {skill.type}:
              {skill?.skill.map(sk => (
                <span
                  className="font-normal [&:not(:last-child):after]:content-[',']"
                  key={sk}
                >
                  {' '}
                  {sk}
                </span>
              ))}
            </span>
          ))}
      </S.OrgContainer>
    </main>
  );
};

const WorkProjectBox = (pj: WorkProject) => {
  return (
    <>
      {pj.link ? (
        <CustomLink href={pj.link} target="_blank">
          <h3 className="mx-0 my-2 hover:cursor-pointer hover:text-[salmon]">
            {pj.title} 🔗
          </h3>
        </CustomLink>
      ) : (
        <h3 className="mx-0 my-2"> {pj.title}</h3>
      )}
      <p className="font-medium mb-2 pl-1">{pj.description}</p>
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
    </>
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
          <S.Org className="hover:cursor-pointer hover:text-[salmon]">
            {exp.organization} 🔗
          </S.Org>
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
    <span className="font-normal">
      {first} | {last}
    </span>
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

export default ProjectSection;
