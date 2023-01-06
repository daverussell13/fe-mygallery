import styles from "./Styles/MemoryDetail.module.css";

import Link from "next/link";
import Image from "next/image";
import TagBadge from "./TagBadge";
import UpdateButton from "./MemoryUpdateButton";
import { useEffect } from "react";

export default function MemoryDetail() {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      Router.replace("/login");
    }
  }, []);

  return (
    <div className={`container my-4 ${styles.container}`}>
      <div className="row justify-content-center">
        <div className="col-11 col-lg-10 col-xxl-8">
          <Link className={styles.back_button} href="/gallery">
            Back
          </Link>
        </div>
      </div>
      <div className="d-flex">
        <div className={styles.memory_title}>16/02/2022, 16:00</div>
      </div>
      <div
        className="row flex-column justify-content-center align-items-center mb-3 mb-sm-4"
        style={{ gap: "20px" }}
      >
        <div className={styles.memory_image_container}>
          <Image
            fill
            src="/Assets/example.png"
            alt="example"
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
        <TagBadge tag="Nature"></TagBadge>
        <div className="row">
          <div
            className="col-xl-8 col-lg-10 col-12 px-4 m-auto fs-6"
            style={{ textAlign: "justify" }}
          >
            Lorem ipsum dolor sit amet consectetur. Congue sed lectus felis
            phasellus odio. Hac lobortis pellentesque quis convallis malesuada.
            Viverra vitae feugiat nulla neque metus cras cursus. Varius
            porttitor molestie egestas gravida massa iaculis mi aenean. Accumsan
            in vel a hac sed. Cursus posuere pulvinar sapien vulputate quis
            bibendum at ultrices.
          </div>
        </div>
      </div>
      <div className={`row justify-content-center ${styles.detail_footer}`}>
        <UpdateButton action="Edit"></UpdateButton>
        <UpdateButton action="Delete" background="#E39982"></UpdateButton>
      </div>
    </div>
  );
}
