import styled from 'styled-components';
import Link from 'next/link';

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
    <StyledMenu className="inline-block text-[color:var(--theme1-color)] text-2xl font-semibold ml-6">
      <Link href={menu.path}>
        {menu.title}
        {/*{children}*/}
      </Link>
    </StyledMenu>
  );
};

export default NavMenu;

const StyledMenu = styled.li`
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
