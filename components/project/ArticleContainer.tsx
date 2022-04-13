import styled from "styled-components";
import { IProject } from "type";
const ArticleContainer = ({pj} :{
    pj: IProject
}) => {
    return (
        <Container>
            <LongDes>{pj.longDescription}</LongDes>
            <ThumbImg></ThumbImg>
        </Container>
    )
}


const LongDes = styled.pre`
font-size: 1.2rem;
max-width: 50%;
line-height: 170%;
white-space: normal;
`

const ThumbImg = styled.div`
`

const Container = styled.article`
margin:  0 5vw 5vw 10vw;
min-height: 300px;
padding: 30px 50px;
display: flex;
flex-wrap: column nowrap;
gap: 10px;
`;


export default ArticleContainer