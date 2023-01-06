import styles from "./Styles/GalleryCard.module.css";
import Image from "next/image";

export default function GalleryCard({ key, date, tag, imageUrl }) {
  const src = `${process.env.NEXT_PUBLIC_STATIC_IMAGE_URL}/${imageUrl}`;

  return (
    <div className="col d-flex justify-content-center align-items-center">
      <div className={styles.card_container}>
        <div className={styles.card_image}>
          <Image
            fill
            loader={() => src}
            src={src}
            alt="memory.png"
            style={{ objectFit: "contain", background: "rgba(245,245,245,.8)" }}
          ></Image>
        </div>
        <div className={styles.card_body}>
          {date}, {tag}
        </div>
      </div>
    </div>
  );
}
