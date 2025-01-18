import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-white">Crest</h2>
          <p className="text-sm mt-2 text-gray-400 text-center md:text-left">
            Empowering teams with seamless collaboration tools and modern
            solutions.
          </p>
        </div>

        {/* Footer Links */}
        <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#solutions" className="hover:text-white">
            Solutions
          </a>
          <a href="#enterprise" className="hover:text-white">
            Enterprise
          </a>
          <a href="#resources" className="hover:text-white">
            Resources
          </a>
          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="hover:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.56a9.94 9.94 0 01-2.828.775 4.93 4.93 0 002.164-2.723 9.865 9.865 0 01-3.127 1.196 4.924 4.924 0 00-8.388 4.482 13.978 13.978 0 01-10.15-5.146 4.913 4.913 0 001.524 6.569 4.892 4.892 0 01-2.23-.616c-.054 2.28 1.582 4.415 3.946 4.89a4.936 4.936 0 01-2.224.085c.626 1.956 2.444 3.381 4.6 3.42a9.868 9.868 0 01-6.102 2.104c-.398 0-.79-.023-1.175-.068a13.924 13.924 0 007.548 2.212c9.055 0 14.001-7.502 14.001-14.002 0-.214-.005-.426-.014-.637A9.99 9.99 0 0024 4.56z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.494v-9.294H9.897v-3.622h2.922V8.413c0-2.895 1.767-4.475 4.346-4.475 1.238 0 2.303.092 2.613.133v3.03h-1.793c-1.408 0-1.681.67-1.681 1.652v2.165h3.361l-.438 3.622h-2.923V24h5.725c.729 0 1.324-.595 1.324-1.324V1.325C24 .595 23.405 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="hover:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19.998 0h-15.997c-2.21 0-4.001 1.791-4.001 4.002v15.996c0 2.21 1.791 4.001 4.001 4.001h15.997c2.21 0 4.001-1.791 4.001-4.001v-15.996c0-2.211-1.791-4.002-4.001-4.002zm-11.196 20.295h-3.803v-11.026h3.803v11.026zm-1.902-12.684c-1.216 0-2.202-.985-2.202-2.203s.986-2.202 2.202-2.202 2.202.985 2.202 2.202-.986 2.203-2.202 2.203zm13.099 12.684h-3.802v-5.37c0-1.281-.023-2.93-1.784-2.93-1.784 0-2.057 1.395-2.057 2.834v5.466h-3.803v-11.026h3.646v1.506h.051c.509-.964 1.751-1.978 3.604-1.978 3.852 0 4.565 2.533 4.565 5.829v5.669z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; 2025 Crest. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
