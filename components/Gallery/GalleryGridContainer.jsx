export default function GalleryGridContainer({ children }) {
  return (
    <div className="album py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-5 gx-5">
          {children}
        </div>
      </div>
    </div>
  );
}
