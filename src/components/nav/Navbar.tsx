import styles from './navbar.module.scss';
import { useState } from 'react';
import { MENUS } from '#src/config';
import NavMenu from './NavMenu';
import spiderLogo from '#public/logo.svg';
import { GithubLogo } from 'public/logos';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isNavOpen, setNavOpened] = useState(false);

  const onToggleNav = () => {
    setNavOpened(!isNavOpen);
  };

  return (
    <header
      className={
        isNavOpen
          ? `${styles.navContainer} ${styles.open}`
          : styles.navContainer
      }
    >
      <nav className={styles.siteNav}>
        <SpiderLogo />

        <div className={styles.threeBarNav} onClick={onToggleNav}>
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
        <div
          role="navigation"
          className={styles.navMenuUl}
          onClick={onToggleNav}
        >
          {MENUS.map((menu, idx) => (
            <NavMenu key={idx} menu={menu} />
          ))}
          <NavMenu menu={{ title: '', path: 'https://github.com/pullingoff' }}>
            <GithubLogo style={textStyle} />
          </NavMenu>
        </div>
      </nav>
    </header>
  );
};

const textStyle: React.CSSProperties = {
  position: 'relative',
  bottom: '-5px',
};

const SpiderLogo = () => {
  return (
    <Link className="inline-block w-16 m-2" href="/">
      <Image
        className="hover:rotate-[360deg] transition-transform duration-[0.3s]"
        alt="spider"
        width={45}
        src={spiderLogo}
      />
    </Link>
  );
};

export default Navbar;
