import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

interface IProps {
    imgAlt: string,
    imgPath: string
}
const ProjectThumb = ({imgAlt, imgPath}: IProps) => {
    
    
    return (    
        <StyledThumb priority
                        // placeholder="blur"
                        layout="responsive"
                        objectFit="cover"
                        width={250}
                        height={160}
                        src={imgPath}
                        alt={imgAlt} />
    )
}

export const HoverZoomImage = styled(Image)`
transition: transform .5s ease;
&:hover {
    transform: scale(1.1);
}
`

const StyledThumb = styled(HoverZoomImage)`
    position: relative;
`

export default ProjectThumb