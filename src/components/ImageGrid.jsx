import ImageCard from "./ImageCard";

export default function ImageGrid({ images }) {
  return (
    <div className="p-6 columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
      {images.map((img) => (
        <ImageCard key={img.id} image={img} />
      ))}
    </div>
  );
}