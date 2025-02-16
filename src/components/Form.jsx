import Button from "./Button"


const Form = () => {
  return (
    <form className="w-full grid xsm:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex flex-col gap-10 md:text-xl text-base">
            <div className="flex flex-col gap-2">
                <label className="text-light">NAME</label>
                <input type="text" name="name" id="" placeholder="Your Name" className="text-white font-bold outline-none border-b focus:border-green placeholder:text-white"/>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-light">Subject</label>
                <input type="text" name="subject" id="" placeholder="Your Subject" className="text-white font-bold outline-none border-b focus:border-green placeholder:text-white"/>
            </div>
        </div>
        <div className="flex flex-col gap-10 md:text-xl text-base">
            <div className="flex flex-col gap-2">
                <label className="text-light">Email</label>
                <input type="email" name="email" id="" placeholder="Your Email" className="text-white font-bold outline-none border-b focus:border-green placeholder:text-white"/>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-light">Message</label>
                <input type="text" name="message" id="" placeholder="Your Message" className="text-white font-bold outline-none border-b focus:border-green placeholder:text-white"/>
            </div>
        </div>
        <Button text={"Submit Now"} color={"green"}/>
    </form>
  )
}

export default Form