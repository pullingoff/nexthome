import styled from "styled-components"
import CustomLink from '../CustomLink'

const PostGoBackLink = ({link}: {link: string}) =>{
    return(
        <StyledCustomLink href={link}>
            &larr; 이전
        </StyledCustomLink>
    )
}

export default PostGoBackLink


const StyledCustomLink = styled(CustomLink)`
display: block;
margin: 10px 0;
color: var(--color-point-blue);
font-weight: 700;
&:hover {
  color: salmon;
}
`
