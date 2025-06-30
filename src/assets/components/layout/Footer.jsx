import { ImGithub, ImLinkedin } from "react-icons/im";

const Footer = () => {
    const navItems = [
        { label: "Inicio", href: "#" },
        { label: "Acerca de", href: "#acerca" },
        { label: "Contacto", href: "#contacto" },
        { label: "Marcas recomendadas", href: "#marcas" },
    ];
    return (
        <footer className="relative bg-gradient-to-b from-blue-300 to-blue-700 text-white pt-12 pb-6">

            {/* Onda superior */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                <svg
                    className="relative block w-full h-30"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    viewBox="10 0 1000 150"
                >
                    <path
                        d="M0,0V46.29c47.86,22,103.84,29,158,17.39C279.68,34,385.75-17.18,502.26,1.68c82.75,13.48,164.68,45.15,247.86,47.25,86.57,2.2,172.39-23.64,258-38.58V0Z"
                        className="fill-blue-500"
                    ></path>
                </svg>
            </div>

            {/* Navegación */}

            <div className="flex justify-center space-x-8 mb-4 text-lg relative z-10 m-6">
                {navItems.map(({ label, href }) => (
                    <a
                        key={label}
                        href={href}
                        className="text-white hover:text-yellow-300 hover:underline transition-colors"
                    >
                        {label}
                    </a>
                ))}
            </div>

            <hr className="border-gray-200 mx-8 mb-4" />

            {/* Iconos redes sociales */}
            <div className="flex justify-center gap-4 mb-4">
                <a href="https://github.com/LJAgudelo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-colors">
                    <ImGithub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/leidy-j-agudelo/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-colors">
                    <ImLinkedin className="w-6 h-6" />
                </a>
            </div>

            {/* Derechos reservados */}
            <p className="text-center text-sm">&copy; 2025 Todos los derechos reservados</p>
        </footer>
    );
};

export default Footer;
