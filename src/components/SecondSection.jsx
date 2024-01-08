import Parallax from "./Parallax"

const SecondSection = () => {
  
  
  return (
    <div className=" z-30 bg-[#F3F1F1] ">
      <div className="grid lg:grid-cols-2 pb-[11rem] overflow-hidden">

          <p className="text-[#9E9E9E] pt-20 pl-5 lg:leading-[3.7rem] text-[2rem] font-normal lg:text-[4rem]"><span className="text-black">Interstellar Lab.</span>
            We develop and commercialize biofarming platforms combining 
            AI, advanced hardware and bioscience to supply plant based ingredients at scale
            on Earth and in Space.
          </p>
          <Parallax speed={1.5} className={"justify-end hidden  lg:flex"}>
            <img className="w-[1000px] hidden md:block h-[1000px]" src="hero.webp" alt="" />
          </Parallax>
          
      </div>
    </div>
  )
}
export default SecondSection