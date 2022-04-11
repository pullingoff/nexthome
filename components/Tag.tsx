import CustomLink from "./CustomLink"
import styled from "styled-components"


const Tag = ({text}: {text: string}) => {
    return(
        <StyledTag href={`/tags/${text}/pages/1`}>
            {text.split(' ').join('-')}
        </StyledTag>
    )
}

export default Tag;

const StyledTag = styled(CustomLink)`
    color: var(--color-white);
    text-transform: uppercase;
    font-weight: 700;
    padding: var(--xs) var(--lg);
    background-color: var(--theme2-color);
    border-radius: var(--border-radius-sm);
    margin-right: var(--md);
    &:hover {
        background-color: var(--color-point-pink);
        color: white;
    }
`