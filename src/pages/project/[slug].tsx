import { IProject } from '#type/index';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ProjectListData } from '#src/data/project';
import { ProjectView } from '#components/project/ProjectList';

const visibleProjectList = ProjectListData.filter(pj => pj.isVisible);
const ProjectPage = ({ project }: { project: IProject }) => {
  return <ProjectView pj={project} />;
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = visibleProjectList.map(pj => ({
    params: {
      slug: pj.slug,
    },
  }));
  return { paths, fallback: 'blocking' };
};

interface SlugInterface {
  [key: string]: string | string[] | null;
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as SlugInterface;
  const project = visibleProjectList.find(pj => pj?.slug === slug);

  return { props: { project } };
};
