import CustomEmoji from "components/common/CustomEmoji";
import { SKILLS } from "data/about";

const ResumeSkills = () => {
  return (
    <main className='before:content-["_"] before:relative before:block before:mt-4 before:border-t-[lightgrey] before:border-t before:border-dashed before:top-px'>
      <h2 className="text-2xl text-light font-extrabold tracking-[initial] mt-5 mb-2 mx-0">
        <CustomEmoji aria="Woman Technologist">👩🏻‍💻 </CustomEmoji>
        Skills
      </h2>
      <section className="w-full flex flex-col flex-nowrap mb-3">
        {SKILLS.map((skill) => (
          <span className="leading-6 font-bold mb-1" key={skill.type}>
            - {skill.type}:
            {skill.items.map((sk) => (
              <span
                className='font-normal [&:not(:last-child):after]:content-[","] px-0.5'
                key={sk}
              >
                {sk}
              </span>
            ))}
          </span>
        ))}
      </section>
    </main>
  );
};

export default ResumeSkills;
