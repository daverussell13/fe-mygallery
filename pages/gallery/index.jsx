import Header from "../../components/Layouts/LoggedHeader";
import GalleryGridContainer from "../../components/Gallery/GalleryGridContainer";
import GalleryCard from "../../components/Gallery/GalleryCard";

export default function Gallery() {
  return (
    <>
      <Header />
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
