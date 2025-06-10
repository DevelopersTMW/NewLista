import { Upload } from "lucide-react";
import React, { useState } from "react";

const AddPhotoSection = ({ register, setValue, error }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (files) => {
    setLoading(true);
    const uploadedUrls = [];

    for (const file of files) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "RealEstate");
      data.append("cloud_name", "newlista");

      try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/newlista/upload`, {
          method: "POST",
          body: data,
        });

        const UploadedImageUrl = await res.json();
        const imageUrl = UploadedImageUrl?.url;
        if (imageUrl) {
          uploadedUrls.push(imageUrl);
        }
      } catch (err) {
        console.error("Upload failed:", err);
      }
    }

    const updatedImages = [...images, ...uploadedUrls];
    setImages(updatedImages);
    setValue("fileInput", updatedImages, { shouldValidate: true });
    setLoading(false);
  };

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;
    handleImageUpload(files);
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
                    Array.isArray(val) && val.length > 0 || "At least one image is required.",
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

      {images.length > 0 && (
        <div className="pt-5">
          <h1 className="font-Urbanist font-[500] mb-2 text-[#242424] text-[17px]">
            Selected Images*
          </h1>
          <div className="flex flex-wrap gap-4">
            {images.map((url, index) => (
              <img
                key={index}
                className="object-cover w-40 h-32 rounded-2xl"
                src={url}
                alt={`Uploaded ${index}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AddPhotoSection;
