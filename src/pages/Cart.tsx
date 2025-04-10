// src/pages/Cart.tsx
import { useCart } from "../context/CartContext";
import { HiPlus, HiMinus, HiTrash } from "react-icons/hi";

const Cart = () => {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return <p className="text-center mt-28 text-white text-xl">Your Cart Is Empty 🛒</p>;
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4">
      <h1 className="text-3xl font-bold text-orange-400 mb-8 text-center">CART</h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-[#1f1f1f] p-4 rounded-lg border border-orange-400"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-orange-400 font-bold">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQty(item.id)}
                className="bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600"
              >
                <HiMinus />
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increaseQty(item.id)}
                className="bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600"
              >
                <HiPlus />
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
              >
                <HiTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* جمع کل */}
      <div className="max-w-4xl mx-auto mt-10 text-right border-t border-orange-400 pt-4">
        <p className="text-xl font-bold text-orange-400">TOTAL : {totalItems}</p>
        <p className="text-xl font-bold text-orange-400">TOTAL PRICE ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
