import Lottie from "lottie-react";
import eatCat from "../../animations/eatCat.json"

const AnimationeatCat = () => {
    return (
        <div className="w-30 h-30 mx-auto m-6">
            <Lottie
                animationData={eatCat}
                loop={true}
                autoplay={true}
            />
        </div>
    )
}

export default AnimationeatCat