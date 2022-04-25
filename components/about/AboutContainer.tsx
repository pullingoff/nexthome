import GridHeader from "./GridHeader"
import WorkExpContainer from './WorkExperience'
import TechStack from './TechContainer'
import "@styles/aboutStyle.js"
import styled from 'styled-components'
import OtherExperiences from './OtherExpContainer'
import EduContainer from "./EduContainer"

export default function AboutContainer() {
    return (
        <StyledAboutContainer>
            <GridHeader/>
            <WorkExpContainer/>
            <OtherExperiences/>
            <TechStack/>
            <EduContainer/>
        </StyledAboutContainer>
    )
}

const StyledAboutContainer = styled.main`
margin: 20px 0;
// desktop view
@media (min-width: ${({theme}) => theme.device.sm}) {
    margin: 50px 30px 0;
}
`