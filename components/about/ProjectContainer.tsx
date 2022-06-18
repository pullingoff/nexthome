import {
  StyledOrgContainer,
  SectionHeader,
  StyledMain,
} from '@styles/aboutStyle';
import OrgContainer from './OrgContainer';
import { IExp } from 'types/aboutTypes';
import { projectExperiences } from '@data/about';

const ProjectContainer = () => {
  return (
    <StyledMain>
      <SectionHeader>
        <span role="img" aria-label="Woman Technologist">
          👩🏻‍💻{' '}
        </span>
        Projects.
      </SectionHeader>
      <StyledOrgContainer>
        {projectExperiences.length > 0 &&
          projectExperiences.map(exp => (
            <OrgContainer {...exp} key={exp.organization} />
          ))}
      </StyledOrgContainer>
    </StyledMain>
  );
};

export default ProjectContainer;
