import ButtonIniciar from '../components/ui/ButtonIniciar.jsx';
import ButtonGoogle from '../components/ui/ButtonGoogle.jsx';
import logo from '../images/logo.png';
import asomando from '../images/asomando2.png';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';

const Login = () => {
    return (
        <>
            <div className="flex flex-col ">
                <Header />

                <section className="flex flex-col justify-center items-center min-h-screen bg-[var(--createBlueRed)]">
                    {/* Imagen  */}
                    <div className="w-60 h-25 md:w-32 md:h-32 lg:w-100 lg:h-25 mb-2">
                        <img
                            src={asomando}
                            alt="Mascotas asomándose"
                            className="w-full h-full object-contain "
                            style={{
                                maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                                WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)"
                            }}
                        />
                    </div>
                    <div className="flex flex-col items-center w-11/12 sm:max-w-md m-2 space-y-4">
                        {/* Formulario */}
                        <div className="bg-[var(--createdDarkBlue)] w-full rounded-lg shadow p-6 space-y-4">
                            <h1 className="text-xl font-bold md:text-2xl text-white text-center">Inicia sesión en tu cuenta</h1>

                            <form className="space-y-2">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="rounded-lg w-full p-2.5 dark:bg-blue-200 dark:text-black"
                                        placeholder="name@hotmail.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contraseña" className="block mb-2 text-sm font-medium text-white">Contraseña</label>
                                    <input
                                        type="password"
                                        name="contraseña"
                                        id="contraseña"
                                        placeholder="••••••••"
                                        className="rounded-lg w-full p-2.5 dark:bg-blue-200 dark:text-black"
                                        required
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <input id="recordarme" type="checkbox" className="w-4 h-4 rounded" />
                                        <label htmlFor="recordarme" className="text-white text-sm">Recordarme</label>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-white hover:underline">¿Olvidaste tu contraseña?</a>
                                </div>

                                <ButtonIniciar />

                                <div className="flex items-center justify-center space-x-4">
                                    <hr className="w-full border-white" />
                                    <span className="text-white text-sm">o</span>
                                    <hr className="w-full border-white" />
                                </div>

                                <ButtonGoogle />

                                <p className="text-sm text-white text-center">
                                    ¿Aún no tienes una cuenta?{" "}
                                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Regístrese</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default Login;
