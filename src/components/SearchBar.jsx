import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      <form
        onSubmit={handleSearch}
        className="flex items-center w-full max-w-2xl bg-white shadow-md rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-red-400 transition"
      >
        {/* Icon */}
        <Search className="text-gray-400 mr-2" size={20} />

        {/* Input */}
        <input
          type="text"
          placeholder="Search beautiful images..."
          className="flex-1 outline-none text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Clear Button */}
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="text-gray-400 hover:text-black px-2 text-lg"
          >
            ✕
          </button>
        )}

        {/* Search Button */}
        <button
          type="submit"
          className="ml-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm hover:bg-red-600 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
}