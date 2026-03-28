import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim() || loading) return;

    onSearch(query);
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      <form
        onSubmit={handleSubmit}
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

        {/* Button*/}
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="ml-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm hover:bg-red-600 transition disabled:bg-gray-400"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
}