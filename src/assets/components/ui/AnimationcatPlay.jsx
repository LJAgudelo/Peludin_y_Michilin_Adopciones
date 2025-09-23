import Lottie from "lottie-react";
import catPlaying from "../../animations/catPlaying.json";

const AnimationcatPlay = () => {
    return (
        <div className="w-40 h-40 mx-auto m-6">
            <Lottie
                animationData={catPlaying}
                loop={true}
                autoplay={true}
            />
        </div>
    )
}

export default AnimationcatPlay