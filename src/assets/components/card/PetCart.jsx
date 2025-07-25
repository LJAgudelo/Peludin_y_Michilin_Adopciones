import gato from '../../images/gato.jpg'
import ButtonContact from '../ui/ButtonContact.jsx'

const PetCart = () => {
    return (
        <>
            <div className="w-full max-w-sm rounded-lg shadow-sm bg-[var(--createbsky)] p-5 border-2 border-zinc-300">
                <div className='flex flex-row gap-3'>


                    <div className='gap-4 items-center'>
                        <img className="w-50 h-60 border-1dd border-blue-900" src={gato} alt="Bonnie image" />
                    </div>
                    <div className='flex flex-col text-left pl-5'>
                        <h5 className="text-xl font-medium dark:text-blue-900 m">Sexo</h5>
                        <input type='text' id='sexo' name='sexo' placeholder='Sexo del animal' className="w-full text-sm text-black " />
                        <h5 className="text-xl font-medium dark:text-blue-900 ">Edad</h5>
                        <input type='number' id='edad' name='edad' placeholder='Edad del animal' className="w-full text-sm text-black " />
                        <h5 className="text-xl font-medium dark:text-blue-900 ">Ubicación</h5>
                        <input type='text' id='ubicacion' name='ubicacion' placeholder='ubicacion' className="w-full text-sm text-black " />
                        <h5 className="text-xl font-medium dark:text-blue-900 ">Carácteristica</h5>
                        <input type='text' id='caracteristicas' name='caracteristicas' placeholder='caracteristicas' className="w-full text-sm text-black " />
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