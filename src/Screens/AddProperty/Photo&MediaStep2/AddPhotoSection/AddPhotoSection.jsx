import { Upload, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const AddPhotoSection = ({ register, setValue, error, DefaultImage = [] }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(DefaultImage);

  console.log(images);

  const handleChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const allFiles = [...images,  ...newFiles];
    setImages(allFiles);
    setValue("fileInput", allFiles, { shouldValidate: true });
  };

  const removeImage = (indexToRemove) => {
  const updatedImages = images.filter((_, index) => index !== indexToRemove);
  setImages(updatedImages);
  setValue("fileInput", updatedImages, { shouldValidate: true });
};

  return (
    <>
      <label className="block font-[700] text-PurpleColor w-full max-[1280px]:text-[16.5px]">
        Property Photos
      </label>
      <div className="mt-4 rounded-xl relative">
        <div className="flex flex-col items-center justify-center w-full py-10 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer">
          <div className="flex flex-col justify-center md:px-9 items-center gap-3">
            <Upload className="lg:size-20 md:size-14 sm:size-12 size-11" />
            <p className="text-center text-[15.5px] sm:text-[17px] md:text-[19px] lg:text-[22px] font-semibold w-[80%] sm:w-[60%]">
              Drag and drop your images here PNG, JPG, WEBP up to 10MB each
            </p>
            <div className="relative w-full flex flex-col items-center">
              <input
                id="fileInput"
                type="file"
                className="hidden"
                accept=".png,.jpg,.jpeg,.webp"
                multiple
                onChange={handleChange}
              />
              <label
                htmlFor="fileInput"
                className="inline-block cursor-pointer w-max text-center bg-PurpleColor text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition hover-btn hover-btn-purple"
              >
                <span className="text-[14px] sm:text-[14.5px] md:text-[15px] lg:text-[17px]">
                  {loading ? "Uploading..." : "Select Files"}
                </span>
              </label>

              <input
                type="hidden"
                {...register("fileInput", {
                  required: "At least one image is required.",
                  validate: (val) =>
                    (Array.isArray(val) && val.length > 0) ||
                    "At least one image is required.",
                })}
              />
            </div>
          </div>
        </div>
        {error && (
          <p className="text-red-500 font-[500] text-[14px] pt-4 font-Urbanist tracking-wide">
            {typeof error === "string" ? error : error.message}
          </p>
        )}
      </div>
      {(DefaultImage.length > 0 || images.length > 0) && (
        <div className="pt-5">
          <h1 className="font-Urbanist font-[500] mb-2 text-[#242424] text-[17px]">
            Selected Images*
          </h1>
          <div className="flex flex-wrap gap-4">
            {DefaultImage.map((url, index) => (
              <img
                key={`existing-${index}`}
                className="object-cover w-40 h-36 rounded-2xl"
                src={import.meta.env.VITE_IMAGE_KEY + url}
                alt={`Uploaded ${index}`}
              />
              
            ))}

            {/* Newly selected images */}
            {images.map((file, index) => (
              <div className="relative">
                <img
                key={`new-${index}`}
                className="object-cover w-40 h-36 rounded-2xl"
                src={URL.createObjectURL(file)}
                alt={`Uploaded ${index}`}
              />
              <X onClick={() => removeImage(index)} className="absolute top-2 right-2 px-1 bg-PurpleColor text-white font-semibold rounded-full cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AddPhotoSection;
