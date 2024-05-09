"use client";
import styles from "./navbar.module.scss";
import { useState } from "react";
import { MENUS } from "app/config";
import NavMenuItem from "./NavMenuItem";
import { GithubLogo } from "public/logos";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/logo.svg";

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
          <Image src={Logo} alt="pudding emoji" />
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
          {MENUS.map((menu) => (
            <NavMenuItem key={menu.path} menu={menu} />
          ))}
          <NavMenuItem menu={{ path: "https://github.com/pullingoff" }}>
            <GithubLogo />
          </NavMenuItem>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
