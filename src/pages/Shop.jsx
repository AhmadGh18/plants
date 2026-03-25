import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BreadCrumbs from "../components/BreadCrumbs";
import { FaSearch } from "react-icons/fa";
const categories = ["All", "Indoor", "Outdoor", "Succulents", "Herbs"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar isblack={true} isfixed={false} />
      <BreadCrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Shop", path: "/shop" },
          { label: "Item", path: "/shop/item" },
        ]}
      />
      <div className="p-6 max-w-7xl mx-auto font-sans">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="mb-6 relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search for your favorite plant..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-4 pr-4 py-3 rounded-sm border border-secondprimary shadow focus:outline-none focus:ring-1 focus:ring-primary focus:border-green-300 transition placeholder:text-primary"
            />
            <div className="bg-secondprimary w-12 absolute top-0 h-full right-0 flex justify-center items-center">
              <FaSearch className="text-white" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-secondprimary text-white shadow"
                  : "bg-green-100 text-secondprimary hover:bg-green-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Replace this with actual product cards */}
          <div className="h-48 bg-green-50 rounded-xl flex items-center justify-center text-secondprimary font-semibold shadow-inner">
            🌱 Plant Card
          </div>
          <div className="h-48 bg-green-50 rounded-xl flex items-center justify-center text-secondprimary font-semibold shadow-inner">
            🌱 Plant Card
          </div>
          <div className="h-48 bg-green-50 rounded-xl flex items-center justify-center text-secondprimary font-semibold shadow-inner">
            🌱 Plant Card
          </div>
          <div className="h-48 bg-green-50 rounded-xl flex items-center justify-center text-secondprimary font-semibold shadow-inner">
            🌱 Plant Card
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
