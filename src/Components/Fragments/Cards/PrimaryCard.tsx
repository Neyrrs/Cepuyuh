import Image from "next/image";

const PrimaryCard = ({title, description, width, height, icon}) => {
  return (
    <div className="bg-white border-2 w-fit p-4 rounded-md sm:h-50 md:h-35 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Image src={icon || "logo"} alt="Icon" width={width} height={height}/> 
          <h1 className="font-medium sm:base md:text-2xl">{title || "Title"}</h1>
        </div>
        <p className="sm:text-sm md:text-lg text-black sm:w-60 md:w-75">
          {description || 'This is description'}
        </p>
      </div>
    </div>
  );
};

export default PrimaryCard;
