import styles from "./Styles/Header.module.css";
import { useEffect, useRef, useState } from "react";

import Username from "../Nav/UserName";
import Hamburger from "../Nav/Hamburger";
import LogoutButton from "../Nav/LogoutButton";
import Router from "next/router";

export default function LoggedHeader() {
  const navRef = useRef();
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setUsername(localStorage.getItem("email"));
    } else {
      Router.replace("/login");
    }
  }, []);

  function removeToken() {
    localStorage.removeItem("token");
    Router.replace("/login");
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>MyGallery.</div>
          <div className={styles.nav_container}>
            <Username name={username} />
            <LogoutButton />
          </div>
          <Hamburger navRef={navRef} />
        </div>
      </header>
      <div className={styles.nav_collapse} ref={navRef}>
        <div>{username}</div>
        <div style={{ cursor: "pointer" }} onClick={removeToken}>
          Logout
        </div>
      </div>
    </>
  );
}
