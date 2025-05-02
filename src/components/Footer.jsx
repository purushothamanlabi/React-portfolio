import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaRss } from 'react-icons/fa';

const socialIcons = [
  { href: '#', label: 'Facebook', icon: '🌐' },
  { href: '#', label: 'Twitter', icon: '🐦' },
  { href: '#', label: 'Instagram', icon: '📸' },
  { href: '#', label: 'YouTube', icon: '▶️' },
  { href: '#', label: 'RSS', icon: '📰' },
];

const footerLinks = [
  'Sitemap',
  'About',
  'Need Help?',
  'Lifehacker Shop',
  'Privacy',
  'Terms of Use',
  'Advertising',
  'Jobs',
];



const Footer = () => {
  return (
    <footer className="bg-[#18191B] text-gray-400 pt-10 pb-4">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex gap-4 mb-6">
          {socialIcons.map((icon, idx) => (
            <a key={idx} href={icon.href} aria-label={icon.label} className="text-2xl hover:text-white transition-colors">
              {icon.label === 'Facebook' && <FaFacebook className="w-6 h-6" />}
              {icon.label === 'Twitter' && <FaTwitter className="w-6 h-6" />}
              {icon.label === 'Instagram' && <FaInstagram className="w-6 h-6" />}
              {icon.label === 'YouTube' && <FaYoutube className="w-6 h-6" />}
              {icon.label === 'RSS' && <FaRss className="w-6 h-6" />}
            </a>
          ))}
        </div>
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
          {footerLinks.map((link, idx) => (
            <a key={idx} href="#" className="hover:text-white transition-colors">{link}</a>
          ))}
        </div>
        {/* Network Icons */}

        {/* Copyright */}
        <div className="text-xs text-center text-gray-500">
          © 2025 G/O Media Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;