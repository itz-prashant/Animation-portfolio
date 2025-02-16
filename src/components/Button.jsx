
const Button = ({text, color}) => {
  return (
    <button className={`text-dark py-3 px-5 min-w-[150px] w-fit flex justify-center items-center  ${color == "green"? "bg-green": "bg-yellow"} ${text == "View Work" || text ==  "Contact" ? "xsm:text-xl text-base": "text-xl"} rounded-full relative overflow-hidden group cursor-pointer`}>
        <p className="z-[100] group-hover:text-white duration-500">{text}</p>
        <div className="absolute right-0 left-0 -top-15 bg-pink h-13 group-hover:top-0 duration-500"></div>
    </button>
  )
}

export default Button