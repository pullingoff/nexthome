import styled from "styled-components"; 

export default function PageHeader({pageNm, desc}) {
    return (
        <StyledPageHeader>
            <PageName>{pageNm}</PageName>
            <PageDesc>{desc}</PageDesc>
        </StyledPageHeader>
    )
}

const StyledPageHeader = styled.div`
padding: var(--md) 0;
`

const PageName = styled.h1`
font-size: var(--5xl);
font-weight: 800;
@media (max-width: ${({theme}) => theme.device.md}) {
    margin: var(--md) 0;
}
`

const PageDesc = styled.h3`
color: var(--hover-color);
@media (max-width: ${({theme}) => theme.device.md}) {
    margin: var(--md) 0;
}
`