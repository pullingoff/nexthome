import Image from "next/image";
import { useState } from "react";
import mainImg from "../public/images/main.JPG"
import styles from "./main.module.scss";
import CustomLink from "./CustomLink";
import styled from "styled-components";
import MainPara from "./MainPara";

export default function Main() {
    const [isHover, setHover] = useState(false);


    return(
        <StyledMain>     
            <CustomLink href='/resume'
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className={isHover ? `${styles.mainImg} ${styles.shimmer}` : styles.mainImg}
            >
                <Image alt="박하은의 이력서 보러가기" src={mainImg} priority />       
            </CustomLink>
            <MainPara/>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    margin-top: var(--lg);
`
