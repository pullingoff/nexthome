import {Detail, DetailUl, Org, JobDate} from "@styles/aboutStyle"
import AboutProject from "./AboutProject"
import styled from "styled-components"
import { IExp, IWorkProject } from "types/aboutTypes"
import CustomLink from "@components/CustomLink"


const OrgContainer = (exp: IExp) => {
    
    return (
        <>
        {exp.link}
        <Org>{exp.organization}</Org>
        <JobDate>{exp.description} | {exp.period}</JobDate>
        { exp.projects?.map((pj : IWorkProject) => (
                <AboutProject {...pj} key={pj.title} />
        ))}
        {exp.details && 
        (<DetailUl>
            {   
            exp.details.map((det : string, idx : number) => (
                    <Detail key={idx}>{det} </Detail>
            ))}
        </DetailUl>)}
    </>
    )
}

export default OrgContainer;
