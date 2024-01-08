import Parallax from "./Parallax"


const Grow = () => {
  return (
      <div className=" z-[40] h-screen relative">
            <video poster="poster2.png" muted className=" w-full h-full top-0 right-0 left-0 bottom-0  object-cover" autoPlay={true} playsInline loop controls={false} src="https://player.vimeo.com/progressive_redirect/playback/827267404/rendition/540p/file.mp4?loc=external&signature=b0740c0cbc95b595164983cdb6b7ca8c81b87cb1e7dac02b9d2f08042608ac92"></video>
            <div className="absolute top-0 left-0 right-0 bottom-0 justify-center flex items-center">
              <Parallax speed={-.3} className={"flex  justify-between"}>
                <span className=" text-[2rem] lg:text-[7rem] text-white">GROW </span>
                <span className=" text-[2rem] lg:text-[7rem] text-white"> ON </span>
                <span className=" text-[2rem] lg:text-[7rem] text-white"> EARTH </span>
              </Parallax>
            </div>
            
            <div className="w-full">
              <div className="flex flex-col gap-y-5 lg:flex-row w-[95%] lg:w-[98%] justify-between absolute bottom-7 items-center left-1 md:left-5">
                <ul className=" md:mx-2 text-white space-y-3 text-[.8rem] bg-transparent  w-[250px] ">
                  <p className="text-[#A7A1AA] text-center">WE DEVELOP BIOFARMING PLATFORMS LEVERAGING POWER OF AI AND CONTROLLED-ENVIRONMENT TO ACCELERATE THE PRODUCTION OF PLANTS SECONDARY METABOLITES. </p>
              </ul>
              <div className=" bg-white px-5 py-3 text-xs font-semibold hover:text-white hover:bg-black text-black cursor-pointer">Discover More</div>
              </div>
            </div>
        </div>
  )
}

export default Grow