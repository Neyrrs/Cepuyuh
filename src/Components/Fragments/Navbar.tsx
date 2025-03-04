import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#003092] fixed w-full">
      <div className="py-4 px-6 flex text-white items-center justify-center">
        <div className="flex-3">
          <p className=" text-2xl font-medium">Cepuyuh </p>
        </div>
        <div className="px-4 flex-1 text-lg flex justify-around gap-5">
            <p>Galery</p>
            <p>About</p>
            <p>Galery</p>
            <p>Contact</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
