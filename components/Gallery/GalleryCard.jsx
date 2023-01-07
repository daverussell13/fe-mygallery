import styles from "./Styles/GalleryCard.module.css";
import Image from "next/image";
import Router from "next/router";

export default function GalleryCard({ memoryID, date, tag, imageUrl }) {
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
            style={{
              objectFit: "contain",
              background: "#f4f4f4",
            }}
            onClick={() => Router.push(`/gallery/${memoryID}`)}
          ></Image>
        </div>
        <div className={styles.card_body}>
          {date}, {tag}
        </div>
      </div>
    </div>
  );
}
