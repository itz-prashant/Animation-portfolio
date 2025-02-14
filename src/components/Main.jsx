import Home from "../pages/Home"

const Main = () => {
  return (
    <div className="w-full h-screen lg:w-[850px] md:w-2xl  sm:w-[500px] mx-auto float-right bg-dark-bg overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-green">
      <div className="mt-5 px-5">
          <Home />
      </div>
    </div>
  )
}

export default Main