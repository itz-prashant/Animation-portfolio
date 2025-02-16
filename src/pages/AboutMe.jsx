
const AboutMe = () => {
  return (
    <div className="mt-20 text-white flex flex-col gap-8">
        <div className="flex items-baseline gap-4 justify-between">
            <h1 className="sm:text-5xl text-4xl w-fit shrink-0 font-bold">About Me.</h1>
            <div className="h-[1.6px] w-full bg-white/30 "></div>
        </div>
        <p className="sm:text-xl text-lg text-light">Hi, my name is <span className="text-white font-semibold">Ruchita Sharma</span> and I began using WordPress when first began. I've spent most of my waking hours for the last ten years designing, programming and operating WordPress sites go beyond with exclusive designer. Apart from this I love to travel, mentor designers, review design portfolios & read books on everything related to design. I have also given design talks in various educational institutions. So I love creating creative content, and you can find most of my works here.</p>
        <div className="flex flex-col gap-10">
            <div className="flex text-lg">
                <span className="text-light w-[100px] xsm:w-[130px] shrink">Name</span>
                <div className="flex gap-3">
                    <span className="text-light">:</span>
                    <span className="font-semibold">Ruchita Sharma</span>
                </div>
            </div>
            <div className="flex text-lg">
                <span className="text-light w-[100px] xsm:w-[130px] shrink">Nationality</span>
                <div className="flex gap-3">
                    <span className="text-light">:</span>
                    <span className="font-semibold">Indian</span>
                </div>
            </div>
            <div className="flex text-lg">
                <span className="text-light w-[100px] xsm:w-[130px] shrink">Phonw</span>
                <div className="flex gap-3">
                    <span className="text-light">:</span>
                    <span className="font-semibold">+91 XXXXXXXXXX</span>
                </div>
            </div>
            <div className="flex text-lg">
                <span className="text-light w-[100px] xsm:w-[130px] shrink">Email</span>
                <div className="flex gap-3">
                    <span className="text-light">:</span>
                    <span className="font-semibold">hello@gmail.com</span>
                </div>
            </div>
            <div className="flex text-lg">
                <span className="text-light w-[100px] xsm:w-[130px] shrink">Experience</span>
                <div className="flex gap-3">
                    <span className="text-light">:</span>
                    <span className="font-semibold">+2 Year</span>
                </div>
            </div>
            <div className="flex text-lg">
                <span className="text-light w-[100px] xsm:w-[130px] shrink">Skype</span>
                <div className="flex gap-3">
                    <span className="text-light">:</span>
                    <span className="font-semibold">hello@examole</span>
                </div>
            </div>
            <div className="flex text-lg">
                <span className="text-light w-[100px] xsm:w-[130px] shrink">Language</span>
                <div className="flex gap-3">
                    <span className="text-light">:</span>
                    <span className="font-semibold">English / Hindi</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe