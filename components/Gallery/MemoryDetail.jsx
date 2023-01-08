import styles from "./Styles/MemoryDetail.module.css";

import Link from "next/link";
import MemoryImage from "./MemoryImage";
import TagBadge from "./TagBadge";
import UpdateButton from "./MemoryUpdateButton";
import { useContext, useEffect, useState } from "react";
import Loading from "../Layouts/Loading";
import { getJsonWithCreds } from "../../helper/options";
import { MemoryContext } from "../../context/MemoryContextProvider";
import { toast } from "react-toastify";
import Router from "next/router";
import { getFormattedDate, getFormattedTime } from "../../helper/utils";

export default function MemoryDetail({ id }) {
  const [loading, setLoading] = useState(true);
  const { memory, setMemory } = useContext(MemoryContext);

  useEffect(() => {
    async function fetchMemory() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/memories/${id}`,
          getJsonWithCreds()
        );
        const resJson = await res.json();
        const success = res.status == 200;
        if (success) {
          setMemory(resJson.data);
        } else {
          toast.error("Failed to fetch memory 💀");
          Router.replace("/gallery");
        }
      } catch (err) {
        toast.error("Something went wrong 😕");
        Router.replace("/gallery");
      } finally {
        setLoading(false);
      }
    }
    fetchMemory();
  }, [id, setMemory]);

  if (loading) {
    return <Loading></Loading>;
  }

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
        <div className={styles.memory_title}>
          {getFormattedDate(memory.CreatedAt)},{" "}
          {getFormattedTime(memory.CreatedAt)}
        </div>
      </div>
      <div
        className="row flex-column justify-content-center align-items-center mb-3 mb-sm-4"
        style={{ gap: "20px" }}
      >
        <div className={styles.memory_image_container}>
          <MemoryImage
            fill
            imageUrl={memory.imageUrl}
            style={{ objectFit: "contain" }}
          />
        </div>
        <TagBadge tag={memory.tag}></TagBadge>
        <div className="row">
          <div
            className="col-xl-8 col-lg-10 col-12 px-4 m-auto fs-5 text-center"
            style={{ textAlign: "justify" }}
          >
            {memory.description}
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
