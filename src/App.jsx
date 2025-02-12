import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <div className="bg-[url(./assets/background.png)] object-cover bg-[50%] bg-blend-soft-light bg-dark w-full h-screen overflow-hidden z-0">
      <div className="max-w-4xl mx-auto flex">
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default App
