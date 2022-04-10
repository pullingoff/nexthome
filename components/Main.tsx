import Image from "next/image";
import { useState } from "react";
import mainImg from "../public/images/main.JPG"
import CustomLink from "./CustomLink";
import styled from "styled-components";
import MainPara from "./MainPara";


const Main =() => {
    const [isHover, setHover] = useState(false);

    return(
        <StyledMain>     
            <CustomLink href='/resume'
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
            >
                <StyledImg alt="박하은의 이력서 보러가기" src={mainImg} priority />       
            </CustomLink>
            <MainPara/>
        </StyledMain>
    )
}

export default Main

const StyledMain = styled.section`
    margin-top: var(--lg);
`
const StyledImg = styled(Image)`
cursor: pointer;
`