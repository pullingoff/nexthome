import CustomLink from "./CustomLink"
import styled from "styled-components"


export default function Tag ({text}) {
    return(
        <StyledTag href={`/tags/${text}/pages/1`}>
            {text.split(' ').join('-')}
        </StyledTag>
    )
}

const StyledTag = styled(CustomLink)`
    color: var(--color-white);
    text-transform: uppercase;
    font-weight: var(--fw-bold);
    padding: var(--xs) var(--lg);
    background-color: var(--color-deep-navy);
    border-radius: var(--border-radius-sm);
    margin-right: var(--md);
`