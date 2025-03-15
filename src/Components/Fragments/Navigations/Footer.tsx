"use client";
import React from "react";
import { Mail, Instagram, Github } from "lucide-react";
import useBreakpoint from "@/Hooks/useBreakpoint";
import Link from "next/link";

const Footer = () => {
  const width = useBreakpoint();
  const isMobile = width < 768;
  const linkArray = [
    { url: "https://www.instagram.com/dwonvy/", username: "Dwonvy" },
    { url: "https://www.instagram.com/rrafifv", username: "rrafifv" },
    { url: "https://www.instagram.com/rhmsyaf", username: "rhmsyaf" },
  ];

  return (
    <footer className="w-full bg-black text-white py-10 px-5">
      <div className="max-w-[70rem] flex flex-col gap-8">
        <div
          className={`flex ${
            isMobile
              ? "flex-col items-center text-center gap-6"
              : "justify-between"
          }`}
        >
          <div className="flex flex-col gap-3">
            <p className="text-xl font-bold">Cepuyuh</p>
            <p className="text-sm text-gray-400">
              Friendship site`s for Cepuyuh
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xl font-bold">Quick Links</p>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Gallery
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              About
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Letters
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xl font-bold">Contact</p>
            <a
              href="https://github.com/Neyrrs"
              className="flex items-center gap-2 text-gray-400 hover:text-white"
            >
              <Github size={18} />
              <p className="text-sm"> Neyrrs </p>
            </a>
            <a
              href="mailto:neyrworks@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-white"
            >
              <Mail size={18} />
              <p className="text-sm"> neyrworks@gmail.com </p>
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xl font-bold">Follow Us</p>
            <div className="flex gap-4">
              <div className="flex gap-4 flex-col">
                {linkArray.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center gap-2 hover:text-white text-gray-400"
                  >
                    <Instagram size={18} />
                    <p className="text-sm"> {link.username} </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-5">
        © 2025 Neyr. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
