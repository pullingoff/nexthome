import {workExperiences} from '../../data/resume'
import {StyledOrgContainer, SectionHeader, StyledMain} from "@styles/resumeStyle"

import OrgContainer from './OrgContainer'
import { IExp } from 'types/resumeTypes'

export default function WorkExperience () {
    
    return (
        <StyledMain>
        <SectionHeader>
            <span role='img' aria-label='Woman Technologist'>👩🏻‍💻 </span>
            Work Experiences.
        </SectionHeader>
        <StyledOrgContainer>
            {workExperiences.length > 0 &&
                workExperiences.map((exp: IExp) => (
                    <OrgContainer {...exp} key={exp.organization}/>
                ))}
        </StyledOrgContainer>
        </StyledMain>
    )
}
