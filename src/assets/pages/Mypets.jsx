import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import mypet from '../images/mypet.png'
import Buttongodfather from '../components/ui/Buttongodfather.jsx'
import ButtonAdopt from '../components/ui/ButtonAdopt.jsx'
import AnimationLottie from '../components/ui/AnimationLottie.jsx'

const Mypets = () => {
    return (
        <>
            <Header />
            <div className="flex  items-center justify-center bg-[var(--createotherRed)] gap-3 ">

                <div className="relative flex flex-col items-center justify-center">
                    <img
                        src={mypet}
                        className="w-280 h-250 object-cover "
                        alt="Mensaje de reflexión"
                    />

                    <div className='absolute top-200 left-110 w-20 h-20' >
                        <AnimationLottie />
                    </div>
                    <div className='absolute bottom-3 flex gap-30'>
                        <ButtonAdopt />
                        <Buttongodfather />
                    </div>
                </div>


            </div >

            <Footer />
        </>
    )
}

export default Mypets