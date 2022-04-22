import {education} from '../../data/about'
import {SectionHeader,StyledMain, StyledOrgContainer} from "@styles/aboutStyle.js"
import Edu from './Edu'
import { IEducation } from 'types/aboutTypes'

export default function EduContainer () {
    return (
        <StyledMain>
            <SectionHeader>
                <span role='img' aria-label="">👩🏻‍💻 </span>
                Education.
            </SectionHeader>
            <StyledOrgContainer>
                {education.length > 0 &&
                education.map((edu: IEducation, idx: number) => (
                    <Edu key={idx} {...edu}/>
                ))}
            </StyledOrgContainer>
        </StyledMain>
    )
}