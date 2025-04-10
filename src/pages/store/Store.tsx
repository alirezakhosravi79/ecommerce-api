import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa"; // آیکون اسپینر
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchBar from "../../components/search/Searchbar";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Store: React.FC = () => {
  const [clothingProducts, setClothingProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const clothesOnly = res.data.filter(
          (item: Product) =>
            item.category === "men's clothing" ||
            item.category === "women's clothing"
        );
        setClothingProducts(clothesOnly);
        setLoading(false);
      })
      .catch(() => {
        setError("Error");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <FaSpinner className="animate-spin text-orange-500 text-5xl" />
      </div>
    );
  }

  if (error) return <p className="text-center text-red-400">{error}</p>;

  return (
    <>
    
    <SearchBar />
    <div className="bg-black min-h-screen text-white px-4 py-8">
      <h1 className="text-3xl font-bold text-orange-400 text-center mb-8">
        cloths
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {clothingProducts.map((product) => (
          <ProductCard  key={product.id} {...product}/>
        ))}
      </div>
    </div>
    </>
  );
};

export default Store;
