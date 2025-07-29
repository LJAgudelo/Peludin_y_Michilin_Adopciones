import React, { useState } from 'react'
import ButtonDeleteImg from '../ui/ButtonDeletimg.jsx'
import { MdPhotoSizeSelectLarge } from "react-icons/md";

const ImageLoader = () => {

    const [previewImage, setPreviewImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setPreviewImage(previewUrl);
        }
    };

    const handleRemovePreview = () => {
        if (previewImage) {
            URL.revokeObjectURL(previewImage); // Limpia memoria del navegador
            setPreviewImage(null);
        }
    };
    return (
        < >
            <div>
                <label htmlFor="image" className="block text-sm font-medium text-white">Cargar Foto</label>
                <div className="mt-2 h-[100px] w-full flex justify-center items-center rounded-lg border border-dashed border-gray-900/25 bg-blue-200 overflow-hidden">
                    {previewImage ? (
                        <img src={previewImage} alt="Preview" className="w-full h-full object-contain" />
                    ) : (
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-3xl">
                                <MdPhotoSizeSelectLarge />
                            </div>

                            <div className="mt-2 flex text-sm text-gray-600 justify-center ">
                                <label htmlFor="image" className="cursor-pointer rounded-md  font-semibold bg-blue-200">
                                    <span>Cargar imagen</span>
                                    <input
                                        id="image"
                                        name="image"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="sr-only"
                                    />
                                </label>
                            </div>
                            <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    )}
                </div>

                <div className="rounded-md w-full mt-4 flex justify-center px-10 gap-15 py-3">
                    {previewImage && (
                        <ButtonDeleteImg onClick={handleRemovePreview} />
                    )}


                </div>
            </div>


        </ >
    )
}

export default ImageLoader