import CustomLink from "components/CustomLink";
import styled from "styled-components";
import { IProject } from "types";
import path from 'path'
import ProjectThumb from "./ProjectThumb";
import { useState } from "react";

const thumbDir = path.join('images', 'pjThumb')


const ProjectRow = ({pj}: {
    pj: IProject
}) => {
    // hover 여부에 따라 Img path를 바꿔 색을 달리함
    const imgPath = path.join(thumbDir, pj.thumbnail)
    const [realImgPath, setImgPath] = useState(`/${imgPath}-bright.png`);
    const [bgColor, setBGColor] = useState('initial');

    function mouseOver() {
        setImgPath(`/${imgPath}-dark.png`);
        setBGColor(`var(--theme1-color)`)
    }

    function mouseOut() {
        setImgPath(`/${imgPath}-bright.png`);
        setBGColor(`initial`)
    }
    return (
        <ContainerLi>
            <StyledLink href={`/project/${pj.slug}`}>
                <TitleContainer>
                    <Title>{pj.title}</Title>
                    <Type>{pj.shortDescription}</Type>
                </TitleContainer>
                <ImgContainer 
                        onMouseOver={mouseOver}
                        onMouseOut={mouseOut}
                        style={{backgroundColor:`${bgColor}`}}>
                    <ProjectThumb imgAlt={`${pj.title}의 썸네일`} 
                                  imgPath={realImgPath}/>
                </ImgContainer>
            </StyledLink>
        </ContainerLi>
    )
}

const ContainerLi = styled.li`
`

const StyledLink = styled(CustomLink)`


@media (min-width: ${({theme}) => theme.device.sm}) {
}
`

const TitleContainer = styled.section`
position: relative;
z-index: 2;

&:before {
    content: '';
    border-top: 1px solid #eaeaea;
}
`
const ImgContainer = styled.section`
position: relative;
right: -10vw;
z-index: 1;
max-width: 500px;
@media (min-width: ${({theme}) => theme.device.sm}) {
    top: -50px;
    right: -35vw;
}
`

const Title = styled.h1`
font-size: var(--3xl);
`

const Type = styled.h5`
font-size: 1.15rem;
font-weight: 400;
margin: 10px 0;
display: inline-block;
@media (min-width: ${({theme}) => theme.device.sm}) {
    position: absolute;
    max-width: 30vw;
}
`
export default ProjectRow;