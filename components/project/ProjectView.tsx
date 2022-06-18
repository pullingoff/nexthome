import { IProject } from 'types';
import ImgGallery from '@components/project/ImgGallery';
import { capitalize } from 'lib/';
import styled from 'styled-components';
import CustomLink from '@components/common/CustomLink';
import ArticleContainer from './ProjectContainer';

const ProjectView = ({ pj }: { pj: IProject }) => {
  return (
    <>
      <HeadContainer pj={pj} />
      <ArticleContainer pj={pj} />
      {pj.imgPathList && <ImgGallery imgList={pj.imgPathList} />}
    </>
  );
};

const HeadContainer = ({ pj }: { pj: IProject }) => {
  return (
    <section>
      <h1 style={{ fontSize: 'var(--9xl)' }}>{capitalize(pj.title)}</h1>
      <DarkBtn href={pj.link}>보러가기</DarkBtn>
    </section>
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

export default ProjectView;
