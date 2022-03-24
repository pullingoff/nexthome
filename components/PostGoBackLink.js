import styled from "styled-components"
import CustomLink from './CustomLink'

export default function PostGoBackLink({link}) {
    return(
        <StyledCustomLink href={link}>
            &larr; 이전
        </StyledCustomLink>
    )
}


const StyledCustomLink = styled(CustomLink)`
display: block;
margin: 10px 0;
color: var(--color-point-blue);
font-weight: 700;
&:hover {
  color: var(--hover-color);
}
`
