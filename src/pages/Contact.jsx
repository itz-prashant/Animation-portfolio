import { IoMdMail } from "react-icons/io";
import { FaMobileRetro } from "react-icons/fa6";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div className="mt-24 text-white flex flex-col gap-8">
        <div className="flex items-baseline justify-between mb-5">
            <h1 className="sm:text-5xl text-4xl w-fit shrink-0 font-bold">
              Get In Touch.
            </h1>
            <div className="h-[1.6px] w-full bg-white/30 "></div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="md:w-1/2 w-full flex gap-3 items-center rounded-2xl p-3 bg-light-bg">
                <div className="bg-[#6f39fd] lg:text-5xl text-3xl p-4 rounded-xl">
                    <IoMdMail />
                </div>
                <div className="flex flex-col">
                    <p className="lg:text-xl sm:text-base text-sm text-light uppercase">Email</p>
                    <p className="lg:text-2xl sm:text-lg text-base font-bold">example@gmail.com</p>
                </div>
            </div>
            <div className="md:w-1/2 w-full flex gap-3 items-center rounded-2xl p-3 bg-light-bg">
                <div className="bg-[#6f39fd] lg:text-5xl text-3xl p-4 rounded-xl">
                    <FaMobileRetro />
                </div>
                <div className="flex flex-col">
                    <p className="lg:text-xl sm:text-base text-sm text-light uppercase">Phone</p>
                    <p className="lg:text-2xl sm:text-lg text-base font-bold">+91 xxxxxxxxx</p>
                </div>
            </div>
        </div>
        <div>
            <Form />
        </div>
    </div>
  )
}

export default Contact