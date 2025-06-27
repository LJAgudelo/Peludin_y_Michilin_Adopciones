import { FcGoogle } from "react-icons/fc";

const ButtonGoogle = () => {
    return (
        <>
            <button className="w-full flex items-center justify-center space-x-2 bg-blue-200 dark:text-black font-medium rounded-lg text-sm px-5 py-2.5 hover:bg-blue-300">
                <FcGoogle className="w-6 h-6" />
                <span className="text-sm flex items-center text-gray-700 dark:text-black">Inicie con Google</span>
            </button>
        </>
    )
}

export default ButtonGoogle