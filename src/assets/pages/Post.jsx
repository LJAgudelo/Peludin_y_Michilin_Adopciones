import Header from "../components/layout/Header.jsx"
import Footer from "../components/layout/Footer.jsx"
import gatovol from "../images/gatoMano.jpg"
import ButtonPublicar from "../components/ui/ButtonPublicar.jsx"
import ImageLoader from "../components/ui/ImageLoader.jsx"

const Post = () => {
    return (
        <>
            <Header />

            <div className="flex min-h-screen">
                {/* Columna de imagen (visible solo en pantallas grandes) */}
                <div className="hidden lg:flex w-1/2 relative">
                    <img
                        src={gatovol}
                        alt="Gato mirando"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Columna del formulario */}
                <section className="flex justify-center items-center w-full lg:w-1/2 bg-[var(--fondo-claro)] p-10">
                    <div className="bg-[var(--createdDarkBlue)] w-full max-w-md rounded-lg shadow p-6 space-y-4">
                        <h1 className="text-xl font-bold md:text-2xl text-white">Crear publicación</h1>

                        <form className="space-y-4">
                            {/* Nombre y género */}
                            <div className="flex gap-5">
                                <div className="w-1/2">
                                    <label htmlFor="nombreMascota" className="block mb-2 text-sm font-medium text-white">
                                        Nombre de la mascota
                                    </label>
                                    <input
                                        type="text"
                                        id="nombreMascota"
                                        placeholder="Nombre de la mascota"
                                        className="rounded-lg w-full p-2 bg-blue-200 text-black"
                                    />
                                </div>

                                <div className="w-1/2">
                                    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-white">Responsable</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        className="rounded-lg w-full p-2 bg-blue-200 text-black"
                                        placeholder="Nombre del logueado"
                                    />
                                </div>
                            </div>

                            {/* Edad y tamaño */}
                            <div className="flex gap-5">

                                <div className="w-1/2">
                                    <label htmlFor="ciudad" className="block mb-2 text-sm font-medium text-white">Ciudad</label>
                                    <input
                                        type="text"
                                        id="ciudad"
                                        className="rounded-lg w-full p-2 bg-blue-200 text-black"
                                        placeholder="Ciudad del peludito"
                                    />
                                </div>
                                <div className="w-1/2 ">
                                    <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-white">Teléfono</label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        className="rounded-lg w-full p-2 bg-blue-200 text-black"
                                        placeholder="000 000 0000"
                                    />
                                </div>

                            </div>


                            <div className="flex gap-5">
                                < div className="w-1/2" >
                                    <label className="block mb-2 text-sm font-medium text-white ">Género</label>
                                    <select className="rounded-lg w-full p-2 bg-blue-200 text-gray-600 ">
                                        <option value="">Seleccione</option>
                                        <option value="macho">Macho</option>
                                        <option value="hembra">Hembra</option>
                                    </select>
                                </div >

                                <div className="w-1/2 ">
                                    <label className="block mb-2 text-sm font-medium text-white">Tamaño</label>
                                    <select className="rounded-lg w-full p-2 bg-blue-200 text-gray-600">
                                        <option value="">Seleccione</option>
                                        <option value="miniatura">Miniatura</option>
                                        <option value="pequeño">Pequeño</option>
                                        <option value="mediano-pequeño">Mediano-Pequeño</option>
                                        <option value="mediano-grande">Mediano-Grande</option>
                                        <option value="grande">Grande</option>
                                    </select>
                                </div>

                            </div>


                            <div className="w-80 flex gap-5 justify-between items-center" >
                                <div>
                                    <label htmlFor="años" className="block mb-2 text-sm font-medium text-white">Años</label>
                                    <input
                                        type="number"
                                        id="años"
                                        className="rounded-lg w-full p-2 bg-blue-200 text-black "
                                        placeholder="0"
                                        min="0"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="meses" className="block mb-2 text-sm font-medium text-white">Meses</label>
                                    <input
                                        type="number"
                                        id="meses"
                                        className="rounded-lg w-full p-2 bg-blue-200 text-black"
                                        placeholder="2"
                                        min="2"
                                    />
                                </div>

                                <input
                                    type="checkbox"
                                    id="esterilizado"
                                    className="w-10 h-5 p-2 "
                                />
                                <label htmlFor="esterilizado" className="text-sm font-medium text-white">
                                    Esterilizado
                                </label>
                            </div>
                            {/* Descripción */}
                            <div>
                                <label htmlFor="descripcion" className="block mb-2 text-sm font-medium text-white">Descripción</label>
                                <textarea
                                    id="descripcion"
                                    rows="2"
                                    className="rounded-lg w-full p-2 bg-blue-200 text-black resize-none"
                                    placeholder="Escribe una breve descripción del peludito"
                                ></textarea>
                            </div>
                            <ImageLoader />
                            <div className="flex justify-center">
                                <ButtonPublicar />
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



