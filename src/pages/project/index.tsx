import { GetStaticProps } from 'next';
import { ICustomMeta, IProject } from '#type/index';
import { ProjectListData } from '#src/data/project';
import MetaContainer from '#components/MetaContainer';
import CustomLink from '#components/common/CustomLink';
import styled from 'styled-components';
import path from 'path';
import Zoom from 'react-medium-image-zoom';
import Image from 'next/image';

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

const Project = ({ projects }: { projects: IProject[] }) => {
  return (
    <>
      <MetaContainer customMeta={customMeta} />
      <ProjectList projects={projects} />
    </>
  );
};

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

const ImgGallery = ({ imgList }: { imgList: string[] }) => {
  const imgDir = path.join('images', 'pjDetail');
  return (
    <ImgContainer>
      {imgList?.map((img, idx) => (
        <ImgItem key={idx}>
          <Zoom
            zoomMargin={1}
            wrapStyle={{
              minWidth: '100%',
              minHeight: '100%',
              height: '200px',
            }}
          >
            <StyledThumb
              // priority
              layout="fill"
              objectFit="contain"
              className="img"
              src={`/${path.join(imgDir, img)}`}
              alt={`${idx} 사진`}
            />
          </Zoom>
        </ImgItem>
      ))}
    </ImgContainer>
  );
};

const ImgContainer = styled.div`
  display: block;
  overflow: visible;
  margin: 10px 0;
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    overflow: initial;
    margin: 10px 5vw;
  }
`;
const StyledThumb = styled(Image)`
  position: relative;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const ImgItem = styled.section`
  position: relative;
  width: 100%;
  min-height: 200px;
  @media (min-width: ${({ theme }) => theme.device.sm}) {
  }
`;

const ProjectRow = (pj: IProject) => {
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

const DetailContainer = ({ pj }: { pj: IProject }) => {
  return (
    <Container>
      {pj.longDescription.map((p, idx) => (
        <p key={idx}>{p}</p>
      ))}
    </Container>
  );
};

const Container = styled.section`
  padding: 10px;
  p {
    line-height: 110%;
    white-space: normal;
    margin: 0.5rem 0;

    @media (min-width: ${({ theme }) => theme.device.md}) {
      font-size: 1.2rem;
    }
  }
`;

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
    box-shadow: 0 0 0 3px var(--theme1-color) inset;
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

export default Project;
