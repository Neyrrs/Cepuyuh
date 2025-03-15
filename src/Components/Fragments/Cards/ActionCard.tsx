import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import useBreakpoint from "@/Hooks/useBreakpoint";

interface ActionCardProps {
  image: string;
  judul?: string;
  description?: string;
}

const ActionCard: React.FC<ActionCardProps> = ({
  image,
  judul = "Judul",
  description = "Description",
}) => {

  const breakPoint = useBreakpoint();

  return (
    <div className="border-2 border-black bg-white pb-3 rounded-md h-fit gap-5">
      <div className={`h-35 md:h-65 w-75 bg-gray-400`}>
        <img src={image} alt="Gallery" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col px-3 py-1 gap-y-1 w-45 md:w-75">
        <h1 className="text-base md:text-2xl">{judul}</h1>
        <p className="text-sm md:text-base">{description}</p>
      </div>
      <div className="px-3 flex flex-col justify-end">
        <Link
          href={"/Galery"}
          className={`flex items-center gap-1 transform duration-150 ease-in-out text-right border-1 border-white bg-[#143D60] w-fit rounded-sm
            text-white p-1.5 md:p-1.5 text-xs md:text-sm`}
        >
          <p>More</p>
          <ArrowRight size={breakPoint >= 768 ? 20 : 15} />
        </Link>
      </div>
    </div>
  );
};

export default ActionCard;
