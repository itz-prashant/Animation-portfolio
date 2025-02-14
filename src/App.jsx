import { useState } from "react";
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import { RiMenuFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

function App() {

  const [showSidebar, setShowSidebar ] = useState(false)

  return (
    <div className="bg-[url(./assets/background.png)] object-cover bg-[50%] bg-blend-soft-light bg-dark w-full h-screen font-display relative z-0">
      <button onClick={()=> setShowSidebar(!showSidebar)} className="absolute w-12 h-12 rounded-full flex items-center justify-center lg:hidden bg-white/30 cursor-pointer text-white text-3xl right-3 md:right-15 top-5  duration-500 z-[100]">
          {showSidebar ? <IoMdClose /> : <RiMenuFill />}
      </button>
      <div className="max-w-[1100px] mx-auto flex px-5 sm:px-0 relative z-10">
        <Sidebar showSidebar={showSidebar}/>
        <Main />
      </div>
    </div>
  )
}

export default App
