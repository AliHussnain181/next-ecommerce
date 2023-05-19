"use client"
import React, { useEffect, useState } from 'react';
import { TiPlus, TiMinus } from 'react-icons/ti';
import { AiFillDelete } from 'react-icons/ai';

const CartComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  const updateCartItem = (index, count) => {
    const updatedItems = [...cartItems];
    updatedItems[index] = { ...updatedItems[index], count };
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const deleteProduct = (id) => {
    const filteredItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredItems);
    localStorage.setItem('cart', JSON.stringify(filteredItems));
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    return totalPrice.toFixed(2);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg mb-96">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
        {cartItems.length > 0 ? (
          <div className="flex flex-col">
            {cartItems.map((item, index) => (
              <div
                className="flex items-center justify-between border-b-2 py-2"
                key={item.id}
              >
                <div className="flex items-center">
                  <img
                    className="w-16 h-16 rounded-lg"
                    src={item.image}
                    alt="Product Image"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Price: ${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div
                    onClick={() => deleteProduct(item.id)}
                    className="text-2xl cursor-pointer mx-6 hover:text-red-500"
                  >
                    <AiFillDelete />
                  </div>
                  <button
                    className="text-gray-500 focus:outline-none"
                    onClick={() => updateCartItem(index, item.count - 1)}
                    disabled={item.count <= 1}
                  >
                    <TiMinus size={20} />
                  </button>
                  <span className="px-3">{item.count}</span>
                  <button
                    className="text-gray-500 focus:outline-none"
                    onClick={() => updateCartItem(index, item.count + 1)}
                  >
                    <TiPlus size={20} />
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <p className="font-semibold">Total Price: ${calculateTotalPrice()}</p>
            </div>
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
