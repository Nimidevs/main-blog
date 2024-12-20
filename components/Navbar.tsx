import Image from "next/image";
import Logo from "../assets/Logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import write_icon from "../assets/write_icon.png";
import search_icon from "../assets/search_icon.png";
import Themebutton from "./Themebutton";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around bg-lightgreen py-3 text-textdark">
      <div>
        <ul className="flex items-center gap-10 font-medium text-[15px]">
          <li className="flex items-center">
            Homepages <MdOutlineKeyboardArrowDown />
          </li>
          <li>About</li>
          <li className="flex items-center">
            Categories <MdOutlineKeyboardArrowDown />
          </li>
          <li className="flex items-center">
            Pages <MdOutlineKeyboardArrowDown />
          </li>
        </ul>
      </div>
      <Image src={Logo} alt="Logo" width={119} height={27} priority={true}></Image>
      <div className="flex items-center gap-10">
        <button>
          <Image src={search_icon} alt="Logo"></Image>
        </button>
        <button>
          <Image src={write_icon} alt="Logo"></Image>
        </button>
        <span className="font-medium text-[15px]">Contact</span>
        <Themebutton />
      </div>
    </nav>
  );
};

export default Navbar;
