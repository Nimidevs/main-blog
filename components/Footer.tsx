import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from "next/link";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-lightergreen px-[102px] pt-[70px] pb-5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-6">
          <Image
            src={Logo}
            alt="Logo"
            width={119}
            height={27}
            priority={true}
          ></Image>
          <p className="max-w-96 font-normal text-[15px] leading-5 text-[#555555]">
            At The Culture, we believe every reader deserves a story that speaks
            to them. Whether you&apos;re exploring new perspectives, diving into
            captivating narratives, or staying informed, our platform is your
            gateway to discovery. Join our community of curious minds, and let
            the stories you read inspire, connect, and resonate. Your experience
            matters here—read on!
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg text-[#222222]">Blogs</h3>
          <ul className="flex flex-col gap-4">
            <li className="font-normal text-[15px] leading-3 text-[#555555]">
              <Link href="">Travel</Link>
            </li>
            <li className="font-normal text-[15px] leading-3 text-[#555555]">
              <Link href="">Technology</Link>
            </li>
            <li className="font-normal text-[15px] leading-3 text-[#555555]">
              <Link href="">Lifestyle</Link>
            </li>
            <li className="font-normal text-[15px] leading-3 text-[#555555]">
              <Link href="">Buisness</Link>
            </li>
            <li className="font-normal text-[15px] leading-3 text-[#555555]">
              <Link href="">Fashion</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg text-[#222222]">Quick Links</h3>
          <ul className="flex flex-col gap-4">
            <li className="font-normal text-[15px] leading-3 text-[#555555]">
              <Link href="/faq">FAQ</Link>
            </li>
            <li className="font-normal text-[15px] leading-3 text-[#555555]">
              <Link href="/tandc">Terms & Conditions</Link>
            </li>
            <li className="font-normal text-[15px] leading-3 text-[#555555]">
              <Link href="/support">Support</Link>
            </li>
            <li className="font-normal text-[15px] leading-3 text-[#555555]">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-lg text-[#222222]">
              Subscribe For Newsletter
            </h3>
            <div className="flex items-center max-w-md rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 p-3 bg-[#DFF1F0] text-gray-600 placeholder-gray-400 focus:outline-none placeholder:text-[15px]"
              />
              <button className="p-3 bg-thickgreen text-white rounded-none text-[15px]">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-lg text-[#222222]">Follow On:</h3>
            <div className=" flex gap-4">
              <a
                href=""
                className="border-2 border-[#00aaa1] bg-[#00aaa1] rounded-md text-white py-[0.1rem] px-[0.2rem] text-lg"
              >
                <TiSocialTwitter />
              </a>
              <a
                href=""
                className="border-2 border-[#777777] rounded-md text-[#777777] py-[0.1rem] px-[0.2rem] text-lg"
              >
                <TiSocialFacebook />
              </a>
              <a
                href=""
                className="border-2 border-[#777777] rounded-md text-[#777777] py-[0.1rem] px-[0.2rem] text-lg"
              >
                <FaPinterest />
              </a>
              <a
                href=""
                className="border-2 border-[#777777] rounded-md text-[#777777] py-[0.1rem] px-[0.2rem] text-base"
              >
                <RiInstagramFill />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-[#d1e7e5] mt-10 mb-6"></div>

      <div className="text-center font-normal text-xs leading-4 text-[#555555]">
        copyright &copy; 2024 NimiDevs
      </div>
    </footer>
  );
};

export default Footer;
