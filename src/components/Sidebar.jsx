import sidebarImg from "../assets/sidebar-img.png";
import { IoMdHome } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { CiAt } from "react-icons/ci";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookSquare, FaRegAddressCard, FaBriefcase  
} from "react-icons/fa";
import { RiFileDownloadLine } from "react-icons/ri";


const Sidebar = () => {
  return (
    <div className="max-w-[249px] w-full h-[100vh] hidden bg-light-bg lg:flex flex-col justify-between overflow-y-scroll [&::-webkit-scrollbar]:w-2">
      <div className="w-full flex flex-col items-center gap-2 justify-between mt-5">
        <div className="w-[210px]">
          <img src={sidebarImg} alt="" className="w-[210px] " />
        </div>
        <h1 className="text-white text-[28px] font-bold">
          Ruchita <span className="font-normal">Sharma</span>
        </h1>
        <p className="text-light">Developer</p>
        <div className="flex items-center gap-3">
          <span className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-bg hover:bg-pink cursor-pointer duration-500 text-white text-2xl">
            <FaLinkedin />
          </span>
          <span className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-bg hover:bg-pink cursor-pointer duration-500 text-white text-2xl">
            <FaFacebookSquare />
          </span>
          <span className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-bg hover:bg-pink cursor-pointer duration-500 text-white text-2xl">
            <FaInstagramSquare />
          </span>
        </div>
      </div>

      <div className="mt-8">
        <ul className="flex flex-col text-white">
          <li className="flex gap-2 items-center border-t border-light p-3">
            <span className="text-2xl"><IoMdHome /></span>
            <h5 className="text-light">Home</h5>
          </li>
          <li className="flex gap-2 items-center border-t border-light p-3">
            <span className="text-2xl"><AiOutlineUser /></span>
            <h5 className="text-light">About</h5>
          </li>
          <li className="flex gap-2 items-center border-t border-light p-3">
            <span className="text-2xl"><FaRegAddressCard /></span>
            <h5 className="text-light">Resume</h5>
          </li>
          <li className="flex gap-2 items-center border-t border-light p-3">
            <span className="text-2xl"><FaBriefcase /></span>
            <h5 className="text-light">Portfolio</h5>
          </li>
          <li className="flex gap-2 items-center border-t border-light p-3">
            <span className="text-2xl font-bold"><CiAt /></span>
            <h5 className="text-light">Contact</h5>
          </li>
        </ul>
      </div>

      <div className="h-[120px] py-3 px-2">
        <div className="w-full bg-dark-bg flex rounded-full items-center relative h-[60px] px-3 hover:bg-pink duration-1000 group">
          <div className="absolute w-12 h-12 rounded-full flex items-center justify-center bg-pink group-hover:bg-white group-hover:text-pink cursor-pointer text-white text-3xl left-3 group-hover:right-3 duration-500 ">
              <RiFileDownloadLine />
          </div>
          <p className="text-white right-3 group-hover:left-3  absolute">Download CV</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
