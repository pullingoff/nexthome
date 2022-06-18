import { GetStaticProps } from 'next';
import { IProject } from 'types';
import { ProjectListData } from 'utils/ProjectList';
import ProjectList from '@components/project/ProjectList';

const visibleProjectList = ProjectListData.filter(pj => pj.isVisible);
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: visibleProjectList,
    },
  };
};

const Project = ({ projects }: { projects: Array<IProject> }) => {
  return (
    <>
      <ProjectList projects={projects} />
    </>
  );
};

export default Project;
