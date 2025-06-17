import { useEffect, useState } from "react";
import UnkownUser from "/public/Images/ProfileImage.jpg";
import { Camera, Pen } from "lucide-react";
import Spinner from "../../../../Components/Spinner/Spinner";

const HeadShootBanner = ({ setValue, defaultBanner, defaultHeadshot }) => {
  const [bannerImage, setBannerImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  // Create preview URLs for images
  const bannerPreview = bannerImage ? URL.createObjectURL(bannerImage) : null;
  const profilePreview = profileImage
    ? URL.createObjectURL(profileImage)
    : null;

  useEffect(() => {
    setValue("banner", bannerImage);
  }, [bannerImage, setValue]);

  useEffect(() => {
    setValue("headshot", profileImage);
  }, [profileImage, setValue]);

  return (
    <>
      {/* Banner Section */}
      <div className="relative">
        <div className="relative">
          {bannerPreview ? (
            <img
              src={bannerPreview}
              alt="Banner Preview"
              className="h-[34vh] rounded-[10px] object-cover w-full"
            />
          ) : defaultBanner ? (
            <img
              src={import.meta.env.VITE_IMAGE_KEY + defaultBanner}
              alt="Default Banner"
              className="h-[34vh] rounded-[10px] object-cover w-full"
            />
          ) : (
            <div className="bg-[#123764] h-[34vh] w-full rounded-[10px] flex justify-center items-center">
              📷
            </div>
          )}
        </div>

        {/* Icon Button for Banner Upload */}
        <label className="absolute top-3 right-3 z-10 bg-white p-2 rounded-[8px] shadow cursor-pointer hover:bg-gray-100 transition hover-btn hover-btn-white">
          <span>
            <Pen className="size-4.5" />
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setBannerImage(e.target.files[0]);
              }
            }}
            className="hidden"
          />
        </label>
      </div>

      {/* Profile Section */}
      <div className="ml-4 sm:ml-12 -mt-20 relative">
        <div className="relative w-full sm:w-[21%]">
          {defaultHeadshot === undefined ? (
            <div className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] flex items-center justify-center rounded-full bg-gray-100">
              <span className="text-sm text-gray-500">Loading...</span>
            </div>
          ) : (
            <img
              className="w-[120px] h-[120px] sm:w-[200px] xl:w-full sm:h-[200px] bg-white object-cover rounded-full"
              src={
                profilePreview ||
                (defaultHeadshot
                  ? import.meta.env.VITE_IMAGE_KEY + defaultHeadshot
                  : UnkownUser)
              }
              alt="Profile"
            />
          )}

          <label className="absolute bottom-4.5 right-1.5 z-10 bg-black p-2 rounded-full shadow cursor-pointer hover:bg-gray-100 text-white transition hover-btn hover-btn-black">
            <span>
              <Camera className="size-4.5 " />
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setProfileImage(e.target.files[0]);
                }
              }}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default HeadShootBanner;
