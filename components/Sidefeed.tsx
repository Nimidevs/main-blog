import Image from "next/image";
import author_placeholder from "../assets/author_placeholder.png";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";

const Sidefeed = () => {
  return (
    <div className="flex flex-col gap-14">
      <div>
        <h1 className="font-semibold text-xl mb-10">
          <span className="bg-thickgreen text-white px-1">Top</span> Authors
        </h1>
        <div className="flex flex-col gap-7">
          <div className="flex gap-6 items-center">
            <Image src={author_placeholder} alt="author's image"></Image>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <h3 className="autho_name font-semibold text-base leading-[17px] text-[#222222]">
                  Andress Rasell
                </h3>
                <span className="author_doings font-light text-xs leading-[18px] max-w-[256px]">
                  Blogger, activist, content creator, part time designer at:
                  www.gethugothemes.com
                </span>
              </div>
              <div className="authors_socials flex gap-2 items-center">
                <a
                  href=""
                  className="border-2 border-[#00aaa1] bg-[#00aaa1] rounded-md text-white py-[0.3rem] px-[0.2rem] text-sm"
                >
                  <TiSocialTwitter />
                </a>
                <a
                  href=""
                  className="border-2 border-[#c4c4c4] rounded-md text-[#777777] py-[0.3rem] px-[0.2rem] text-sm"
                >
                  <TiSocialFacebook />
                </a>
                <a
                  href=""
                  className="border-2 border-[#c4c4c4] rounded-md text-[#777777] py-[0.3rem] px-[0.2rem] text-sm"
                >
                  <RiInstagramFill />
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <Image src={author_placeholder} alt="author's image"></Image>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <h3 className="autho_name font-semibold text-base leading-[17px] text-[#222222]">
                  Andress Rasell
                </h3>
                <span className="author_doings font-light text-xs leading-[18px] max-w-[256px]">
                  Blogger, activist, content creator, part time designer at:
                  www.gethugothemes.com
                </span>
              </div>
              <div className="authors_socials flex gap-2 items-center">
                <a
                  href=""
                  className="border-2 border-[#00aaa1] bg-[#00aaa1] rounded-md text-white py-[0.3rem] px-[0.2rem] text-sm"
                >
                  <TiSocialTwitter />
                </a>
                <a
                  href=""
                  className="border-2 border-[#c4c4c4] rounded-md text-[#777777] py-[0.3rem] px-[0.2rem] text-sm"
                >
                  <TiSocialFacebook />
                </a>
                <a
                  href=""
                  className="border-2 border-[#c4c4c4] rounded-md text-[#777777] py-[0.3rem] px-[0.2rem] text-sm"
                >
                  <RiInstagramFill />
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <Image src={author_placeholder} alt="author's image"></Image>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <h3 className="autho_name font-semibold text-base leading-[17px] text-[#222222]">
                  Andress Rasell
                </h3>
                <span className="author_doings font-light text-xs leading-[18px] max-w-[256px]">
                  Blogger, activist, content creator, part time designer at:
                  www.gethugothemes.com
                </span>
              </div>
              <div className="authors_socials flex gap-2 items-center">
                <a
                  href=""
                  className="border-2 border-[#00aaa1] bg-[#00aaa1] rounded-md text-white py-[0.3rem] px-[0.2rem] text-sm"
                >
                  <TiSocialTwitter />
                </a>
                <a
                  href=""
                  className="border-2 border-[#c4c4c4] rounded-md text-[#777777] py-[0.3rem] px-[0.2rem] text-sm"
                >
                  <TiSocialFacebook />
                </a>
                <a
                  href=""
                  className="border-2 border-[#c4c4c4] rounded-md text-[#777777] py-[0.3rem] px-[0.2rem] text-sm"
                >
                  <RiInstagramFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-thickgreen text-white py-14 px-5 relative">
        <span className="absolute top-2 right-3 text-xs">Ad</span>
        <div className="mb-9">
          <h2 className="text-xl font-semibold mb-2 max-w-[222px]">
            Want To Travel Sikkim By Car?
          </h2>
          <p className="text-sm font-normal max-w-[284px]">
            Did you come here for something in particular or just general
            Riker-bashing? And blowing into
          </p>
        </div>
        <a href="https://affiliate-link-example.com" target="_blank">
          <button className="bg-white text-thickgreen px-4 py-2 rounded font-normal text-base leading-4 hover:bg-gray-100">
            Visit Us
          </button>
        </a>
      </div>

      <div>
        <h1 className="font-semibold text-xl mb-10">
          <span className="bg-thickgreen text-white px-1">Categories</span>
        </h1>

        <div className="flex flex-col gap-4">
          <div className="border-b border-[#D1E7E5] flex items-center justify-between pb-2">
            <span className="font-medium text-[15px] leading-[22.5px]">
              Lifestyle
            </span>
            <span className="font-medium text-[15px] leading-[22.5px]">09</span>
          </div>
          <div className="border-b border-[#D1E7E5] flex items-center justify-between pb-2">
            <span className="font-medium text-[15px] leading-[22.5px]">
              Healthcare
            </span>
            <span className="font-medium text-[15px] leading-[22.5px]">09</span>
          </div>
          <div className="border-b border-[#D1E7E5] flex items-center justify-between pb-2">
            <span className="font-medium text-[15px] leading-[22.5px]">
              Technology
            </span>
            <span className="font-medium text-[15px] leading-[22.5px]">19</span>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-xl mb-10">
          <span className="bg-thickgreen text-white px-1">Today&apos;s</span>{" "}
          Update
        </h1>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-lightergreen py-4 rounded-lg text-center">
            <p className="text-2xl font-semibold text-thickgreen">14</p>
            <p className="font-normal text-[15px] leading-[22.5px]">
              New Posts
            </p>
          </div>

          <div className="bg-lightergreen py-4 rounded-lg text-center">
            <p className="text-2xl  font-semibold text-thickgreen">480</p>
            <p className="font-normal text-[15px] leading-[22.5px]">
              Total Visitors
            </p>
          </div>

          <div className="bg-lightergreen py-4 rounded-lg text-center">
            <p className="text-2xl   font-semibold text-thickgreen">29</p>
            <p className="font-normal text-[15px] leading-[22.5px]">
              New Subscribers
            </p>
          </div>

          <div className="bg-lightergreen py-4 rounded-lg text-center">
            <p className="text-2xl font-semibold text-thickgreen">138</p>
            <p className="font-normal text-[15px] leading-[22.5px]">
              Blog Read
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-xl mb-10">
          <span className="bg-thickgreen text-white px-1">Search</span> With
          Tags
        </h1>

        <div className="flex flex-wrap gap-3">
          <button className="py-2 px-4 rounded font-normal text-[15px] leading-[15px] bg-transparent border border-[#C4C4C4] text-[#666666]">
            Travel
          </button>
          <button className="py-2 px-4 rounded font-normal text-[15px] leading-[15px] bg-transparent border border-[#C4C4C4] text-[#666666]">
            Lifestyle
          </button>
          <button className="py-2 px-4 rounded font-normal text-[15px] leading-[15px] bg-transparent border border-[#C4C4C4] text-[#666666]">
            Fashion
          </button>
          <button className="py-2 px-4 rounded font-normal text-[15px] leading-[15px] bg-transparent border border-[#C4C4C4] text-[#666666]">
            Technology
          </button>
          <button className="py-2 px-4 rounded font-normal text-[15px] leading-[15px] bg-transparent border border-[#C4C4C4] text-[#666666]">
            Buisness
          </button>
          <button className="py-2 px-4 rounded font-normal text-[15px] leading-[15px] bg-transparent border border-[#C4C4C4] text-[#666666]">
            Design
          </button>
          <button className="py-2 px-4 rounded font-normal text-[15px] leading-[15px] bg-transparent border border-[#C4C4C4] text-[#666666]">
            Health
          </button>
          <button className="py-2 px-4 rounded font-normal text-[15px] leading-[15px] bg-transparent border border-[#C4C4C4] text-[#666666]">
            Food
          </button>
          <button className="py-2 px-4 rounded font-normal text-[15px] leading-[15px] bg-transparent border border-[#C4C4C4] text-[#666666]">
            Art
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidefeed;
