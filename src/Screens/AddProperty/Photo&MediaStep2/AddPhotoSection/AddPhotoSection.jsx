import { Upload } from "lucide-react";
import React from "react";

const AddPhotoSection = ({register ,previews }) => {
  return (
    <>
      <label
        htmlFor={"Property Photos"}
        className="block font-[700] text-PurpleColor w-[100%] max-[1280px]:text-[16.5px] max-[1666px]:text-[16.5px] min-[1666px]:text-[16.5px]"
      >
        Property Photos
      </label>
      <div className=" mt-4 rounded-xl relative">
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
                {...register("fileInput")}
              />
              <label
                htmlFor="fileInput"
                className="inline-block cursor-pointer w-max text-center bg-PurpleColor text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition hover-btn hover-btn-purple"
              >
                <span className="text-[14px] sm:text-[14.5px] md:text-[15px] lg:text-[17px]">Select Files</span>
              </label>
            </div>

            {previews.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-4">
                {previews.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Preview ${index}`}
                    className="max-w-[150px] rounded shadow"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPhotoSection;
