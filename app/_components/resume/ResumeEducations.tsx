import CustomEmoji from "#components/common/CustomEmoji";
import { Fragment } from "react";
import { education } from "#data/about";

const ResumeEducations = () => {
  return (
    <main className='before:content-["_"] before:relative before:block before:mt-4 before:border-t-[lightgrey] before:border-t before:border-dashed before:top-px'>
      <h2 className="text-2xl text-light font-extrabold tracking-[initial] mt-5 mb-2 mx-0">
        <CustomEmoji aria="Woman Technologist">👩🏻‍💻 </CustomEmoji>
        Education
      </h2>
      <section className="w-full flex flex-col flex-nowrap mb-3">
        {education.map((edu, idx) => (
          <Fragment key={idx}>
            <div>
              <span className="font-bold text-lg mr-2 mb-1">
                {edu.institute}
              </span>
              <span className="font-normal text-md">{edu.period}</span>
            </div>
            <ul className="mb-1 m-1 list-none">
              {edu.details?.map((detail, idx) => (
                <li
                  className='mx-0 my-1 pl-1 before:content-["-"] before:relative before:mr-2'
                  key={idx}
                >
                  {detail}
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
      </section>
    </main>
  );
};

export default ResumeEducations;
