import styles from "./Styles/Layout.module.css";

export default function Layout({ children }) {
  return <main className={styles.main}>{children}</main>;
}
