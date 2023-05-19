"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link href={`/products/${product.id}`}>
          <div key={product.id} className="bg-white rounded shadow p-4">
            <Image
              src={product.image}
              alt={product.title}
              width={150}
              height={150}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold mb-2 line-clamp-1">{product.title}</h2>
            <p className="text-gray-700 line-clamp-2">{product.description}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
