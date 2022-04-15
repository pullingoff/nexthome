import styled from "styled-components";
import { IProject } from "type";
import ImgGallery from "components/ImgGallery";

const ArticleContainer = ({pj} :{
    pj: IProject
}) => {
    return (
        <Container>
            <LongDes>{pj.longDescription}</LongDes>
        </Container>
    )
}


const LongDes = styled.pre`
font-size: 1.2rem;
line-height: 170%;
white-space: normal;

@media (min-width: ${({theme}) => theme.device.md}) {
    max-width: 50%;
}
`

const Container = styled.section`
margin:  2vw;
padding: 10px;

@media (min-width: ${({theme}) => theme.device.sm}) {
    margin:  0 5vw 5vw 10vw;
    min-height: 300px;
    padding: 30px 50px 0;
}

`;


export default ArticleContainer