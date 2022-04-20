import {techStacks} from '../../data/resume'
import {SectionHeader,StyledMain, StyledOrgContainer} from "@styles/resumeStyle.js"
import ResumeTechSkill from './TechSkill'
import { ITechStack } from 'types/resumeTypes'

export default function TechStack () {
    return (
        <StyledMain>
        <SectionHeader>
            <span role='img' aria-label="">👩🏻‍💻 </span>
            Skills.
        </SectionHeader>
        <StyledOrgContainer>
            {techStacks.length > 0 &&
            techStacks.map((stack : ITechStack, idx: number) => (
                <ResumeTechSkill key={idx} {...stack}/>
            ))}
        </StyledOrgContainer>
        </StyledMain>
    )
}