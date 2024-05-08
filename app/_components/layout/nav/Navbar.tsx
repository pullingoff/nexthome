"use client";
import styles from "./navbar.module.scss";
import { useState } from "react";
import { MENUS } from "app/config";
import NavMenu from "./NavMenu";
import { GithubLogo } from "public/logos";
import Link from "next/link";
import classNames from "classnames";

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
      <div className={styles.navContents}>
        <Link className="inline-block w-16 m-2" href="/">
          home
        </Link>
        <div className={styles.threeBarNav} onClick={onToggleNav}>
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
        <ul
          role="navigation"
          className={styles.navMenuUl}
          onClick={onToggleNav}
        >
          {MENUS.map((menu, idx) => (
            <NavMenu key={idx} menu={menu} />
          ))}
          <NavMenu
            menu={{ title: "", path: "https://github.com/pullingoff" }}
            className="bottom-[-5px] hover:fill-light-blue"
          >
            <GithubLogo />
          </NavMenu>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
