import CustomLink from '@components/common/CustomLink';
import styled from 'styled-components';
import { IProject } from 'types';
import path from 'path';
import DetailContainer from './DetailContainer';
import ImgGallery from './ImgGallery';

const ProjectList = ({ projects }: { projects: IProject[] }) => {
  // customMeta 넣기
  return (
    <ul>
      {projects.map(pj => (
        <ProjectRow {...pj} key={pj.slug} />
      ))}
    </ul>
  );
};

const ProjectRow = (pj: IProject) => {
  const imgPath = path.join('images', 'pjThumb', pj.thumbnail);

  return (
    <ContainerLi>
      <details>
        <Title>{pj.title}</Title>
        <DarkBtn href={pj.link}>보러가기</DarkBtn>
        <ProjectView pj={pj} />
      </details>
    </ContainerLi>
  );
};

export const ProjectView = ({ pj }: { pj: IProject }) => {
  return (
    <>
      {pj.imgPathList && <ImgGallery imgList={pj.imgPathList} />}
      <DetailContainer pj={pj} />
    </>
  );
};

const DarkBtn = styled(CustomLink)`
  display: inline-block;
  padding: 10px 30px;
  background-color: var(--theme1-color);
  color: white;
  font-weight: 800;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: var(--theme1-color);
    background-color: initial;
    box-shadow: 0 0 0 3px var(--theme1-color);
  }
`;

const ContainerLi = styled.li`
  padding-left: 1.2vw;
  padding-right: 0.8vw;
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    padding: 0 5vw;
  }
`;

const Title = styled.summary`
  font-size: var(--8xl);
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1rem;
  &:hover {
    color: salmon;
  }
  ::-webkit-details-marker {
    display: initial;
  }
`;

export default ProjectList;
