import {techStacks} from '../../data/about'
import {SectionHeader,StyledMain, StyledOrgContainer} from "@styles/aboutStyle.js"
import TechSkill from './TechSkill'
import { ITechStack } from 'types/aboutTypes'

export default function TechContainer () {
    return (
        <StyledMain>
            <SectionHeader>
                <span role='img' aria-label="">👩🏻‍💻 </span>
                Skills.
            </SectionHeader>
            <StyledOrgContainer>
                {techStacks?.map((stack : ITechStack, idx: number) => (
                    <TechSkill key={idx} {...stack}/>
                ))}
            </StyledOrgContainer>
        </StyledMain>
    )
}