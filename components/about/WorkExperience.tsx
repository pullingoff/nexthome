import {workExperiences} from '@data/about'
import {StyledOrgContainer, SectionHeader, StyledMain} from "@styles/aboutStyle"

import OrgContainer from './OrgContainer'
import { IExp } from 'types/aboutTypes'

export default function WorkExperience () {
    
    return (
        <StyledMain>
            <SectionHeader>
                <span role='img' aria-label='Woman Technologist'>👩🏻‍💻 </span>
                Work Experiences.
            </SectionHeader>
            <StyledOrgContainer>
                { workExperiences?.map((exp: IExp) => (
                        <OrgContainer {...exp} key={exp.organization}/>
                    ))}
            </StyledOrgContainer>
        </StyledMain>
    )
}
