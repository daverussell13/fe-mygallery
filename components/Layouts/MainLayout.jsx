import styles from "./Styles/MainLayout.module.css";

export default function MainLayout({ children }) {
  return <main className={styles.main}>{children}</main>;
}
