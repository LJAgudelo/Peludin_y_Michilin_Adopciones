import Lottie from "lottie-react";
import like from "../../animations/like.json";

const AnimationLike = () => {
    return (
        <div className="w-30 h-30 mx-auto">
            <Lottie
                animationData={like}
                loop={true}
                autoplay={true}
            />
        </div>
    )
}

export default AnimationLike


