
const Hero = () => {
  return (
    <div className="sticky z-0">
        <video poster="stellar.png" muted className=" w-full h-full top-0 right-0 left-0 bottom-0  object-cover" autoPlay={true} playsInline loop controls={false} src="https://player.vimeo.com/progressive_redirect/playback/826898904/rendition/1080p/file.mp4?loc=external&signature=7defb7b5e1b1b2029a27bf2ed10b8d69e26e90b3bf2d151b5ad3f9f9ef209246"></video>
        <ul className="absolute mx-2 text-white space-y-3 text-[.8rem] bg-transparent left-5 w-[250px] bottom-7">
          <li className="list-disc">GROWING LIFE ANYWHERE</li>
          <p className="text-[#A7A1AA]">WE REVOLUTIONIZE PRODUCTION OF PLANT-BASED INGREDIENTS ON EARTH AND IN SPACE.</p>
        </ul>
    </div>
  )
}

export default Hero