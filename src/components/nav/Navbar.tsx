import styles from './navbar.module.scss';
import { useState } from 'react';
import { MENUS } from '#src/config';
import NavMenu from './NavMenu';
import spiderLogo from '#public/logo.svg';
import { GithubLogo } from 'public/logos';
import CustomLink from '#components/common/CustomLink';
import styled from 'styled-components';
import Image from 'next/image';

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
    <NavLogo>
      <CustomLink href="/">
        <Image
          alt="spider"
          width="40"
          src={spiderLogo}
          style={{
            margin: '0.5rem 0 0.25rem 0',
          }}
        />
      </CustomLink>
    </NavLogo>
  );
};

const NavLogo = styled.div`
  display: inline;
  width: 4rem;
  margin: 1rem;

  &:hover {
    & img {
      transform: rotate(360deg);
      transition: transform 0.25s ease-in-out;
    }
  }
`;

export default Navbar;
