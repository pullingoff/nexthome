import ResumeHeader from "components/resume/ResumeHeader";
import ResumeWorkExperiences from "components/resume/ResumeWorkExperiences";
import ResumeProjects from "components/resume/ResumeProjects";
import ResumeSkills from "components/resume/ResumeSkills";
import ResumeOtherExperiences from "components/resume/ResumeOtherExperiences";
import ResumeEducations from "components/resume/ResumeEducations";

export default function ResumePage() {
  return (
    <section>
      <ResumeHeader />
      <ResumeWorkExperiences />
      <ResumeProjects />
      <ResumeSkills />
      <ResumeOtherExperiences />
      <ResumeEducations />
    </section>
  );
}
