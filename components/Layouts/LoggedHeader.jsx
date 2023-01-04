import styles from "./Styles/Header.module.css";
import { useRef } from "react";

import Username from "../Nav/UserName";
import Hamburger from "../Nav/Hamburger";
import Link from "next/link";
import LogoutButton from "../Nav/LogoutButton";

export default function LoggedHeader() {
  const navRef = useRef();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>MyGallery.</div>
          <div className={styles.nav_container}>
            <Username name="Mr. Fajar" />
            <LogoutButton />
          </div>
          <Hamburger navRef={navRef} />
        </div>
      </header>
      <div className={styles.nav_collapse} ref={navRef}>
        <div>Mr. Fajar</div>
        <Link href="/">Beranda</Link>
      </div>
    </>
  );
}
