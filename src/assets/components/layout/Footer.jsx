import { ImGithub, ImLinkedin } from "react-icons/im";

const Footer = () => {
    const navItems = [
        { label: "Inicio", href: "#" },
        { label: "Acerca de", href: "#acerca" },
        { label: "Contacto", href: "#contacto" },
        { label: "Marcas recomendadas", href: "#marcas" },
    ];
    return (
        <footer className="relative bg-gradient-to-b  dark:bg-gray-900 text-white p-15">

            {/* Onda superior */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                <svg
                    className="relative block w-full h-30"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    viewBox="10 0 1000 150"
                >

                </svg>
            </div>

            {/* Navegación */}

            <div className="flex justify-center space-x-8 mb-4 text-lg relative z-10 m-6 font-semibold">
                {navItems.map(({ label, href }) => (
                    <a
                        key={label}
                        href={href}
                        className="text-white hover:text-blue-700 hover:underline transition-colors"
                    >
                        {label}
                    </a>
                ))}
            </div>

            <hr className="mx-8 mb-4" />


            {/* Derechos reservados */}
            <p className="text-center text-sm">&copy; 2025 Todos los derechos reservados</p>


            {/* Iconos redes sociales */}
            <div className="flex justify-center gap-4 m-5">
                <a href="https://github.com/LJAgudelo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-colors">
                    <ImGithub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/leidy-j-agudelo/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-colors">
                    <ImLinkedin className="w-6 h-6" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
