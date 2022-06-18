import { Detail, DetailUl, Org, JobDate } from '@styles/aboutStyle';
import AboutProject from './AboutProject';
import { IExp, IWorkProject } from 'types/aboutTypes';

const OrgContainer = (exp: IExp) => {
  return (
    <>
      {exp.link}
      <Org>{exp.organization}</Org>
      <JobDate>
        {exp.description} | {exp.period}
      </JobDate>
      {exp.projects?.map(pj => (
        <AboutProject {...pj} key={pj.title} />
      ))}
      {exp.details && (
        <DetailUl>
          {exp.details.map((det, idx) => (
            <Detail key={idx}>{det} </Detail>
          ))}
        </DetailUl>
      )}
    </>
  );
};

export default OrgContainer;
