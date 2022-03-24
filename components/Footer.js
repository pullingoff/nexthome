import CustomLink from "./CustomLink"
import { METADATA } from "../config"
import styled from "styled-components"
import SocialMediaLogos from "./SocialMediaLogos"

export default function Footer() {
    return (
        <StyledFooter>
            <SocialMediaLogos />
            <CustomLink href="mailto:haileyhe01@gmail.com" >
                Email: {METADATA.email}
            </CustomLink>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: var(--xl);
    text-align: center;
    margin: var(--xl) auto;

    @media (max-width: ${({theme}) => theme.device.sm}) {
        margin: var(--md) auto;
    }
`

const MailDiv = styled.div`
`
