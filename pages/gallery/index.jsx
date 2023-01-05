import Header from "../../components/Layouts/LoggedHeader";
import GalleryGridContainer from "../../components/Gallery/GalleryGridContainer";
import GalleryCard from "../../components/Gallery/GalleryCard";
import ButtonSection from "../../components/Gallery/ButtonSection";

export default function Gallery() {
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
