import CustomEmoji from "components/common/CustomEmoji";
import { Fragment } from "react";
import { WORK_EXPERIENCES } from "data/about";

const ResumeWorkExperiences = () => {
  return (
    <main className='before:content-["_"] before:relative before:block before:mt-4 before:border-t-[lightgrey] before:border-t before:border-dashed before:top-px'>
      <h2 className="text-2xl text-light font-extrabold tracking-[initial] mt-5 mb-2 mx-0">
        <CustomEmoji aria="Woman Technologist">👩🏻‍💻 </CustomEmoji>
        Work Experiences
      </h2>
      <section className="w-full flex flex-col flex-nowrap mb-3">
        {WORK_EXPERIENCES.map((work) => (
          <Fragment key={work.organization}>
            <>
              <h4 className="font-bold text-xl mr-1 mt-3">
                {work.organization}
              </h4>
              {work.description} / {work.period}
              {work.projects.map((project, idx) => (
                <div key={idx} className="flex flex-col mt-2">
                  <section className="font-medium">
                    <h3 className="text-lg font-bold mx-0">
                      • {project.title}
                    </h3>
                    {project.description && (
                      <p className="pl-1">{project.description}</p>
                    )}
                    <section>
                      {project.skills?.map((t, idx) => (
                        <span className="ml-1" key={t}>
                          {t}
                          {project.skills && idx === project.skills.length - 1
                            ? ""
                            : ","}
                        </span>
                      ))}
                    </section>
                  </section>
                  {project.details && (
                    <ul className="mt-2 mb-3">
                      {project.details.map((detail, idx) => (
                        <li
                          className='mx-0 pl-1 before:content-["-"] before:relative before:mr-2'
                          key={idx}
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </>
          </Fragment>
        ))}
      </section>
    </main>
  );
};

export default ResumeWorkExperiences;
