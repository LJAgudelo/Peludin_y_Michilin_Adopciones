import React from 'react'
import { TbBrandWhatsapp } from "react-icons/tb";

const ButtonContact = () => {
    return (
        <>
            <div className="flex flex-row  ">
                <a href="#" className=" flex flex-row p-2 gap-1 items-center text-md font-medium rounded-lg border border-white text-white  hover:bg-[var(--createOtherdReed)] bg-[var(--createdReed)]"> <TbBrandWhatsapp />Contactar</a>
            </div>
        </>
    )
}

export default ButtonContact