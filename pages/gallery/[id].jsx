import Header from "../../components/Layouts/LoggedHeader";
import MemoryDetail from "../../components/Gallery/MemoryDetail";
import { useEffect, useState } from "react";
import { redirectIfMissingCreds } from "../../helper/auth";
import { useRouter } from "next/router";

export default function GalleryDetails() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    redirectIfMissingCreds();
  }, []);

  return (
    <>
      <Header />
      <MemoryDetail id={id} />
    </>
  );
}
