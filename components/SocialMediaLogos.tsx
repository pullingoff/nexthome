import styled from "styled-components"
import CustomLink from "./CustomLink"
import { METADATA } from "@config/index"
import { GithubLogo, LinkedInLogo, TwitterLogo } from "public/logos"
import { ReactNode } from "react"

const LogoContainer = ({href, children}: {
   href: string
   children: ReactNode
}) => {
   return (
      <LogoCircle>
         <CustomLink href={href}>
            {children}
         </CustomLink>
      </LogoCircle>
   )
}

const LogoCircle = styled.div`
content: '';
       display: inline-block;
       width: 30px;
       height: 30px;
       -moz-border-radius: 15px;
       -webkit-border-radius: 15px;
       border: 1px solid var(--theme1-color);
       border-radius: 15px;
    }
`
const SocialMediaLogos = () => {
    const {github, twitter, email, linkedinLink} = METADATA

    const githubLink = `https://github.com/${github}`
    const twitterLink = `https://twitter.com/${twitter}`
    
    return(
        <StyledLogos>
            <CustomLink aria-label='github' href={githubLink}>
               <GithubLogo />
            </CustomLink>
            <CustomLink aria-label='twitter' href={twitterLink}>
               <TwitterLogo/>
            </CustomLink>
            <CustomLink aria-label='linkedin' href={linkedinLink}>
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