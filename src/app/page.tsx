"use client"
import PrimaryCard from "@/Components/Fragments/Cards/PrimaryCard";
import ActionCard from "@/Components/Fragments/Cards/ActionCard";

export default function Home() {
  return (
    <div className="flex py-14 flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div className="landingPage flex-col px-10 justify-center gap-2 flex w-full h-100 md:h-120">
          <div className="bg-gray-600/50 w-fit h-fit p-3 backdrop-blur-md rounded-md">
            <h1 className="text-white text-3xl md:text-5xl font-semibold">Welcome</h1>
            <h2 className="text-white text-2xl md:text-3xl  font-medium">
              This is us, Cepuyuh!
            </h2>
          </div>
        </div>
      </div>
      <div className="flex-wrap h-fit flex gap-x-5 gap-y-8 md:gap-8 px-5">
        {[...Array(4)].map((_, index) => (
          <PrimaryCard key={index} icon={"/globe.svg"} width={25} height={25}/>
        ))}
      </div>
      <div className="flex-wrap flex gap-10 py-10 md:gap-8 bg-white h-fit w-full px-5 flex-col">
        <h1 className="text-3xl font-semibold">Our Gallery</h1>
        <div className="w-fit flex flex-wrap gap-2 md:gap-8 gap-y-4">
          {[...Array(5)].map((_, index) => (
            <ActionCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
