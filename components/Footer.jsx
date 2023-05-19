import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-14">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-center md:text-left text-sm">
          &copy; 2023 Your Company. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/"
            className="text-gray-600 hover:text-gray-900"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/"
            className="text-gray-600 hover:text-gray-900"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com/company/"
            className="text-gray-600 hover:text-gray-900"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
