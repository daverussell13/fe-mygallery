import styles from "./Styles/GalleryCard.module.css";
import Image from "next/image";

export default function GalleryCard() {
  return (
    <div className="col d-flex justify-content-center align-items-center">
      <div className={styles.card_container}>
        <div className={styles.card_image}>
          <Image fill src="/Assets/example.png" alt="example.png"></Image>
        </div>
        <div className={styles.card_body}>16/02/2022, Nature</div>
      </div>
    </div>
  );
}
