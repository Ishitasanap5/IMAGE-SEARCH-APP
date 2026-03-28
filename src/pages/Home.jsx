import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { fetchImages } from "../api/api.js";
import ImageGrid from "../components/ImageGrid";

export default function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const lastQueryRef = useRef("");
  const cacheRef = useRef({});

  const handleSearch = async (query) => {
    if (loading || !query.trim()) return;

    // prevent duplicate calls
    if (query === lastQueryRef.current) return;
    lastQueryRef.current = query;

    // cache hit (no API call)
    if (cacheRef.current[query]) {
      setImages(cacheRef.current[query]);
      return;
    }

    try {
      setLoading(true);

      const data = await fetchImages(query);

      // store in cache
      cacheRef.current[query] = data;

      setImages(data);
    } catch (err) {
      if (err.response?.status === 429) {
        alert("Too many requests 😅 Wait a few seconds and try again.");
      } else {
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="mt-6">
        <SearchBar onSearch={handleSearch} loading={loading} />
      </div>

      {loading ? (
        <div className="flex justify-center mt-20">
          <div className="w-10 h-10 border-4 border-red-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <ImageGrid images={images} />
      )}
    </div>
  );
}