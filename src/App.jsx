import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="bg-[url(./assets/background.png)] object-cover bg-[50%] bg-blend-soft-light bg-dark w-full h-screen  z-0 font-display">
      <div className="max-w-[1100px] mx-auto flex px-5 sm:px-0">
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default App
