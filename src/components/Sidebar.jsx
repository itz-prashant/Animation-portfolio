import sidebarImg from "../assets/sidebar-img.png";
import { IoMdHome } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { CiAt } from "react-icons/ci";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookSquare, FaRegAddressCard, FaBriefcase  
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="max-w-[249px] w-full h-screen bg-light-bg flex flex-col justify-between">
      <div className="w-full flex flex-col items-center gap-2 justify-between mt-5">
        <div className="w-[210px]">
          <img src={sidebarImg} alt="" className="w-[210px] " />
        </div>
        <h1 className="text-white text-[28px] font-bold">
          Ruchita <span className="font-normal">Sharma</span>
        </h1>
        <p className="text-light">Developer</p>
        <div className="flex items-center gap-3">
          <span className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-bg hover:bg-pink cursor-pointer duration-500 text-white text-xl p-1">
            <FaLinkedin />
          </span>
          <span className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-bg hover:bg-pink cursor-pointer duration-500 text-white text-xl p-1">
            <FaFacebookSquare />
          </span>
          <span className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-bg hover:bg-pink cursor-pointer duration-500 text-white text-xl p-1">
            <FaInstagramSquare />
          </span>
        </div>
      </div>

      <div>
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

      <div></div>
    </div>
  );
};

export default Sidebar;
