import CustomEmoji from "components/common/CustomEmoji";
import { Fragment } from "react";
import { PROJECTS } from "data/about";
import Link from "next/link";

const ResumeProjects = () => {
  return (
    <main className='before:content-["_"] before:relative before:block before:mt-4 before:border-t-[lightgrey] before:border-t before:border-dashed before:top-px'>
      <h2 className="text-2xl text-light font-extrabold tracking-[initial] mt-5 mb-2 mx-0">
        <CustomEmoji aria="Woman Technologist">👩🏻‍💻 </CustomEmoji>
        Projects
      </h2>
      <section className="w-full flex flex-col flex-nowrap mb-3">
        {PROJECTS.map((project) => (
          <Fragment key={project.organization}>
            <Link href={project.link} target="_blank">
              <span className="font-bold text-lg mr-1 mb-1 hover:cursor-pointer hover:text-light">
                {project.organization} 🔗
              </span>
              {project.period}
              {project.description && (
                <p className="mt-2 font-bold">: {project.description}</p>
              )}
            </Link>
            {project.items.map((pj, idx) => (
              <div key={idx}>
                {pj.skills.map((t, idx) => (
                  <span className="font-normal pl-1" key={t}>
                    {t}
                    {idx === pj.skills.length - 1 ? "" : ","}
                  </span>
                ))}
                {pj.descriptions && (
                  <ul className="mb-1 m-1 list-none">
                    {pj.descriptions.map((det, idx) => (
                      <li
                        className='mx-0 my-1 pl-1 before:content-["-"] before:relative before:mr-2'
                        key={idx}
                      >
                        {det}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </Fragment>
        ))}
      </section>
    </main>
  );
};

export default ResumeProjects;
