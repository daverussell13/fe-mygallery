import Header from "../../components/Layouts/LoggedHeader";
import MemoryDetail from "../../components/Gallery/MemoryDetail";
import Router from "next/router";
import { useEffect } from "react";

export default function GalleryDetails() {
  useEffect(() => {
    if (!localStorage.getItem("token")) Router.replace("/login");
  }, []);

  return (
    <>
      <Header />
      <MemoryDetail />
    </>
  );
}
