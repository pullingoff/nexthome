import PageHeader from "components/PageHeader"
import styled from "styled-components"
import { IProject } from "type"

const ProjectView = ({pj} : {
    pj: IProject
}) => {
    
    return (
        <>
            <HeadContainer>
                <h1>{pj.title}</h1>  
                <p>{pj.link}</p>
                <p>{pj.date}</p>
            </HeadContainer>
            <ArticleContainer>
                <p>{pj.longDescription}</p>
            </ArticleContainer>
        </>
    )
}

const HeadContainer = styled.section`

`

const ArticleContainer = styled.article`

`
export default ProjectView