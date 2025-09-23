import Footer from "../components/layout/Footer.jsx"
import Header from "../components/layout/Header.jsx"
import AnimationcatPlay from "../components/ui/AnimationcatPlay.jsx"
import AnimationeatCat from "../components/ui/AnimationeatCat.jsx"

import AnimationMoney from "../components/ui/AnimationMoney.jsx"


const Donations = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen displey flex flex-col">
                <AnimationcatPlay />
                <AnimationeatCat />
                <AnimationMoney />
            </div>

            <Footer />
        </>
    )
}

export default Donations