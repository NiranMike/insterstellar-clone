/* eslint-disable react/prop-types */
import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScroll = ({children}) => {
    
  return (
    <ReactLenis root options={{
        lerp:0.05,
        smoothTouch:true
    }}>
        {children}
    </ReactLenis>
  )
}

export default SmoothScroll