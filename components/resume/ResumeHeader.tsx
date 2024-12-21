import { HEADER_INFO } from "data/about";

const ResumeHeader = () => {
  return (
    <section className="w-full grid">
      <div className="flex self-start justify-self-start">
        <h1 className="text-3xl font-black my-0">{HEADER_INFO.name}</h1>
        <span className="text-xl font-semibold ml-2 pt-2">
          {HEADER_INFO.job}
        </span>
      </div>
      <span className="font-normal mt-1">
        Email: {HEADER_INFO.email} <br />
      </span>
      <div className="mt-2 ml-1">
        <h3 className="font-bold mb-1">{HEADER_INFO.mainSentence}</h3>
        {HEADER_INFO.firstSentences?.map((stc, idx) => (
          <span key={idx} className="block font-medium mx-0 mb-0.5">
            {stc}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ResumeHeader;
