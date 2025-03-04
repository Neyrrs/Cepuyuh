const PrimaryCard = ({ logo, title, description }) => {
  return (
    <div className="bg-white border-2 w-fit p-4 rounded-sm sm:h-30 md:h-35 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="font-medium">{logo || "Logo"}</h1>
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
