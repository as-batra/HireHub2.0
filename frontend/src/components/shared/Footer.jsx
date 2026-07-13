import React from "react";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Hunt</h2>
            <p className="text-sm">© 2026 Your Company. All rights reserved.</p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://x.com/_Arshjot_Singh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
              aria-label="X"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/arshjot-singh-a4951a24b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/as-batra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
