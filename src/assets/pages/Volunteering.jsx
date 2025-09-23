import AnimationLike from '../components/ui/AnimationLike.jsx'
import Footer from '../components/layout/Footer.jsx'
import Header from '../components/layout/Header.jsx'
import voluntariado from '../images/volun.png'
import ButtonAccept from '../components/ui/ButtonAccept.jsx'

const Volunteering = () => {
    return (
        <>
            <Header />

            <div className="flex flex-col lg:flex-row h-auto lg:h-screen bg-white">

                {/* Columna imagen */}
                <div className="hidden lg:flex w-1/2 h-full">
                    <img
                        src={voluntariado}
                        className="w-full object-cover"
                        alt="perrito limpiando el vidrio con la lengua"
                    />
                </div>

                {/* Columna corazón */}
                <div className="flex items-center justify-center w-full lg:w-[20%]">
                    <AnimationLike />
                </div>

                {/* Columna formulario */}
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <section className="flex flex-col w-full h-full p-5 gap-2">

                        <div className="bg-[var(--createdDarkBlue)] w-full max-w-md rounded-lg shadow p-6 space-y-2">
                            <h1 className="text-xl font-bold md:text-2xl text-white text-center">Participa</h1>

                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-white">Nombre</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        className="rounded-lg w-full p-2.5 bg-blue-200 text-black"
                                        placeholder="Nombres"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="apellido" className="block mb-2 text-sm font-medium text-white">Apellido</label>
                                    <input
                                        type="text"
                                        id="apellido"
                                        className="rounded-lg w-full p-2.5 bg-blue-200 text-black"
                                        placeholder="Apellidos"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="number" className="block mb-2 text-sm font-medium text-white">Teléfono</label>
                                    <input
                                        type="number"
                                        id="number"
                                        className="rounded-lg w-full p-2.5 bg-blue-200 text-black"
                                        placeholder="000 000 0000"
                                    />
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-1/2">
                                        <label htmlFor="departamento" className="block mb-2 text-sm font-medium text-white">Departamento</label>
                                        <input type="text" id="departamento" className="rounded-lg w-full p-2.5 bg-blue-200 text-black" placeholder="Departamento" />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="ciudad" className="block mb-2 text-sm font-medium text-white">Ciudad</label>
                                        <input type="text" id="ciudad" className="rounded-lg w-full p-2.5 bg-blue-200 text-black" placeholder="Ciudad" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="opcionvoluntariado" className="block mb-2 text-sm font-medium text-white">
                                        Opción de voluntariado
                                    </label>
                                    <select
                                        id="opcionvoluntariado"
                                        className="rounded-lg w-full p-2.5 bg-blue-200 text-black"
                                    >
                                        <option value="">-- Selecciona --</option>
                                        <option value="opcion1">💙 Jornadas de esterilización</option>
                                        <option value="opcion3">💉 Jornadas de vacunación</option>
                                        <option value="opcion2">👨‍👩‍👧‍👧 Ferias de adopción</option>
                                        <option value="opcion3">👫 Acogida temporal</option>
                                        <option value="opcion1">😎 Charlas educativas</option>
                                        <option value="opcion2">🦺 Apoyo en sesiones de grooming</option>
                                    </select>
                                </div>

                                <ButtonAccept />
                            </form>
                        </div>
                    </section>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Volunteering
