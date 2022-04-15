import WebImg from "../../public/images/internet.png"
import { capitalize } from "lib"
import styled from "styled-components"
import { IProject } from "type"
import CustomLink from "components/CustomLink"
import Image from "next/image"

const HeadContainer = ({pj} : {pj: IProject}) => {
    return (
        <Container>
            <Title>{capitalize(pj.title)}</Title>  
            <ImgContainer>
                <Image width='20px' height='20px' src={WebImg} alt=""/>
                <StyledLink href={pj.link}>
                    {pj.link}
                </StyledLink>
            </ImgContainer>
        </Container>
    )
}


const StyledLink = styled(CustomLink)`
font-size: var(--xl);
font-weight: 500;
display: inline-block;
margin-left: 10px;
position: relative;
top: -5px;
color: black;
&:hover {
    color: var(--color-point-pink);
}
`

const Container = styled.section`
margin-left: 5vw;
@media (min-width: ${({theme}) => theme.device.sm}) {
    margin-left: 13vw;
}
`

const ImgContainer = styled.div`
// margin-right: 10px;
padding: 0 10px;
`

const Title = styled.h1`
font-size: var(--5xl);
`

export default HeadContainer
