import CustomLink from '@components/common/CustomLink';
import styled from 'styled-components';
import { IProject } from 'types';
import path from 'path';
import ProjectThumb from './ProjectThumb';

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
      <StyledLink href={`/project/${pj.slug}`}>
        <TitleContainer>
          <Title>{pj.title}</Title>
          <ShortDesc>{pj.shortDescription}</ShortDesc>
        </TitleContainer>
        <section>
          <ProjectThumb
            imgAlt={`${pj.title}의 썸네일`}
            imgPath={`/${imgPath}-bright.png`}
          />
        </section>
      </StyledLink>
    </ContainerLi>
  );
};

const ContainerLi = styled.li`
  padding-left: 1.2vw;
  padding-right: 0.8vw;
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    padding: 0 5vw;
  }
`;

const StyledLink = styled(CustomLink)`
  animation: 2s anim-lineUp 0.1s ease-out 1;
`;

const TitleContainer = styled.section`
  position: relative;
  z-index: 2;
  &:before {
    content: '';
    border-top: 1px solid lightgrey;
  }
`;

const Title = styled.h1`
  font-size: var(--9xl);
  &:hover {
    color: salmon;
  }
`;

const ShortDesc = styled.h5`
  font-size: 1.15rem;
  font-weight: 500;
  margin: 10px 0;
  display: inline-block;
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    position: absolute;
  }
`;

export default ProjectList;
