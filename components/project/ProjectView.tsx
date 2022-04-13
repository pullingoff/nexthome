
import { IProject } from "type"
import styled from "styled-components"
import HeadContainer from "./HeadContainer"
import ArticleContainer from "./ArticleContainer"
const ProjectView = ({pj} : {
    pj: IProject
}) => {
    
    return (
        <>
            <HeadContainer pj={pj}/>
            <ArticleContainer pj={pj}/>
        </>
    )
}

export default ProjectView