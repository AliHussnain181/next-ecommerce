"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { TiStarOutline } from 'react-icons/ti';

export default function Page({ params }) {
  const { id } = params;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProduct(id, setData);
  }, [id, setData]);
  

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await response.json();
      setData(product);
      return product;
    } catch (error) {
      console.log('Error fetching product:', error);
    }
  };

  const handleCart = (data) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const { id, title, price, image } = data;
    const existItem = cart.find(item => item.id === id);
    if (existItem) {
      existItem.count++;
    } else {
      cart.push({ id, title, price, image, count: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl bg-white rounded-lg shadow-md p-8 sm:p-12">
        <h1 className="text-2xl font-bold mb-4">Product Details</h1>
        <div className="flex flex-col items-center md:flex-row md:space-x-8">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <Image
              src={data.image}
              alt={data.title}
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">{data.title}</h2>
            <p className="text-gray-700 text-lg mb-4">${data.price}</p>
            <p className="text-gray-700">{data.description}</p>
            <button
              onClick={() => handleCart(data)}
              className="mt-6 bg-black text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black border-black border-2 hover:border-2 hover:border-black transition-all duration-300 ease-in-out"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
