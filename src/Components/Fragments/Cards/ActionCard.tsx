import React from "react";

interface ActionCardProps {
  image: string;
  judul?: string;
  description?: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ 
  image, 
  judul = "Judul", 
  description = "Description" 
}) => {
  return (
    <div className="border-2 border-black bg-white pb-10 rounded-md h-fit gap-5">
      <div className="h-40 md:h-65 w-full bg-gray-400">
        <img src={image} alt="Gallery" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col px-3 py-3 w-55 md:w-75">
        <h1 className="text-base md:text-2xl">{judul}</h1>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default ActionCard;
