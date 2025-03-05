"use client";

import Link from "next/link";
import { Images, Info, Contact } from "lucide-react";

const Sidebar = () => {
  const sidebarContents = [
    { Icon: <Images size={20} />, Content: "Galery", href: "/galery" },
    { Icon: <Info size={20} />, Content: "About", href: "/about" },
    { Icon: <Images size={20} />, Content: "Galery", href: "/galery" },
    { Icon: <Contact size={20} />, Content: "Contact", href: "/contact" },
  ];

  return (
    <div className="absolute bg-white/50 backdrop-blur-sm text-black p-3 rounded-2xl rounded-tr-none right-3 top-0 mt-10">
      <div className="w-40 h-fit flex flex-col gap-y-2">
        {sidebarContents.map((content, i) => (
          <div
            className="hover:translate-x-1 flex-col flex duration-150 ease-in-out"
            key={i}
          >
            <Link href={content.href} className="flex items-center gap-2">
              {content.Icon}
              <p>{content.Content}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
