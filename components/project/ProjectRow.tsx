import CustomLink from "components/CustomLink";
import PostHeadings from "components/post/PostHeadings";
import Image from "next/image";
import styled from "styled-components";
import { IProject } from "type";
import path from 'path'

const thumbDir = path.join('images', 'projectThumbnails')

const ProjectRow = ({pj}: {
    pj: IProject
}) => {
    const imgPath = path.join(thumbDir, pj.thumbnail)
    return (
        <CustomLink href={`/${pj.slug}`}>
            <TitleContainer>
                <Title>{pj.title}</Title>
                <Type>{pj.shortDescription}</Type>
            </TitleContainer>
            <ImgContainer>
                <StyledThumb priority
                    layout="fill"
                    // objectFit="cover"
                    src={`/${imgPath}`}
                    alt={`${pj.title}의 썸네일`} />
            </ImgContainer>
        </CustomLink>
    )
}
const TitleContainer = styled.section`
margin-left: 10vw;
`
const ImgContainer = styled.section`
    position: relative;
    width: 50vw;
    min-width: 150px;
    min-height: 200px;
    max-height: 300px;
    max-width: 400px;
    top: -5vw;
    right: -40vw;
`

const StyledThumb = styled(Image)`
    position: relative;
`
const Title = styled.h1`
font-size: var(--4xl);
letter-spacing: 4px;
`

const Type = styled.h5`
font-size: var(--2xl);
font-weight: 400;
margin: 10px 0;
`
export default ProjectRow;