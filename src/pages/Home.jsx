import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import {fetchImages} from "../api/api.js"

export default function Home() {
  const [images, setImages] = useState([]);

  const handleSearch = async (query) => {
    const data = await fetchImages(query);
    setImages(data);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* spacing */}
      <div className="mt-6">
        <SearchBar onSearch={handleSearch} />
      </div>

      
    </div>
  );
}