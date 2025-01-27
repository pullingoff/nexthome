"use client";
import styles from "./navbar.module.scss";
import { GithubLogo } from "public/logos";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/logo.svg";

const Navbar = () => {
  return (
    <header className={styles.navContainer}>
      <div className={styles.navContents}>
        <Link className="inline-block w-16 m-2" href="/">
          <Image width={40} src={Logo} alt="pudding emoji" />
        </Link>
        <Link className={styles.right} href="https://github.com/pullingoff">
          <GithubLogo />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
