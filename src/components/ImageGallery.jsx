export default function ImageGallery({ images }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 mt-6">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className="rounded-xl object-cover h-64 w-full"
        />
      ))}
    </div>
  );
}
