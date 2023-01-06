import Header from "../../components/Layouts/LoggedHeader";
import GalleryGridContainer from "../../components/Gallery/GalleryGridContainer";
import GalleryCard from "../../components/Gallery/GalleryCard";
import ButtonSection from "../../components/Gallery/ButtonSection";
import { useEffect } from "react";
import Router from "next/router";

export default function Gallery() {
  useEffect(() => {
    if (!localStorage.getItem("token")) Router.replace("/login");
  }, []);

  return (
    <>
      <Header classExtension="mb-5" />
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
