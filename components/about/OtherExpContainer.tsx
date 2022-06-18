import { otherExperiences } from '../../data/about';
import {
  StyledOrgContainer,
  SectionHeader,
  StyledMain,
} from '@styles/aboutStyle';
import OtherExp from './OtherExp';

export default function OtherExperiences() {
  return (
    <StyledMain>
      <SectionHeader>
        <span role="img" aria-label="">
          👩🏻‍💻{' '}
        </span>
        Other Experiences.
      </SectionHeader>
      <StyledOrgContainer>
        {otherExperiences?.map(exp => (
          <OtherExp {...exp} key={exp.organization} />
        ))}
      </StyledOrgContainer>
    </StyledMain>
  );
}
