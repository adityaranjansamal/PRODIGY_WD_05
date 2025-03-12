import React, { useState } from "react";
import "/src/styles/SearchBar.scss";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
      setQuery("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <motion.div className="search-bar" whileTap={{ scale: 1.15 }}>
      <motion.input
        type="text"
        placeholder="Enter city name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>
        <FaSearch />
      </button>
    </motion.div>
  );
};

export default SearchBar;
