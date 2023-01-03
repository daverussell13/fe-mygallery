import styles from "./Styles/Banner.module.css";
import bg from "../../public/Assets/securelogin.png";

export default function Banner() {
  return (
    <div className={styles.banner_container}>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
    </div>
  );
}
