import CustomLink from '../common/CustomLink';
import styled from 'styled-components';

type MenuType = {
  title: string;
  path: string;
  emoji?: string;
};

const NavMenu = ({
  menu,
  children,
}: {
  menu: MenuType;
  children?: React.ReactNode;
}) => {
  return (
    <StyledMenu>
      <CustomLink href={menu.path}>
        {menu.title}
        {children}
      </CustomLink>
    </StyledMenu>
  );
};

export default NavMenu;

const StyledMenu = styled.li`
  display: inline-block;
  margin-left: 1.5rem;
  color: var(--theme1-color);
  font-size: 25px;
  font-weight: 600;

  & > a {
    display: inline-block;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.1rem;
      background-color: salmon;
      opacity: 0;
      transition: opacity 300ms, transform 300ms;
      transform: scale(0);
      transform-origin: center;
    }
    &:hover {
      color: salmon;
      &:after {
        opacity: 1;
        transform: translate3d(0, 0.2em, 0);
        transform: scale(1);
      }
    }
  }
`;
