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
                        layout="responsive"
                        objectFit="cover"
                        width={250}
                        height={160}
                        src={imgPath}
                        alt={imgAlt} />
    )
}


const StyledThumb = styled(Image)`
    position: relative;
`

export default ProjectThumb