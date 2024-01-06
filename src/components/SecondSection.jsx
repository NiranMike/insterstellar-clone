import Parallax from "./Parallax"

const SecondSection = () => {
  
  
  return (
    <div className=" z-30 sticky top-0 left-0 right-0 bottom-0">
      <div className="grid grid-cols-2 overflow-hidden">

          <p className="text-gray-500 leading-[3.7rem] font-normal text-[4rem]"><span className="text-black">Interstellar Lab.</span>
            We develop and commercialize biofarming platforms combining 
            AI, advanced hardware and bioscience to supply plant based ingredients at scale
            on Earth and in Space.
          </p>
          <Parallax speed={-2} className={"justify-end flex"}>
            <img className="w-[1000px] hidden md:block h-[1000px]" src="hero.webp" alt="" />
          </Parallax>
          
      </div>
    </div>
  )
}
export default SecondSection