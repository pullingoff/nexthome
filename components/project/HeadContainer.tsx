import WebImg from "@public/images/internet.png"
import { capitalize } from "lib"
import styled from "styled-components"
import { IProject } from "types"
import CustomLink from "components/CustomLink"
import Image from "next/image"
import {DarkBtn} from "@components/Button"

const HeadContainer = ({pj} : {pj: IProject}) => {
    return (
        <Container>
            <Title>{capitalize(pj.title)}</Title>  
            <DarkBtn href={pj.link} text='보러가기' />
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
    color: salmon;
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
font-size: var(--9xl);
`

export default HeadContainer
