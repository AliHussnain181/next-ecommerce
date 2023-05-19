import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import {BsShop} from "react-icons/bs"

const Header = () => {
    return (
        <header className="bg-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="text-3xl flex items-center">
                    <Link href="/" className="w-16 font-bold text-gray-800">
                   <BsShop/>
                    </Link>
                </div>
                <nav className="space-x-7">
                    <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                    <Link href="/" className="text-gray-600 hover:text-gray-800">Shop</Link>
                    <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
                </nav>
                <div className="flex items-center">
                    <Link href="/cart" className="ml-4 text-gray-600 hover:text-gray-800">
                        <FaShoppingCart className="h-6 w-6" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
