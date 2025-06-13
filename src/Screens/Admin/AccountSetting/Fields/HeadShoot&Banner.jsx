import React, { useEffect, useState } from "react";
import AddPropertyBanner from "../../../../assets/AddPropertyBanner.jpg";
import AccountSettingImage from "../../../../assets/AccountSettingImage.png";
import UnkownUser from "/public/Images/ProfileImage.jpg";
import { Pen } from "lucide-react";

const HeadShootBanner = ({ setValue }) => {
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
        {bannerPreview ? (
          <img
            className="h-[34vh] rounded-[10px] object-cover w-full"
            src={bannerPreview || AddPropertyBanner}
            alt="Banner"
          />
        ) : (
          <div className="bg-[#123764] h-[34vh] w-full rounded-[10px] object-cover flex justify-center items-center">
            📷
          </div>
        )}

        {/* Icon Button for Banner Upload */}
        <label className="absolute top-3 right-3 z-10 bg-white text-gray-800 p-2 rounded-[8px] shadow cursor-pointer hover:bg-gray-100 transition">
          <Pen className="size-4.5" />
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
        <div className="relative w-full sm:w-[19%]">
          <img
            className="w-[120px] h-[120px] sm:w-[200px] sm:h-[190px] bg-white rounded-[15px] object-cover"
            src={profilePreview || UnkownUser}
            alt="Profile"
          />

          {/* Profile Upload (hidden input over full image) */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setProfileImage(e.target.files[0]);
              }
            }}
            className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default HeadShootBanner;
