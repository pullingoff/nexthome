import styled from "styled-components"
import CustomLink from "./CustomLink"
import { METADATA } from "../config"
import { GithubLogo, LinkedInLogo, TwitterLogo } from "public/logos"

const SocialMediaLogos = () => {
    const {github, twitter, email, linkedinLink} = METADATA

    const githubLink = `https://github.com/${github}`
    const twitterLink = `https://twitter.com/${twitter}`
    
    return(
        <StyledLogos>
            <CustomLink href={githubLink}>
               <GithubLogo />
            </CustomLink>
            <CustomLink href={twitterLink}>
               <TwitterLogo/>
            </CustomLink>
            <CustomLink href={linkedinLink}>
               <LinkedInLogo/>
            </CustomLink>
        </StyledLogos>
        )
}

export default SocialMediaLogos

const StyledLogos = styled.div`
display: flex;
flex-flow: row nowrap;
gap: 3px;
margin-bottom: var(--xl); 
`