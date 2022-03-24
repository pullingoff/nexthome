import CustomLink from "./CustomLink";
import styled from "styled-components";

export default function NavMenu({menu}) {
    return (
        <StyledMenu>
            <CustomLink href={menu.path} >
                {menu.title}
            </CustomLink>
        </StyledMenu>
    )
}

const StyledMenu = styled.li`
display: inline-block;
margin-left: 1.5rem; 
color: var(--theme2-color);
font-size:25px;
font-weight: 600;
& > a{
    &:hover {
        color: var(--hover-color);
    }
}
`