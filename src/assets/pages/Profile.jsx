import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import saludo from '../images/saludo.jpg'
import ButtonSave from '../components/ui/ButtonSave.jsx'
import ButtonUpdate from '../components/ui/ButtonUpdate.jsx'
import ImageLoader from '../components/ui/ImageLoader.jsx'


const Profile = () => {
    return (
        <>
            <Header />
            <div className="flex min-h-screen">
                {/* Columna imagen (visible solo en pantallas grandes) */}
                <div className="hidden lg:flex w-1/2 justify-center items-center bg-[var(--creatdark)]">
                    <img
                        src={saludo}
                        className="w-full object-contain"
                        alt="perrito limpiando el vidrio con la lengua"
                    />
                </div>

                {/* Columna formulario */}
                <section className="flex w-full lg:w-1/2 justify-center items-center bg-white">
                    <div className="bg-[var(--createdDarkBlue)] w-full max-w-md rounded-lg shadow p-6 space-y-4">
                        <h1 className="text-xl font-bold md:text-2xl text-white">Perfil</h1>

                        <form className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-white">Nombres</label>
                                    <input type="text" id="nombre" className="rounded-lg w-full p-2.5 bg-blue-200 text-black" placeholder="Pepita" />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="apellido" className="block mb-2 text-sm font-medium text-white">Apellidos</label>
                                    <input type="text" id="apellido" className="rounded-lg w-full p-2.5 bg-blue-200 text-black" placeholder="Pérez Pérez" />
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <label htmlFor="number" className="block mb-2 text-sm font-medium text-white">Teléfono</label>
                                    <input type="number" id="number" className="rounded-lg w-full p-2.5 bg-blue-200 text-black" placeholder="000 000 0000" />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-white">Fecha de nacimiento</label>
                                    <input type="date" id="date" className="rounded-lg w-full p-2.5 bg-blue-200 text-gray-500" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Correo electrónico</label>
                                <input type="email" id="email" className="rounded-lg w-full p-2.5 bg-blue-200 text-black" placeholder="pepita@correo.com" />
                            </div>

                            <ImageLoader />

                            <div className='flex gap-4 justify-center'>
                                <ButtonSave />
                                <ButtonUpdate />
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Profile