import CustomEmoji from '#components/common/CustomEmoji';
import { Education, Experience, TechStack, WorkProject } from '#src/type';
import { Fragment } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

const orgClasses = classNames('font-extrabold text-xl mr-1 mb-1');
const detailListClasses = 'mb-4 m-1 list-none';
const detailItemClasses =
  'mx-0 my-1 pl-1 before:content-["-"] before:relative before:mr-2';

const ProjectSection = ({ title, list }: { title: string; list: any[] }) => {
  return (
    <main className='before:content-["_"] before:relative before:block before:mt-4 before:border-t-[lightgrey] before:border-t before:border-dashed before:top-px'>
      <h2 className="text-2xl text-light-blue font-extrabold tracking-[initial] mt-5 mb-2 mx-0">
        <CustomEmoji aria="Woman Technologist">👩🏻‍💻 </CustomEmoji>
        {title}
      </h2>
      <section className="w-full flex flex-col flex-nowrap mb-4">
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
            <span className="leading-6 font-bold mb-1" key={skill.type}>
              - {skill.type}:
              {skill?.skill.map(sk => (
                <span
                  className='font-normal [&:not(:last-child):after]:content-[","]'
                  key={sk}
                >
                  {' '}
                  {sk}
                </span>
              ))}
            </span>
          ))}
      </section>
    </main>
  );
};

const WorkProjectBox = (pj: WorkProject) => {
  return (
    <>
      {pj.link ? (
        <Link href={pj.link} target="_blank">
          <h3 className="mx-0 my-2 hover:cursor-pointer hover:text-[salmon]">
            {pj.title} 🔗
          </h3>
        </Link>
      ) : (
        <>{pj.title && <h3 className="mx-0 my-2">• {pj.title}</h3>}</>
      )}
      <p className="font-medium mb-2 pl-1">{pj.description}</p>
      {pj.tech?.map((t, idx) => (
        <span className="font-normal pl-1" key={t}>
          {t}
          {idx === pj.tech.length - 1 ? '' : ','}
        </span>
      ))}
      {pj.details && (
        <ul className={detailListClasses}>
          {pj.details.map((det, idx) => (
            <li className={detailItemClasses} key={idx}>
              {det}{' '}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const EducationBox = (edu: Education) => {
  return (
    <>
      <span className={orgClasses}>{edu.institute}</span>
      <span className="font-normal">
        {edu.course} | {edu.period}
      </span>
      {edu.details && <DetailSection list={edu.details} />}
    </>
  );
};

const ProjectBox = (exp: Experience) => {
  const linkedOrgClasses = classNames(
    orgClasses,
    'hover:cursor-pointer hover:text-[salmon]'
  );
  return (
    <>
      {exp.link ? (
        <Link href={exp.link} target="_blank">
          <span className={linkedOrgClasses}>{exp.organization} 🔗</span>/{' '}
          {exp.period}
          {exp.description && (
            <p className="mt-2 font-bold">: {exp.description}</p>
          )}
        </Link>
      ) : (
        <>
          <span className={orgClasses}>{exp.organization}</span>{' '}
          {exp.description} / {exp.period}
        </>
      )}
      {exp.projects?.map((pj, idx) => (
        <div key={pj.title || idx}>
          <WorkProjectBox {...pj} />
        </div>
      ))}
      {exp.details && <DetailSection list={exp.details} />}
    </>
  );
};

const DetailSection = ({ list }: { list: string[] }) => {
  return (
    <ul className={detailListClasses}>
      {list.map((det, idx) => (
        <li className={detailItemClasses} key={idx}>
          {det}{' '}
        </li>
      ))}
    </ul>
  );
};

export default ProjectSection;
