import { IExp } from "types/aboutTypes";
import {Detail, DetailUl, PjContainer, Org, OrgWImg, JobDate} from "@styles/aboutStyle"
import styled from "styled-components";
import CustomLink from "@components/CustomLink";

const ChainLink = ({href}: {
    href: string
}) => {
    return (
        <StyledChainLink href={href} target='blank'>
            🔗
        </StyledChainLink>
    )
}

const StyledChainLink = styled(CustomLink)`
margin-left: 5px;
`

const OtherExp = (exp : IExp) => {
    return (
        <PjContainer>
            {exp.link 
                ? <OrgWImg>
                        {exp.organization}
                    <ChainLink href={exp.link} />
                 </OrgWImg>
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