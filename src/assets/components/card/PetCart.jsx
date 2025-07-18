import gato from '../../images/gato.jpg'
import ButtonContact from '../ui/ButtonContact.jsx'

const PetCart = () => {
    return (
        <>
            <div className="w-full max-w-sm rounded-lg shadow-sm bg-[var(--createbsky)] p-5 border-2 border-zinc-300">
                <div className='flex flex-row gap-3'>


                    <div className='gap-4 items-center'>
                        <img className="w-50 h-60 border-1 border-blue-900" src={gato} alt="Bonnie image" />
                    </div>
                    <div className='flex flex-col text-left pl-5'>
                        <h5 className="text-xl font-medium dark:text-blue-900 mb-3">Sexo</h5>
                        <h5 className="text-xl font-medium dark:text-blue-900 mb-3">Edad</h5>
                        <h5 className="text-xl font-medium dark:text-blue-900 mb-3">Ubicación</h5>
                        <h5 className="text-xl font-medium dark:text-blue-900 mb-3">Carácteristica</h5>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between p-6'>
                    <div >
                        <span className="text-5xl font-bold dark:text-blue-900 font-[Ribeye]">Bonnie</span>
                    </div>
                    <ButtonContact />
                </div>


            </div>


        </>
    )
}

export default PetCart