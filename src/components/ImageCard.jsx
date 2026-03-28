export default function ImageCard({ image }) {
  return (
    <div className="mb-4 break-inside-avoid group relative cursor-pointer">
      
      {/* Image */}
      <img
       src={image.webformatURL}
       alt={image.tags}
       loading="lazy"  
       className="rounded-xl w-full transition duration-300 group-hover:brightness-75"
      />
  

      {/* Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex flex-col justify-between p-3">
        
        {/* Top right (save button style) */}
        <div className="flex justify-end">
          <button className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">
            Save
          </button>
        </div>

        {/* Bottom info */}
        <div className="text-white text-xs">
          <p className="font-semibold">{image.user}</p>
          <p>❤️ {image.likes} &nbsp; 👁️ {image.views}</p>
        </div>

      </div>
    </div>
  );
}