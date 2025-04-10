import { HiSearch } from "react-icons/hi";

function SearchBar() {
  return (
    <div className="bg-[#1f1f1f] py-6 shadow-inner border-b border-orange-400 mt-20">
      <div className="container mx-auto px-4">
        <div className="relative w-full md:w-1/2 mx-auto">
          <HiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-orange-400 text-xl" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 bg-black text-white placeholder-gray-400 rounded-md border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
