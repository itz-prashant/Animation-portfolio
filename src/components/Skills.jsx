import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io5";
import { RiNodejsLine } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";


export const Skills = () => {
  return (
    <div className="mt-24 text-white flex flex-col gap-8 w-full">
        <div className="flex items-baseline gap-4 justify-between mb-5">
            <h1 className="sm:text-5xl text-4xl w-fit shrink-0 font-bold">Skills.</h1>
            <div className="h-[1.6px] w-full bg-white/30 "></div>
        </div>
        <div className="w-full grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 items-center justify-center gap-8">
            <div className="h-20 w-48 flex items-center p-6 gap-2 rounded-full border-2 border-orange-600 bg-orange-600/20">
                <div className="text-4xl"><ImHtmlFive /></div>
                <p className="text-4xl font-bold">HTML</p>
            </div>
            <div className="h-20 w-48 flex items-center p-6 gap-3 rounded-full border-2 border-blue-600 bg-blue-600/20">
                <div className="text-4xl"><IoLogoCss3 /></div>
                <p className="text-4xl font-bold">CSS</p>
            </div>
            <div className="h-20 gap-3 w-48 flex items-center p-6 rounded-full border-2 border-pink bg-pink/20">
                <div className="text-6xl"><SiPhp /></div>
                <p className="text-4xl font-bold">PHP</p>
            </div>
            <div className="h-20 gap-3 w-48 flex items-center p-6 rounded-full border-2 border-yellow bg-yellow/20">
                <div className="text-6xl"><RiNodejsLine /></div>
                <p className="text-4xl font-bold">JS</p>
            </div>
            <div className="h-20 gap-3 w-48 flex items-center p-6 rounded-full border-2 border-green bg-green/20">
                <div className="text-4xl"><TbBrandMysql /></div>
                <p className="text-3xl font-bold">MYSQL</p>
            </div>
        </div>
    </div>
  )
}
