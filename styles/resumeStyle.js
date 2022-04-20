import styled from "styled-components"
// resume에서 공통되는 부분만 여기에 적음. 공통 아닌 것은 각 컴포넌트 안에 있음.



export const StyledMain = styled.main`
&:after {
  content: '';
  border-bottom: 1px solid var(--color-grey);
  margin-top: 30px;
  // position: relative;
  // bottom: -10px;
}
`

export const Org = styled.span`
display: block;
font-weight: 800;
font-size: var(--5xl);
`


export const SectionHeader = styled.section`
  margin: 20px 0 10px;
  font-size: var(--8xl);
  color: #696969;
  font-weight:800;

  &::before {
    position: relative;
    bottom: 15px;
    display: block;
    content: ' ';
    border-top: 1px solid var(--border-color);
  }
  `

export const StyledOrgContainer = styled.section`
width: 100%;
display: flex;
flex-flow: column nowrap;
margin-bottom: 40px;
`

export const Project = styled.section`
border: 2px solid violet;
align-items: center;
margin: 5px 0;
`


export const PjTitle = styled.h4`
font-size: 1.35rem;
margin: 10px 0;
`

export const PjContainer = styled.section`
  font-size: 18px;
  font-weight:bold;
  margin-top: var(--lg);
  margin-bottom: var(--md);
`

export const Detail = styled.p`
font-weight: 600;
font-size: 1.1rem;
margin: 2px 0;
padding-left: 5px;
&:before {
  content: '-';
  position: relative;
  margin-right: var(--md);
}
`