import PrimaryCard from "@/Components/Fragments/Cards/PrimaryCard";
import ActionCard from "@/Components/Fragments/Cards/ActionCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div className="bg-gray-500 flex-col px-10 justify-center gap-2 flex w-full h-100">
          <h1 className="text-white text-5xl font-semibold">Welcome</h1>
          <h2 className="text-white text-3xl font-medium">
            This is us, Cepuyuh!
          </h2>
        </div>
      </div>
      <div className="flex-wrap h-fit flex gap-x-5 gap-y-8 md:gap-8 px-5">
        {[...Array(4)].map((_, index) => (
          <PrimaryCard key={index} />
        ))}
      </div>
      <div className="flex-wrap flex gap-10 py-10 md:gap-8 bg-[#A9B5DF] h-fit w-full px-5 flex-col">
        <h1 className="text-3xl font-semibold">Our Gallery</h1>
        <div className="w-fit flex flex-wrap sm:gap-2 md:gap-8 gap-y-4">
          {[...Array(5)].map((_, index) => (
          <ActionCard key={index} />
        ))}
        </div>
      </div>
    </div>
  );
}
