import Link from "next/link";

type NavMenu = {
  title?: string;
  path: string;
};

const NavMenuItem = ({
  menu,
  children,
}: {
  menu: NavMenu;
  children?: React.ReactNode; // 메뉴 이름이 아닌 깃허브 로고 같은 경우
}) => {
  return (
    <li className="inline-block text-deep-blue text-2xl font-bold ml-6 hover:text-light-blue">
      <Link href={menu.path}>{children ?? menu.title}</Link>
    </li>
  );
};

export default NavMenuItem;
