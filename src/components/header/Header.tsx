import React from "react";
import SearchButton from "./search/SearchButton";
import SubscribeButton from "./subscribe/SubscribeButton";

const Header = () => {
  return (
    <div className="w-full border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 ">
        <div className="flex justify-between items-center">
            {/* Logo */}
          <h1>KrisSpace.</h1>          

          {/* Nav Menu */}
          <div>
            <ul className="flex space-x-4 text-sm">
                <li>Home</li>
                <li>Article</li>
                <li>Categories</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
          </div>

          {/* Subscribe Newsletter*/}
          <div className="flex items-center space-x-4">
            <SearchButton />
            <SubscribeButton />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
