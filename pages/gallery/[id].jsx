import Header from "../../components/Layouts/LoggedHeader";
import MemoryDetail from "../../components/Gallery/MemoryDetail";
import { useEffect } from "react";
import { redirectIfMissingCreds } from "../../helper/auth";

export default function GalleryDetails() {
  useEffect(() => {
    redirectIfMissingCreds();
  }, []);

  return (
    <>
      <Header />
      <MemoryDetail />
    </>
  );
}
