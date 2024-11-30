import CustomEmoji from "#components/common/CustomEmoji";
import { OTHER_EXPERIENCES } from "#data/about";
import Link from "next/link";

const ResumeOtherExperiences = () => {
  return (
    <main className='before:content-["_"] before:relative before:block before:mt-4 before:border-t-[lightgrey] before:border-t before:border-dashed before:top-px'>
      <h2 className="text-2xl text-light font-extrabold tracking-[initial] mt-5 mb-2 mx-0">
        <CustomEmoji aria="Woman Technologist">👩🏻‍💻 </CustomEmoji>
        Other Experiences
      </h2>
      <article className="w-full flex flex-col flex-nowrap mb-3">
        {OTHER_EXPERIENCES.map((exp) => (
          <section key={exp.organization}>
            <Link href={exp.link} target="_blank">
              <span className="font-bold text-lg mr-1 mb-1 hover:cursor-pointer hover:text-light">
                {exp.organization} 🔗
              </span>
              {exp.period}
            </Link>
            <ul className="mb-1 m-1 list-none">
              {exp.details.map((det, idx) => (
                <li
                  className='mx-0 my-1 pl-1 before:content-["-"] before:relative before:mr-2'
                  key={idx}
                >
                  {det}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </article>
    </main>
  );
};

export default ResumeOtherExperiences;
