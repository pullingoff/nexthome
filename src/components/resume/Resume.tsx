import ProjectSection from './ProjectSection';
import {
  education,
  headerInfo,
  otherExperiences,
  projectExperiences,
  techStacks,
  workExperiences,
} from '#src/data/about';

const Resume = () => {
  return (
    <main>
      <ResumeHeader />
      <ProjectSection title="Work Experiences" list={workExperiences} />
      <ProjectSection title="Projects" list={projectExperiences} />
      <ProjectSection title="Skills" list={techStacks} />
      <ProjectSection title="Other Experiences" list={otherExperiences} />
      <ProjectSection title="Education" list={education} />
    </main>
  );
};

export default Resume;

const ResumeHeader = () => {
  return (
    <section className="w-full grid">
      <div className="flex self-start justify-self-start">
        <h1 className="text-3xl font-black my-0">{headerInfo.name}</h1>
        <span className="text-xl font-semibold ml-2 pt-2">
          {headerInfo.job}
        </span>
      </div>
      <span className="font-normal mt-1">
        Email: {headerInfo.email} <br />
      </span>
      <div className="mt-2 ml-1">
        <h3 className="mb-1">{headerInfo.mainSentence}</h3>
        {headerInfo.firstSentences?.map((stc, idx) => (
          <span key={idx} className="block font-medium mx-0 mb-0.5">
            {stc}
          </span>
        ))}
      </div>
    </section>
  );
};
