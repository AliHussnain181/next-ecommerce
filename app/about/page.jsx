import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';


const DeveloperHero = () => {
  return (
    <section className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">A Developer first Next Js Project</h1>
        <p className="text-lg sm:text-xl mb-12">A Full Stack Developer MERN DEVELOPER</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              className="w-32 h-32 rounded-full mb-4"
              src="data:image/png;base64,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"
              alt="Developer 1"
            />
            <h2 className="text-xl font-bold mb-2">John Doe</h2>
            <p className="text-gray-700 mb-4">Full Stack Developer</p>
            <div className="flex space-x-4">
              <a href="https://github.com/AliHussnain181" className="text-gray-600 hover:text-gray-900">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com/" className="text-gray-600 hover:text-gray-900">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ali-hussnain-0632b3264/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BTckVbWfmQ0%2BPgspMqaMtOw%3D%3D" className="text-gray-600 hover:text-gray-900">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          {/* Repeat the above div for more developers */}
        </div>
      </div>
    </section>
  );
};

export default DeveloperHero;
