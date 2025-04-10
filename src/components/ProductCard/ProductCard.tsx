// src/components/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  description,
  image,
}) => {

    const { addToCart } = useCart();

  return (

    <Link to={`/product/${id}`} className="bg-[#1f1f1f] w-full max-w-xs mx-auto p-4 rounded-xl shadow-lg border border-orange-500 hover:scale-105 transition-transform duration-200 flex flex-col justify-between">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-sm font-semibold mb-1">{title}</h3>
      <p className="text-gray-400 text-xs mb-3">{description.slice(0, 80)}...</p>
      <p className="text-orange-400 font-bold text-sm mb-3">{price} $</p>
      <button 
      onClick={() => addToCart({ id, title, price, image })}
      className="mt-auto bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition-colors">
        ADD TO CART
      </button>
    </Link>
  );
};

export default ProductCard;
