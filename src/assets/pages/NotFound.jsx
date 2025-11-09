import ButtonHome from '../components/ui/ButtonHome'
import NotFound from '../images/notFound.jpg'

const NotFound = () => {
    return (
        <>
            <div className='bg-[var(--creatdark)] flex flex-col items-center justify-center  min-h-screen'>
                <span className='italic text-white text-2xl p-10'>Página no encontrada </span>
                <img src={NotFound} className='p20-5 m-5' />
                <span className='italic text-white text-2xl p-10'>¿Te has perdido? </span>

                <ButtonHome />

            </div >



        </>

    )
}

export default NotFound  