import CustomLink from "../CustomLink";
import styled from "styled-components";

type MenuType = {
    title: string;
    path: string;
    emoji?: string;
}

const NavMenu = ({menu, children} : {
    menu: MenuType,
    children?: React.ReactNode,
}) => {
    return (
        <StyledMenu>
            <CustomLink href={menu.path} >
                {menu.title}
                {children}
            </CustomLink>
        </StyledMenu>
    )
}

export default NavMenu

const StyledMenu = styled.li`
display: inline-block;
margin-left: 1.5rem; 
color: var(--theme2-color);
font-size:25px;
font-weight: 600;
& > a{
    &:hover {
        color: var(--color-point-pink);
        transition: all .4s ease;
        -webkit-transition: all .4s ease;
    }
}
`
