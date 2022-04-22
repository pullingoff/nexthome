import { IExp } from "types/aboutTypes";
import {Detail, DetailUl, PjContainer, Org, OrgWImg, JobDate} from "@styles/aboutStyle"
import styled from "styled-components";

const OtherExp = (exp : IExp) => {
    return (
        <PjContainer>
            {exp.link.length > 0 
                ? <OrgWImg href={exp.link}>{exp.organization}</OrgWImg>
                : <Org>{exp.organization}</Org>
            }
            <JobDate>{exp.description} | {exp.period}</JobDate>
            {exp.details && 
            (<DetailUl>
                {exp.details.map((det, idx) => (
                    <Detail key={idx}>{det} </Detail>
                ))}
            </DetailUl>
            )}
        </PjContainer>
    )
}

const Desc = styled.span`
font-weight: 600;
`

export default OtherExp;