import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { HiArrowNarrowLeft } from "react-icons/hi";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams(); // دریافت ID از URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("خطا در دریافت اطلاعات محصول");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">در حال بارگذاری...</p>;
  if (error) return <p className="text-center text-red-400">{error}</p>;
  if (!product) return <p className="text-center">محصولی یافت نشد</p>;

  return (
    <div className="bg-black min-h-screen text-white px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
      >
        <HiArrowNarrowLeft className="text-lg" />
        <span>برگشت</span>
      </button>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-contain border border-orange-500 rounded-lg"
        />
        <div>
          <h1 className="text-2xl font-bold text-orange-400 mb-4">
            {product.title}
          </h1>
          <p className="text-gray-300 mb-4">{product.description}</p>
          <p className="text-orange-400 text-xl font-bold mb-4">
            ${product.price}
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
