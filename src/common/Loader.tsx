import animationData from "../assets/animations/loader.json"
import Lottie from 'react-lottie';
export default function Loader() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
    return (
      <div className="bg-black">
        <Lottie 
          isClickToPauseDisabled={true}
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    );
}