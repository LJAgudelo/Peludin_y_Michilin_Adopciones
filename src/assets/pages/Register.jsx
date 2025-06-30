import lengua from '../../assets/images/lengua.jpg';
import logo from '../images/logo.png';
import Registrarse from '../components/ui/Registrarse.jsx';
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
const Register = () => {
    return (
        <>
            <Header />



            <div className="flex min-h-screen ">

                <div className="flex items-center justify-center relative w-[900px] h-screen overflow-hidden">
                    <img
                        src={lengua}
                        className="h-full w-full object-cover"
                        alt="perrito limpiando el vidrio con la lengua"
                    />
                    {/* Capa de difuminado a la derecha */}
                    <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[var(--createBlueRed)] to-transparent"></div>
                    {/* Difuminado inferior */}
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[var(--createBlueRed)] to-transparent"></div>
                </div>

                {/* Sección formulario */}
                <section className="flex flex-col items-center justify-center p-6 bg-[var(--createBlueRed)]  w-full h-screen">

                    {/* Logo */}
                    <img
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-30 lg:h-30 object-contain my-3 rounded-full "
                        src={logo}
                        alt="logo"
                    />

                    {/* Contenedor formulario */}
                    <div className="flex flex-col items-center w-11/12 sm:max-w-md">
                        <div className="bg-[var(--createdDarkBlue)] w-full rounded-lg shadow p-6 space-y-4">
                            <h1 className="text-xl font-bold md:text-2xl text-white">Registro</h1>

                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Correo electrónico</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="rounded-lg w-full p-2.5 bg-blue-200 text-black"
                                        placeholder="pepita@correo.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contraseña" className="block mb-2 text-sm font-medium text-white">Contraseña</label>
                                    <input
                                        type="password"
                                        name="contraseña"
                                        id="contraseña"
                                        placeholder="••••••••"
                                        className="rounded-lg w-full p-2.5 bg-blue-200 text-black"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="confirmaContraseña" className="block mb-2 text-sm font-medium text-white">Confirmar contraseña</label>
                                    <input
                                        type="password"
                                        name="confirmaContraseña"
                                        id="confirmaContraseña"
                                        placeholder="••••••••"
                                        className="rounded-lg w-full p-2.5 bg-blue-200 text-black"
                                        required
                                    />
                                </div>

                                <div className='flex justify-between gap-5'>
                                    <div>
                                        <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-white">Nombres</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            id="nombre"
                                            className="rounded-lg w-full p-2.5 bg-blue-200 text-black"
                                            placeholder="Pepita"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="apellido" className="block mb-2 text-sm font-medium text-white">Apellidos</label>
                                        <input
                                            type="text"
                                            name="apellido"
                                            id="apellido"
                                            className="rounded-lg w-full p-2.5 bg-blue-200 text-black"
                                            placeholder="Pérez Pérez"
                                        />
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5'>
                                    <div>
                                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-white">Teléfono</label>
                                        <input
                                            type="number"
                                            name="number"
                                            id="number"
                                            className="rounded-lg w-full p-2.5 bg-blue-200 text-black"
                                            placeholder="000 000 0000"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-white">Fecha de nacimiento</label>
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            className="rounded-lg w-full p-2.5 bg-blue-200 text-black"
                                        />
                                    </div>
                                </div>

                                <Registrarse />
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};


export default Register;
