// src/pages/Home.tsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen mt-15 bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-500 text-white py-12">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* Welcome Section */}
        <h1 className="text-4xl font-extrabold mb-6">
          Welcome to P_Shop
        </h1>
        <p className="text-lg mb-6">
          Discover the best products for all your needs. Explore a wide range of
          items and enjoy seamless shopping experience.
        </p>

        {/* Buttons */}
        <div className="flex gap-6">
          <Link
            to="/store"
            className="bg-black text-orange-400 px-6 py-3 rounded-md text-lg hover:bg-gray-800 transition"
          >
            Shop Now
          </Link>

          <Link
            to="/contact"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md text-lg hover:bg-white hover:text-black transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Featured Products Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
          <p className="text-lg mb-6">
            Check out our most popular products for this season!
          </p>
          {/* You can add product cards or featured items here */}
        </div>
      </div>
    </div>
  );
}

export default Home;
