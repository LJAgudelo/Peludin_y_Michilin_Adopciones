import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ButtonAccept from "../components/ui/ButtonAccept.jsx"
const MessagePost = () => {
    return (
        <>
            <Header />

            <main className="min-h-screen px-4 md:px-10 py-10 bg-[var(--createbsky)] text-gray-800">
                <section className="max-w-3xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                        ¿Tienes una mascota para dar en adopción?
                    </h1>

                    <article className="space-y-4 text-justify ">
                        <p>
                            En <strong>Peludín & Michilin</strong> te ayudamos a encontrar un hogar para aquellos peluditos que aún no lo tienen. Si estás dando una mascota en adopción, puedes publicarla en nuestra plataforma. Antes de hacerlo, ten en cuenta las siguientes recomendaciones para garantizar una publicación efectiva y segura:
                        </p>

                        <p>
                            <span className="font-semibold">📷 Fotografías:</span> Asegúrate de tomar la foto con buena iluminación, enfoque y resolución. El perro o gato debe verse claramente.
                        </p>

                        <p>
                            <span className="font-semibold">🔐 Registro y contacto:</span> Es necesario que te registres en la plataforma y proporciones datos de contacto claros y verificables. Nos pondremos en contacto contigo para validar la información antes de aprobar la publicación. En caso de no cumplir con las condiciones establecidas, será rechazada. <br />
                        </p>

                        <p>
                            <span className="font-semibold">🐈 Importante:</span> Las publicaciones tendrán una vigencia de un mes a partir de la fecha de aprobación; en caso de que el peludito sea adoptado antes de finalizar este plazo, es importante que nos notifiques para poder retirarla de la plataforma
                            <span className="italic text-sm text-gray-600">
                                - Si después de este período el animal aún no ha sido adoptado, puedes volver a publicar la información repitiendo el proceso de registro.
                            </span>
                        </p>
                        <p>
                            <span className="font-semibold">📲 Contacto:</span>El número de celular registrado será el canal para que los interesados te contacten vía WhatsApp.
                            <span className="italic text-sm text-gray-600">
                                - No nos hacemos responsables por la información adicional que proporciones.
                            </span>
                        </p>
                        <p>
                            <span className="font-semibold">💕 Donaciones voluntarias:</span> Si deseas apoyar nuestra labor, puedes hacerlo desde la sección de Donaciones en nuestra página, ya sea con accesorios, comida, juguetes o dinero.
                            <span className="italic text-sm text-gray-600">
                                - No cobramos por publicar adopciones. Evita estafas: nadie debe solicitarte dinero por este servicio.
                            </span>

                        </p>
                    </article>

                    <input className='mt-5' type="checkbox" id="accept" name="accept" value="true" /><span> Acepto y deseo continuar</span>

                </section>
                <div className="text-2xl md:text-3xl font-bold mb-6 text-center">
                    <ButtonAccept />
                </div>

            </main>

            <Footer />
        </>
    )
}

export default MessagePost