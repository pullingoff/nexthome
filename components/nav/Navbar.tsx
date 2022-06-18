import styles from './navbar.module.scss';
import { useState } from 'react';
import { MENUS } from '@config/index';
import NavMenu from './NavMenu';
import SpiderLogo from './SpiderLogo';
import { GithubLogo } from 'public/logos';

const Navbar = () => {
  const [isNavOpen, setNavOpened] = useState(false);

  function onToggleNav() {
    setNavOpened(!isNavOpen);
  }

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

export default Navbar;
