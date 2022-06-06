import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

interface IProps {
    imgAlt: string,
    imgPath: string
}
const ProjectThumb = ({imgAlt, imgPath}: IProps) => {
    
    
    return (    
        <StyledThumb //priority
                        // layout="responsive"
                        // objectFit="cover"
                        sizes='50vw'
                        width={200}
                        height={110}
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