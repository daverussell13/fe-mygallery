import Header from "../../components/Layouts/LoggedHeader";
import GalleryGridContainer from "../../components/Gallery/GalleryGridContainer";
import GalleryCard from "../../components/Gallery/GalleryCard";
import ButtonSection from "../../components/Gallery/ButtonSection";
import { useEffect, useState } from "react";
import Router from "next/router";

export default function Gallery() {
  const [credential, setCredential] = useState({});

  useEffect(() => {
    const userCreds = JSON.parse(localStorage.getItem("User-Creds"));
    const token = localStorage.getItem("token");

    if (!userCreds || !token) {
      token && localStorage.removeItem("token");
      Router.replace("/login");
    } else {
      setCredential(userCreds);
    }
  }, []);

  return (
    <>
      <Header email={credential.email} />
      <ButtonSection />
      <GalleryGridContainer>
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </GalleryGridContainer>
    </>
  );
}
