import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const footerColumns = [
  {
    heading: 'Main',
    links: [
      { label: 'Home', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Project Single', href: '#' },
    ],
  },
  {
    heading: 'Others',
    links: [
      { label: 'Services', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Blog single', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    heading: 'Utility Pages',
    links: [
      { label: 'Style Guide', href: '#' },
      { label: 'Licenses', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Password Protected', href: '#' },
      { label: '404 Page', href: '#' },
    ],
  },
  {
    heading: 'Follow us',
    links: [
      { label: 'Facebook', href: '#', icon: <FaFacebook className="inline-block mr-3 w-5 h-5" /> },
      { label: 'Instagram', href: '#', icon: <FaInstagram className="inline-block mr-3 w-5 h-5" /> },
      { label: 'Twitter', href: '#', icon: <FaTwitter className="inline-block mr-3 w-5 h-5" /> },
      { label: 'LinkedIn', href: '#', icon: <FaLinkedin className="inline-block mr-3 w-5 h-5" /> },
      { label: 'Youtube', href: '#', icon: <FaYoutube className="inline-block mr-3 w-5 h-5" /> },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12">
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4 text-left">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8">
          Let's work together<br />
          and build cool things!
        </h2>
        <a
          href="#"
          className="inline-block bg-[#A259FF] hover:bg-[#8e3fff] text-white font-medium text-lg px-8 py-4 rounded-md mb-16 transition-colors duration-200 shadow-lg"
        >
          Get Started <span className="ml-2">→</span>
        </a>
      </div>
      {/* Footer Links Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-12">
        {footerColumns.map((col, idx) => (
          <div key={col.heading}>
            <h3 className="font-bold mb-4 text-lg">{col.heading}</h3>
            <ul className="space-y-2">
              {col.links.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:underline hover:text-[#A259FF] transition-colors flex items-center">
                    {link.icon && link.icon}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
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