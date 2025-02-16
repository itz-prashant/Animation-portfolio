import AboutMe from "../pages/AboutMe"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Resume from "../pages/Resume"
import Footer from "./Footer"

const Main = () => {
  return (
    <div className=" w-full h-screen lg:w-[850px] md:w-2xl  sm:w-[500px] mx-auto float-right bg-dark-bg overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-green lg:ml-[250px] z-20">
      <div className="mt-5 px-5">
          <Home />
          <AboutMe />
          <Resume />
          <Contact />
          <Footer />
      </div>
    </div>
  )
}

export default Main