import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-neutral-950 to-neutral-600 text-white px-6 py-8 md:px-12 lg:px-20">
      <div className="flex flex-wrap justify-between gap-8 mb-6">
        {/* Company Info */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-2xl font-extrabold mb-4 text-blue-400">MGC</h3>
          <p className="text-sm leading-relaxed text-neutral-300">
            Minam Group of Companies is a visionary conglomerate dedicated to pioneering advancements across diverse industries. With a relentless focus on innovation and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-2xl font-extrabold mb-4 text-blue-400">Quick Links</h3>
          <ul className='flex flex-col gap-3 text-sm'>
            <li>
              <Link href="/" className="hover:text-blue-400 transition-transform transform hover:scale-105">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition-transform transform hover:scale-105">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition-transform transform hover:scale-105">Contact</Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-blue-400 transition-transform transform hover:scale-105">Team</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-2xl font-extrabold mb-4 text-blue-400">Contact Us</h3>
          <address className="not-italic text-sm leading-relaxed text-neutral-300">
            <p className="mb-2">L-352, Sector 4, N.Karachi.</p>
            <p className="mb-2">R-1586, Overseas Block, North town Residency, Karachi.</p>
            <p className="mb-2">
              Email: <Link href="mailto:minamrahman727@gmail" className="text-blue-400 hover:underline">minamrahman727@gmail.com</Link>
            </p>
            <p>
              Phone: <Link href="tel:+923336928926" className="text-blue-400 hover:underline">(+92) 336-9289269</Link>
            </p>
          </address>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-neutral-600 pt-6 text-sm text-center">
        <p className="text-neutral-300">© 2024 MGC PVT LTD. All rights reserved.</p>
        <p className="text-neutral-400 mt-1 italic">Software by Syed Minam ur Rehman</p>
      </div>
    </footer>
  );
};

export default Footer;
