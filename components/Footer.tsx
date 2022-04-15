import CustomLink from "./CustomLink"
import { METADATA } from "../config"
import styled from "styled-components"
import SocialMediaLogos from "./SocialMediaLogos"

const Footer = () => {
    return (
        <StyledFooter>
            <SocialMediaLogos />
            <Mail href={`mailto:${METADATA.email}`} >
                Email: {METADATA.email}
            </Mail>
        </StyledFooter>
    )
}

export default Footer;

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

const Mail = styled(CustomLink)`
&:hover {
    font-weight: bold;
}
`
