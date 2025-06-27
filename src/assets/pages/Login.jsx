import ButtonIniciar from '../components/ui/ButtonIniciar.jsx';
import ButtonGoogle from '../components/ui/ButtonGoogle.jsx';
import logo from '../images/logo.png';
import asomando from '../images/asomando2.png';

const Login = () => {
    return (
        <section className="bg-white py-1 flex flex-col items-center justify-center min-h-screen">

            {/* Logo centrado y responsive */}
            <img
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain my-3 rounded-full"
                src={logo}
                alt="logo"
            />

            {/* Contenedor formulario + imagen asomando */}
            <div className="flex flex-col items-center w-11/12 sm:max-w-md">

                {/* Formulario */}
                <div className="bg-[var(--createdDarkBlue)] w-full rounded-lg shadow p-6 space-y-2">
                    <h1 className="text-xl font-bold md:text-2xl dark:text-white">Inicia sesión en tu cuenta</h1>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="rounded-lg w-full p-2.5 dark:bg-blue-200 dark:text-black"
                                placeholder="name@hotmail.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="contraseña" className="block mb-2 text-sm font-medium dark:text-white">Contraseña</label>
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
                            <span className="text-white text-sm">or</span>
                            <hr className="w-full border-white" />
                        </div>

                        <ButtonGoogle />

                        <p className="text-sm text-white text-center">
                            ¿Aún no tienes una cuenta?{" "}
                            <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Regístrese</a>
                        </p>
                    </form>
                </div>

                {/* Imagen inmediatamente después del formulario */}
                <img
                    src={asomando}
                    alt="Mascotas asomándose"
                    className="w-100 h-30 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-200 lg:h-40 object-contain mt-0"
                />

            </div>
        </section>
    );
};

export default Login;
