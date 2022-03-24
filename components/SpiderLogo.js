import CustomLink from "./CustomLink";
import Image from "next/image";
import logo from "../public/logo.svg"
import styled from "styled-components";

export default function SpiderLogo() {
    return (
        <NavLogo>
            <CustomLink href='/'>
                    <Image alt='spider' width="45px" src={logo} />
            </CustomLink>
        </NavLogo>
    )
}

const NavLogo = styled.div`
display: inline;
width: 4rem;
margin: 1rem;
&:hover {
    opacity: 0.7;
}
`