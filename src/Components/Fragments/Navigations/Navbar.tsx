"use client";

import { MenuIcon } from "lucide-react";
import useBreakpoint from "@/Hooks/useBreakpoint";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";

const Navbar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const width = useBreakpoint();

  const handleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <nav className="bg-[#143D60] fixed w-full z-50">
      <div className="py-4 px-6 flex text-white items-center justify-center">
        <div className="flex-3">
          <Link href={"/"}>
            <p className=" text-2xl font-medium">Cepuyuh </p>
          </Link>
        </div>
        {(width >= 768 && (
          <div className="px-4 flex-1 text-lg flex justify-around gap-5">
            <p>Galery</p>
            <p>About</p>
            <p>Letters</p>
            <p>Contact</p>
          </div>
        )) ||
          (width <= 768 && (
            <>
              <button
                className="cursor-pointer relative"
                onClick={handleSidebar}
              >
                <MenuIcon size={30} />
              </button>
              <div
                className={`${
                  sidebarActive ? "translate-x-0" : "translate-x-80"
                } ease-in-out duration-300 transform`}
              >
                <Sidebar />
              </div>
            </>
          ))}
      </div>
    </nav>
  );
};

export default Navbar;
