import {Detail, Org} from "@styles/resumeStyle"
import ResumeProject from "./ResumeProject"
import styled from "styled-components"
import { IExp, IWorkProject } from "types/resumeTypes"


const OrgContainer = (exp: IExp) => {
    
    return (
        <>
        <Org>{exp.organization}</Org>
        <JobDate>{exp.description} | {exp.period}</JobDate>
        {exp.projects &&
            exp.projects.map((pj : IWorkProject) => (
                <ResumeProject {...pj} key={pj.title} />
        ))}
        {exp.details && exp.details.length > 0 &&
            exp.details.map((det : string, idx : number) => (
                <Detail key={idx}>{det} </Detail>
        ))}
    </>
    )
}

export default OrgContainer;

const JobDate = styled.span`
font-weight: 400;
font-size: var(--2xl);
margin: 5px 0;
`