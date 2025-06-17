import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Testimonials1 from "../../assets/Testimonials1.png";
import InvestorCards from "../Cards/InvestorCards/InvestorCards";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Info } from "lucide-react";

const investors = [
  {
    name: "John Doe",
    desc: "Real Estate Investor",
    image: Testimonials1,
  },
  {
    name: "Jane Smith",
    desc: "Angel Investor",
    image: Testimonials1,
  },
  {
    name: "Michael Johnson",
    desc: "Tech Investor",
    image: Testimonials1,
  },
  {
    name: "Emily Davis",
    desc: "Venture Capitalist",
    image: Testimonials1,
  },
  {
    name: "Robert Brown",
    desc: "Crypto Enthusiast",
    image: Testimonials1,
  },
  {
    name: "Linda Wilson",
    desc: "Startup Mentor",
    image: Testimonials1,
  },
];

const InvestorCarousel = () => {
  const token = localStorage.getItem("token");
  const [ShowModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleConnectClick = () => {
    if (!token) {
      Swal.fire({
        icon: "info",
        title: "Join To View Investors",
        timer: 3000,
        showConfirmButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        timerProgressBar: true,
        background: "#000",
        color: "white",
        customClass: {
          title: "text-white font-Urbanist font-semibold text-[25px]",
          htmlContainer: "text-white text-[14px] font-Urbanist",
        },
      }).then(() => {
        navigate("/pricing");
        setShowModal(false);
      });
      alert("Please login to connect");
    } else {
      Swal.fire({
        icon: "info",
        title: "Join To View Investors",
        timer: 3000,
        showConfirmButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        background: "#000",
        timerProgressBar: true,
        color: "white",
        customClass: {
          title: "text-white font-Urbanist font-semibold text-[25px]",
          htmlContainer: "text-white text-[14px] font-Urbanist",
        },
      }).then(() => {
        navigate("/admin/network");
        setShowModal(false);
      });
      // logic if logged in
    }
  };

  const handleMessageClick = () => {
    if (!token) {
      Swal.fire({
        icon: "info",
        title: "Join To View Investors",
        timer: 3000,
        showConfirmButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        timerProgressBar: true,
        background: "#000",
        color: "white",
        customClass: {
          title: "text-white font-Urbanist font-semibold text-[25px]",
          htmlContainer: "text-white text-[14px] font-Urbanist",
        },
      }).then(() => {
        navigate("/pricing");
        setShowModal(false);
      });
      // Your modal logic or redirect here
      // Example:
      alert("Please login to connect");
    } else {
      Swal.fire({
        icon: "info",
        title: "Join To View Investors",
        timer: 3000,
        showConfirmButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        timerProgressBar: true,
        background: "#000",
        color: "white",
        customClass: {
          title: "text-white font-Urbanist font-semibold text-[25px]",
          htmlContainer: "text-white text-[14px] font-Urbanist",
        },
      }).then(() => {
        navigate("/admin/network");
        setShowModal(false);
      });
      // logic if logged in
    }
  };

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={100}
        slidesPerView={4}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="!pb-12"
        preventClicks={false}
        preventClicksPropagation={false}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          950: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 200,
          },
        }}
      >
        {investors.map((investor, index) => (
          <SwiperSlide key={index}>
            <InvestorCards
              InvesImage={investor.image}
              InvesUserName={investor.name}
              InvesDesc={investor.desc}
              onConnectClick={handleConnectClick}
              onMessageClick={handleMessageClick}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InvestorCarousel;
