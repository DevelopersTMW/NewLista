import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function PropertyGallery({ images = [] }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const slides = images.map((file) =>
    typeof file === "string"
      ? { src: import.meta.env.VITE_IMAGE_KEY + file }
      : { src: URL.createObjectURL(file) }
  );

  return (
    <>
      <div className="flex flex-col sm:flex-col gap-6 w-[93%]">
        <div className="sm:w-[75%] md:w-full ">
          {slides[0] && (
            <img
              className="w-full h-[570px] object-cover rounded-lg cursor-pointer"
              src={slides[0].src}
              alt="Main"
              onClick={() => {
                setIndex(0);
                setOpen(true);
              }}
            />
          )}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 ">
          {slides.slice(1).map((slide, idx) => (
            <img
              key={idx + 1}
              src={slide.src}
              alt={`Preview-${idx + 1}`}
              className="object-cover w-[100%] h-32 rounded-lg cursor-pointer"
              onClick={() => {
                setIndex(idx + 1);
                setOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      />
    </>
  );
}
