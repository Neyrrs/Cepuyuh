import Image from "next/image";
import React from "react";

interface PrimaryCardProps {
  title?: string;
  description?: string;
  width: number;
  height: number;
  icon: string;
}

const PrimaryCard: React.FC<PrimaryCardProps> = ({ 
  title = "Title", 
  description = "This is description", 
  width, 
  height, 
  icon 
}) => {
  return (
    <div className="bg-white border-2 w-fit p-4 rounded-md sm:h-50 md:h-35 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Image src={icon} alt="Icon" width={width} height={height} /> 
          <h1 className="font-medium sm:base md:text-2xl">{title}</h1>
        </div>
        <p className="sm:text-sm md:text-lg text-black sm:w-60 md:w-75">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PrimaryCard;
