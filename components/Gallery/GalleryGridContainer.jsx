import { Spinner } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { getJsonWithCreds } from "../../helper/options";
import GalleryCard from "./GalleryCard";
import { MemoryContext } from "../../context/MemoryContextProvider";
import { clearUserData } from "../../helper/auth";
import { toast } from "react-toastify";
import Router from "next/router";
import { getFormattedDate } from "../../helper/utils";
import Loading from "../Layouts/Loading";

export default function GalleryGridContainer() {
  const { memories, setMemories } = useContext(MemoryContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMemories() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/memories`,
          getJsonWithCreds()
        );

        const status = res.status;
        const resJson = await res.json();

        if (status == 200) {
          setMemories(resJson.data);
        } else if (status >= 400 && status <= 499) {
          toast.error("Unable to fetch memories 💀");
          toast.info("Please relogin ⚠️");
          clearUserData();
          Router.replace("/login");
        } else if (status >= 500 && status <= 599) {
          toast.error("Something went wrong 😕");
          clearUserData();
          Router.replace("/login");
        }
      } catch (err) {
        toast.error("Something went wrong 😕");
        clearUserData();
        Router.replace("/login");
      } finally {
        setLoading(false);
      }
    }
    fetchMemories();
  }, [setMemories]);

  useEffect(() => {
    async function fetchMemories() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/memories`,
          getJsonWithCreds()
        );

        const status = res.status;
        const resJson = await res.json();

        if (status == 200) {
          setMemories(resJson.data);
        } else if (status >= 400 && status <= 499) {
          toast.error("Unable to fetch memories 💀");
          toast.info("Please relogin ⚠️");
          clearUserData();
          Router.replace("/login");
        } else if (status >= 500 && status <= 599) {
          toast.error("Something went wrong 😕");
          clearUserData();
          Router.replace("/login");
        }
      } catch (err) {
        toast.error("Something went wrong 😕");
        clearUserData();
        Router.replace("/login");
      } finally {
        setLoading(false);
      }
    }
    fetchMemories();
  }, [setMemories]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="album py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-5 gx-5">
          {memories.map((memory) => {
            return (
              <GalleryCard
                key={memory.ID}
                memoryID={memory.ID}
                date={getFormattedDate(memory.CreatedAt)}
                tag={memory.tag}
                imageUrl={memory.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
