import {education} from '../../data/about'
import {SectionHeader,StyledMain, StyledOrgContainer} from "@styles/aboutStyle.js"
import Edu from './Edu'
import { IEducation } from 'types/aboutTypes'
import CustomEmoji from '@components/CustomEmoji'

export default function EduContainer () {
    return (
        <StyledMain>
            <SectionHeader>
                <CustomEmoji aria='Woman Technologist'>👩🏻‍💻 </CustomEmoji>
                Education.
            </SectionHeader>
            <StyledOrgContainer>
                {education?.map((edu: IEducation, idx: number) => (
                    <Edu key={idx} {...edu}/>
                ))}
            </StyledOrgContainer>
        </StyledMain>
    )
}