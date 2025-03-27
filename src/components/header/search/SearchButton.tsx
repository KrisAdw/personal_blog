"use client";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";

const SearchButton = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="relative flex items-center h-10">
      {isSearching ? (
        <motion.input
          type="text"
          placeholder="Search..."
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "12rem", opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="h-10 px-4 border-b text-sm border-gray-300 focus:outline-none focus:border-[var(--choco)]"
          onBlur={() => setIsSearching(false)}
          autoFocus
        />
      ) : (
        <motion.button
          onClick={() => setIsSearching(true)}
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          className="h-10 w-10 flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <IoIosSearch className="text-xl" />
        </motion.button>
      )}
    </div>
  );
};

export default SearchButton;
