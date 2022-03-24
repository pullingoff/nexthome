import styled from "styled-components"
import SearchBarLogo from "./SearchBarLogo"

export default function SearchBar() {
    return (
        <StyledSearchBar>
            <StyledInput  placeholder="무엇을 찾고 계십니까!? 🧞‍♂️"/>
            <SearchBarLogo/>
        </StyledSearchBar>
    )
}

const StyledSearchBar = styled.div`
position: relative;
height: 3rem;
align-items: center;
margin-top: var(--lg);
`

const StyledInput = styled.input`
display: block;
width: 100%;
color: var(--color-grey);
border-radius: var(--md);
border-width: 1px;
border-color: var(--color-grey);
padding: var(--md) var(--lg);
// font-size: 0.875rem;
line-height: 1.5rem;
`