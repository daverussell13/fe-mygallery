import styles from "./Styles/TagBadge.module.css";

export default function TagBadge({ tag }) {
  return (
    <div className={styles.badge}>
      <span># {tag}</span>
    </div>
  );
}
