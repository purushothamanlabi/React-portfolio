import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/purushothaman-d-32b786250', icon: FaLinkedin },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100069839256472', icon: FaFacebook },
  { label: 'Instagram', href: 'https://instagram.com/purushothaman_abi_?igshid=OGY3MTU3OGY1Mw==', icon: FaInstagram },
  { label: 'Twitter', href: 'https://x.com/purushoth_abi', icon: FaTwitter },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12">
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
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
                  <li key={link.label} className="w-[120px]">
                    <a 
                      href={link.href} 
                      className="hover:text-[#A259FF] transition-colors flex items-center gap-3 group"
                      title={link.label}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-gray-300 group-hover:text-[#A259FF] transition-colors">
                        {link.label}
                      </span>
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
          Design by purushothaman Abi
        </div>
        <div>
          purushothamand.dev@gmail.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;