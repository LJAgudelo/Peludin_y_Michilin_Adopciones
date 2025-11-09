import ButtonHome from '../components/ui/ButtonHome'
import notFound from '../images/notFound.jpg'


const NotFound = () => {
    return (
        <>
            <div className='bg-[var(--creatdark)] flex flex-col items-center justify-center min-h-screen'>
                <span className='italic text-white text-2xl p-10'>Página no encontrada</span>
                <img src={notFound} className='p20-5 m-5' alt="Página no encontrada" />
                <span className='italic text-white text-2xl p-10'>¿Te has perdido?</span>
                <ButtonHome />
            </div>
        </>
    )
}

export default NotFound
