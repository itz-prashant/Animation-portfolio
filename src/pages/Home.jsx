import homeImg from '../assets/home-img.png'
import designer from '../assets/designer.png'
import flower from '../assets/flower.png'
import Button from '../components/Button'


const Home = () => {
  return (
    <div id='home' className="flex pt-10 lg:flex-row flex-col items-center gap-7">
        <div className="flex flex-col gap-4 lg:w-1/2 w-full items-center lg:items-start justify-between">
            <h1 className="text-white md:text-7xl sm:text-6xl text-5xl font-extrabold">Ruchita <span className="font-normal md:text-6xl sm:text-5xl text-4xl">Sharma</span></h1>
            <p className="text-pink text-2xl font-medium">Developer</p>
            <p className="text-light text-xl lg:text-left text-center w-[90%]">We appreciate your trust greatly our clients choose us & our products because they know we are the best</p>
            <div className='flex items-center xsm:gap-5 gap-2'>
                <Button text="View Work" color={"green"}/>
                <Button text="Contact" color={"yellow"}/>
            </div>
        </div>
        <div className="w-[90%] lg:w-1/2 md:w-[70%]">
            <div className="w-full relative mt-15">
                <img src={homeImg} alt=""  className='w-full'/>
                <img src={designer} alt=""  className='absolute -top-15 -left-15'/>
                <img src={flower} alt=""  className='absolute top-13 left-13'/>
            </div>
        </div>
    </div>
  )
}

export default Home