import Lottie from "lottie-react";
import money from "../../animations/money.json";

const AnimationMoney = () => {
    return (
        <div className="w-40 h-40 mx-auto m-10">
            <Lottie
                animationData={money}
                loop={true}
                autoplay={true}
            />
        </div>
    )
}

export default AnimationMoney