import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
         
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope /> rosalinnayak063@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt /> Bhubaneswar, India
            </p>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-purple-500 dark:hover:text-purple-300 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-purple-500 dark:hover:text-purple-300 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-purple-500 dark:hover:text-purple-300 transition"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#service"
                  className="hover:text-purple-500 dark:hover:text-purple-300 transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#project"
                  className="hover:text-purple-500 dark:hover:text-purple-300 transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-purple-500 dark:hover:text-purple-300 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Me</h2>
            <div className="flex justify-center md:justify-start gap-4 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:rosalinnayak063@gmail.com"
                className="hover:text-red-500 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Rosalin Nayak. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;