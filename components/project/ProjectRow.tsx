import CustomLink from "components/CustomLink";
import PostHeadings from "components/post/PostHeadings";
import Image from "next/image";
import styled from "styled-components";
import { IProject } from "type";
import path from 'path'

const thumbDir = path.join('images', 'pjThumb')

const ProjectRow = ({pj}: {
    pj: IProject
}) => {
    const imgPath = path.join(thumbDir, pj.thumbnail)
    return (
        <Container href={`/project/${pj.slug}`}>
            <TitleContainer>
                <Title>{pj.title}</Title>
                <Type>{pj.shortDescription}</Type>
            </TitleContainer>
            <ImgContainer>
                <StyledThumb priority
                    layout="fill"
                    objectFit="cover"
                    src={`/${imgPath}`}
                    alt={`${pj.title}의 썸네일`} />
            </ImgContainer>
        </Container>
    )
}

const Container = styled(CustomLink)`
display: flex;
margin-left: 3vw;
margin-bottom: 30px;
gap: 10px;
justify-content: space-between;
@media (min-width: ${({theme}) => theme.device.sm}) {
    margin-left: 10vw;
    margin-right: 10vw;
    gap: 60px;
}
`

const TitleContainer = styled.section`
width: 60%;

`
const ImgContainer = styled.section`
    position: relative;
    width: 40%;
    max-width: 400px;
`

const StyledThumb = styled(Image)`
    position: relative;
`
const Title = styled.h1`
font-size: var(--3xl);
`

const Type = styled.h5`
font-size: 1.15rem;
font-weight: 400;
margin: 10px 0;
// max-width: 40%;
display: inline-block;
`
export default ProjectRow;