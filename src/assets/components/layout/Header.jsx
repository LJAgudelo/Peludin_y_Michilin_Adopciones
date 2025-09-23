import { useState } from "react";
import logo from "../../images/logo.png";
import ButtonHome from "../ui/ButtonHome";
import { RiMenuFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto ">

                {/* Logo */}
                <Link to='/' className="flex items-center space-x-3">
                    <img src={logo} className="h-25 rounded-full m-5" alt="Logo" />
                </Link>
                <ButtonHome />
                {/* Botón Hamburguesa */}
                <Link to='/'
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-multi-level"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Abrir menú</span>
                    {isOpen ? (<RiMenuFill />
                    ) : (
                        <RiMenuFill />
                    )}
                </Link>
                {/* Menú de navegación */}
                <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-multi-level">
                    <ul className="flex flex-col font-semibold p-2 md:p-0 m-5 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-10 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {[
                            { label: "Mascotas", to: "/mypets" },
                            { label: "Registrarse", to: "/register" },
                            { label: "Perfil", to: "/Profile" },
                            { label: "Ingresar", to: "/login" },
                            { label: "Donaciones", to: "/donations" },
                            { label: "Publicar", to: "/messagepost" },
                            { label: "Voluntariado", to: "/volunteering" }

                        ].map((item) => (
                            <li key={item.label}>
                                <Link to={item.to} className="block py-1 px-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:underline transition-colors">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
