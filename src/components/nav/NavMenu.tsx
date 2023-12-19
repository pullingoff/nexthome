import Link from 'next/link';

type MenuType = {
  title: string;
  path: string;
  emoji?: string;
};

const NavMenu = ({
  menu,
  className,
  children,
}: {
  menu: MenuType;
  className?: string;
  children?: React.ReactNode; // 메뉴 이름이 아닌 깃허브 로고 같은 경우
}) => {
  return (
    <li className="inline-block text-deep-blue text-2xl font-semibold ml-6">
      <Link
        href={menu.path}
        className={`inline-block relative hover:text-[salmon] after:content-[''] after:absolute after:w-full after:h-[0.1rem] after:bg-[salmon] after:opacity-0 after:transition-opacity after:origin-center after:scale-0 after:left-0 after:bottom-0 hover:after:opacity-100 hover:after:scale-100 ${className}`}
      >
        {children ? children : menu.title}
      </Link>
    </li>
  );
};

export default NavMenu;
