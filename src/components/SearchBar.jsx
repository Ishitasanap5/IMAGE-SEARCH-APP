import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState("");

  // debounce function
  const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  };

  // useRef to persist debounced function
  const debouncedSearch = useRef(
    debounce((val) => {
      if (val.trim()) onSearch(val);
    }, 500)
  ).current;

  // handle input changes
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  // optional: handle search button click
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim() || loading) return;
    onSearch(query); // immediate search on button click
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full max-w-2xl bg-white shadow-md rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-red-400 transition"
      >
        <Search className="text-gray-400 mr-2" size={20} />

        <input
          type="text"
          placeholder="Search beautiful images..."
          className="flex-1 outline-none text-sm"
          value={query}
          onChange={handleInputChange} // <-- use debounce here
        />

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