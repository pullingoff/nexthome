import CustomLink from "./CustomLink";
import styled from "styled-components";

const DarkBtn = ({href, text}: {
    href: string
    text: string
}) => {
    return (
            <BtnDiv href={href}>
                {text}
            </BtnDiv>
    )
}

const BtnDiv = styled(CustomLink)`
display: inline-block;
padding: 10px 30px;
background-color: var(--theme1-color);
color: white;
font-weight: 800;
border-radius: 5px;
cursor: pointer;
&:hover {
  color: var(--theme1-color);
  background-color: initial;
  box-shadow: 0 0 0 3px var(--theme1-color);
}
`

export {
    DarkBtn
}