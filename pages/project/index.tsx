import { GetStaticProps } from 'next';
import { ICustomMeta, IProject } from 'types';
import { ProjectListData } from 'utils/ProjectList';
import ProjectList from '@components/project/ProjectList';
import MetaContainer from '@components/MetaContainer';

const customMeta: ICustomMeta = {
  title: `Projects: 개발자 박하은`,
};

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
      <MetaContainer customMeta={customMeta} />
      <ProjectList projects={projects} />
    </>
  );
};

export default Project;
