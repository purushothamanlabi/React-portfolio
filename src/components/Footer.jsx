import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  { label: 'Facebook', href: '#', icon: FaFacebook },
  { label: 'Instagram', href: '#', icon: FaInstagram },
  { label: 'Twitter', href: '#', icon: FaTwitter },
  { label: 'LinkedIn', href: '#', icon: FaLinkedin },
  { label: 'Youtube', href: '#', icon: FaYoutube },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12">
      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Side - CTA */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-8">
              Let's work together<br />
              and build cool things!
            </h2>
          </div>

          {/* Right Side - Social Links */}
          <div className="md:w-1/2 text-left">
            <h3 className="font-bold mb-6 text-xl">Follow us</h3>
            <ul className="flex flex-wrap gap-6">
              {socialLinks.map(link => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="hover:text-[#A259FF] transition-colors flex items-center"
                      title={link.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 px-4 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto text-sm text-gray-400">
        <div className="mb-2 md:mb-0">
          Design by <a href="#" className="underline hover:text-[#A259FF]">Quix Studio</a>
        </div>
        <div>
          2024@Quix™ Studio. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;