import AboutMe from "../pages/AboutMe"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Resume from "../pages/Resume"
import Footer from "./Footer"

const Main = () => {
  return (
    <div className=" w-full h-screen lg:w-[850px] md:w-2xl  sm:w-[500px] mx-auto float-right bg-dark-bg overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-green lg:ml-[250px] z-20">
      <div className="mt-5 px-5">
        <section id="home"><Home /></section>
        <section id="about"><AboutMe /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
        <Footer /> 
      </div>
    </div>
  )
}
const Section = ({ id, children }) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center border-b border-gray-700">
      {children}
    </section>
  );
};
export default Main