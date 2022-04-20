import ResumeHeader from './ResumeHeader'
import GridHeader from "./GridHeader"
import WorkExpContainer from './WorkExperience'
import TechStack from './TechContainer'
import "@styles/resumeStyle.js"
import styled from 'styled-components'
import OtherExperiences from './OtherExpContainer'

export default function ResumeContainer() {
    return (
        <StyledResumeContainer>
            <GridHeader/>
            <WorkExpContainer/>
            <OtherExperiences/>
            <TechStack/>
        </StyledResumeContainer>
    )
}

const StyledResumeContainer = styled.main`
margin-bottom: 50px;
`