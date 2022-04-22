import CustomLink from "./CustomLink";
import styled from "styled-components";

const DarkBtn = ({href, text}) => {
    return (
        <BtnDiv>
            <CustomLink href={href}>
                {text}
            </CustomLink>
        </BtnDiv>
    )
}

const BtnDiv = styled.div`
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