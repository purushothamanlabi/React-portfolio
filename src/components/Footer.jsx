import React from 'react';

const Footer = () => {
  return (
    <footer className="relative text-white bg-[#0B0C0F] overflow-hidden">
      <section className="relative overflow-hidden py-10 px-4">
        <div className="container mx-auto relative">
          {/* Footer content */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-800 flex-wrap gap-4">
            <p className="text-gray-400">© 2025 All Rights Reserved</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;