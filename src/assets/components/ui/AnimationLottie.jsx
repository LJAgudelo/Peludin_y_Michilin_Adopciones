import Lottie from "lottie-react";
import cute from "../../animations/Cute.json";

const AnimationLottie = () => {
    return (
        <div className="w-60 h-60 mx-auto">
            <Lottie
                animationData={cute}
                loop={true}
                autoplay={true}
            />
        </div>
    )
}

export default AnimationLottie