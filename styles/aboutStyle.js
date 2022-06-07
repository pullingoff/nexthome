import styled from "styled-components"
import CustomLink from "@components/CustomLink"
// about에서 공통되는 부분만 여기에 적음. 공통 아닌 것은 각 컴포넌트 안에 있음.


export const StyledMain = styled.main`
&:before {
  content: ' ';
  border-top: 1px dashed lightgrey;
  margin-top: 20px;
  position: relative;
  top: 1px;
  display: block;
}
`
export const Org = styled.span`
display: block;
font-weight: 800;
font-size: var(--3xl);
margin-bottom: 7px;
`

export const OrgHoverLink = styled.a`
display: block;
font-weight: 800;
font-size: var(--3xl);
margin-bottom: 7px;
&:hover {
  cursor: pointer;
  color: salmon;
}
`

export const SectionHeader = styled.section`
  margin: 20px 0 10px;
  font-size: var(--8xl);
  color: #696969;
  font-weight:800;
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


export const PjTitle = styled.h3`
// @media (min-width: ${({theme}) => theme.device.sm}) {
// font-size: 1.35rem;
// }
// font-size: var(--xl);
margin: 10px 0;
`

export const PjTitleHover = styled(PjTitle)`
&:hover {
  cursor: pointer;
  color: salmon;
}
`


export const PExplain = styled.p`
  font-weight: 500;
  // @media (min-width: ${({theme}) => theme.device.sm}) {
  // font-size: 1.1rem;
  // }
  margin-top:1px;
  margin-bottom: 7px;
  padding-left: 5px;
`

export const PjTech = styled.span`
font-weight: 300;
// margin-right: 1rem;
padding-left: 5px;
&+&:before {
  content: '|';
  margin-right: 5px;
}
`

export const PjContainer = styled.section`
// @media (min-width: ${({theme}) => theme.device.sm}) {  
// font-size: 18px;
// }
  // font-weight:bold;
  margin-top: var(--lg);
  margin-bottom: var(--md);
`

export const DetailUl = styled.ul`
margin: 5px;
list-style: none;
`

export const Detail = styled.li`
// font-weight: 600;
// font-size: 1.2rem;
margin: 4px 0;
padding-left: 5px;
&:before {
  content: '-';
  position: relative;
  margin-right: var(--md);
}
`


export const JobDate = styled.span`
font-weight: 400;
// @media (min-width: ${({theme}) => theme.device.sm}) {
// font-size: var(--2xl);
// }
`
