import {otherExperiences} from '../../data/resume'
import {StyledOrgContainer, PjContainer, SectionHeader, StyledMain} from "@styles/resumeStyle"
import styled from 'styled-components'
import OrgContainer from './OrgContainer'
import OtherExp from './OtherExp'

export default function OtherExperiences(){
    return (
        <StyledMain>
        <SectionHeader>
            <span role='img' aria-label="">👩🏻‍💻 </span>
            Other Experience.
        </SectionHeader>
        <PjContainer>
            {otherExperiences.length > 0 &&
            otherExperiences.map(exp => (
                <OtherExp {...exp} key={exp.organization}/>
            ))}
        </PjContainer>
        </StyledMain>
    )
}