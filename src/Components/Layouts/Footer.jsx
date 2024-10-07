import React from 'react';
import { FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const phoneNumber = "9106053831"; // Phone number to dial

  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand and Description */}
          <div className="col-span-1">
            <h2 className="font-serif text-2xl">
              <span className="text-white font-bold">Click</span>STUDIO
            </h2>
            <p className="mt-4 text-gray-400">
              Creatively capturing special moments for your life. Discover our stunning portfolios.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-span-1">
            <h3 className="font-serif text-lg font-bold">Galleries</h3>
            <ul className="mt-4 space-y-2">
              <li>Weddings</li>
              <li>Portraits</li>
              <li>Events</li>
              <li>Nature</li>
              <li>Studio</li>
              <li>Commercial</li>
            </ul>
          </div>

          {/* Policies Section - Only visible on medium and larger screens */}
          <div className="hidden md:block col-span-1">
            <h3 className="font-serif text-lg font-bold">Policies</h3>
            <ul className="mt-4 space-y-2">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Refunds</li>
              <li>Usage</li>
            </ul>
          </div>

          {/* About Us Section */}
          <div className="col-span-1">
            <h3 className="font-serif text-lg font-bold">About Us</h3>
            <p className="mt-4 text-gray-400">
              Committed to excellence in photography with a unique touch. Let’s create memories.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            Copyright &copy; 2024  <a href="https://portfolio-testing-five.vercel.app/">Jetal Patel</a>
          </p>
          <div className="flex space-x-5 mt-4 md:mt-0">
            {/* Instagram Link */}
            <a 
              href="https://www.instagram.com/j2keys" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram className="text-xl" />
            </a>
            {/* WhatsApp Link */}
            <a 
              href={`https://wa.me/91${phoneNumber}`} // WhatsApp link to the specified phone number
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaWhatsapp className="text-xl" />
            </a>
            {/* Call Link */}
            <a 
              href={`tel:${phoneNumber}`} 
              className="hover:text-gray-400"
            >
              <FaPhone className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
