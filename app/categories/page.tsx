import { ImAirplane } from "react-icons/im";

const page = async () => {
  //   let categories;
  //   try {
  //     const results = await fetch(`http://localhost:8080/api/categories`);
  //     categories = await results.json();
  //     console.log(categories);
  //   } catch (error) {
  //     console.log(error);
  //   }
  return (
    <div className=" flex flex-col justify-center items-center h-[99%] bg-lightergreen px-[102px] py-20 mb-24">
      <h1 className="font-semibold text-2xl leading-6 mb-14">Categories</h1>
      <div className="flex flex-wrap justify-center gap-7 max-w-[1262px]">
        <div className="bg-lightgreen py-8 px-12 rounded-lg flex justify-center items-center flex-col gap-6 max-w-72">
          <ImAirplane className="text-thickgreen text-3xl" />
          <span className="font-medium text-[#222222] text-[17px] text-center leading-6">
            Environment & Nature
          </span>
        </div>
        <div className="bg-lightgreen py-8 px-12 rounded-lg flex justify-center items-center flex-col gap-6 max-w-72">
          <ImAirplane className="text-thickgreen text-3xl" />
          <span className="font-medium text-[#222222] text-[17px] text-center leading-6">
            Environment & Nature
          </span>
        </div>
        <div className="bg-lightgreen py-8 px-12 rounded-lg flex justify-center items-center flex-col gap-6 max-w-72">
          <ImAirplane className="text-thickgreen text-3xl" />
          <span className="font-medium text-[#222222] text-[17px] text-center leading-6">
            Environment & Nature
          </span>
        </div>
        <div className="bg-lightgreen py-8 px-12 rounded-lg flex justify-center items-center flex-col gap-6 max-w-72">
          <ImAirplane className="text-thickgreen text-3xl" />
          <span className="font-medium text-[#222222] text-[17px] text-center leading-6">
            Environment & Nature
          </span>
        </div>
        <div className="bg-lightgreen py-8 px-12 rounded-lg flex justify-center items-center flex-col gap-6 max-w-72">
          <ImAirplane className="text-thickgreen text-3xl" />
          <span className="font-medium text-[#222222] text-[17px] text-center leading-6">
            Environment & Nature
          </span>
        </div>
        <div className="bg-lightgreen py-8 px-12 rounded-lg flex justify-center items-center flex-col gap-6 max-w-72">
          <ImAirplane className="text-thickgreen text-3xl" />
          <span className="font-medium text-[#222222] text-[17px] text-center leading-6">
            Environment & Nature
          </span>
        </div>
        <div className="bg-lightgreen py-8 px-12 rounded-lg flex justify-center items-center flex-col gap-6 max-w-72">
          <ImAirplane className="text-thickgreen text-3xl" />
          <span className="font-medium text-[#222222] text-[17px] text-center leading-6">
            Environment & Nature
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
