import LoginButton from "../Nav/LoginButton";
import RegisterButton from "../Nav/RegisterButton";
import HomeButton from "../Nav/HomeButton";
import Hamburger from "../Nav/Hamburger";

import styles from "./Header.module.css";
import { useRef } from "react";

export default function Header() {
  const navRef = useRef();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>MyGallery.</div>
        <div className={styles.nav_container}>
          <HomeButton />
          <LoginButton />
          <RegisterButton />
        </div>
        <div className={styles.nav_collapse} ref={navRef}>
          <a href="">Beranda</a>
          <a href="">Login</a>
          <a href="">Register</a>
        </div>
        <Hamburger navRef={navRef} />
      </div>
    </header>
  );
}
