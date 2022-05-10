import styled from "styled-components";
import { IProject } from "types";
import ImgGallery from "components/ImgGallery";

const ArticleContainer = ({pj} :{
    pj: IProject
}) => {
    
    return (
        <Container>
            {pj.longDescription &&
            pj.longDescription.map((p, idx)=> (
                <LongDes key={idx}>
                    {p}
                </LongDes>
            )) }
        </Container>
    )
}


const LongDes = styled.p`

line-height: 170%;
white-space: normal;
margin: 0.5rem 0;

@media (min-width: ${({theme}) => theme.device.md}) {
    // max-width: 50%;
    font-size: 1.2rem;
}
`

const Container = styled.section`
// margin:  2vw;
padding: 10px;

@media (min-width: ${({theme}) => theme.device.sm}) {
    // margin:  0 5vw 5vw 10vw;
    // min-height: 300px;
    // padding: 30px 50px 0;
}

`;


export default ArticleContainer