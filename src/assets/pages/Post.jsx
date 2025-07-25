import Header from "../components/layout/Header.jsx"
import Footer from "../components/layout/Footer.jsx"
import gatovol from "../images/gatoMano.jpg"

const Post = () => {
    return (
        <>
            <Header />
            <div className="flex min-h-screen">
                {/* Columna imagen (visible solo en pantallas grandes) */}
                <div className="hidden lg:flex w-1/2 relative">
                    <img
                        src={gatovol}
                        className="w-100 h-150 mx-60  object-cover"
                        alt="Gato mirando"
                    />

                </div>
                {/* Columna formulario */}
                <section className=" justify-center items-center w-full lg:w-1/2 bg[--()] p-10 ">


                    {/* Formulario */}
                    <div className="bg-[var(--createdDarkBlue)] w-full max-w-md rounded-lg shadow p-6 space-y-4">
                        <h1 className="text-xl font-bold md:text-2xl text-white">Registro</h1>

                        <form className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Correo electrónico</label>
                                <input type="email" id="email" className="rounded-lg w-full p-2.5 bg-blue-200 text-black" placeholder="pepita@correo.com" />
                            </div>

                            <div>
                                <label htmlFor="contraseña" className="block mb-2 text-sm font-medium text-white">Contraseña</label>
                                <input type="password" id="contraseña" className="rounded-lg w-full p-2.5 bg-blue-200 text-black" placeholder="••••••••" />
                            </div>

                            <div>
                                <label htmlFor="confirmaContraseña" className="block mb-2 text-sm font-medium text-white">Confirmar contraseña</label>
                                <input type="password" id="confirmaContraseña" className="rounded-lg w-full p-2.5 bg-blue-200 text-black" placeholder="••••••••" />
                            </div>

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
                                    <input type="date" id="date" className="rounded-lg w-full p-2.5 bg-blue-200 text-black" />
                                </div>
                            </div>


                        </form>


                    </div>


                </section>


            </div>

            <Footer />
        </>
    )
}

export default Post