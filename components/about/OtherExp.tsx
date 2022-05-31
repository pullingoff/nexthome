import { IExp } from "types/aboutTypes";
import {Detail, DetailUl, PjContainer, Org, JobDate, OrgHover} from "@styles/aboutStyle"
import styled from "styled-components";
import CustomLink from "@components/CustomLink";

export const ChainLink = ({href}: {
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
                ? <OrgHover>
                        {exp.organization}
                    <ChainLink href={exp.link} />
                 </OrgHover>
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

export default OtherExp;