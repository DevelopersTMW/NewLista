import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import InvestorCards from "../Cards/InvestorCards/InvestorCards";
import TruncatedText from "../TruncatedText/TruncatedText";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import DummyLogo from "../../../public/Images/UnknowUser.png";

const InvestorCarousel = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const status = localStorage.getItem("status");
  const ApiKey = import.meta.env.VITE_API_KEY;

  const [investors, setInvestors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNetworks = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${ApiKey}/users`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setInvestors(data.all_users);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNetworks();
  }, [ApiKey, token]);

  const sortedLatest = investors
    .slice()
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    ) // newest first :contentReference[oaicite:6]{index=6}
    .slice(0, 8);

  const getJoinYear = (ts) => new Date(ts).getFullYear();

  const handleConnectClick = () => {
    const route = token
      ? status
        ? "/admin/subscription"
        : "/pricing"
      : "/login";
    Swal.fire({
      icon: "info",
      title: "Join To View Investors",
      timer: 3000,
      showConfirmButton: false,
      background: "#000",
      color: "white",
    }).then(() => navigate(route));
  };

  const handleMessageClick = handleConnectClick;

  if (loading) return <div>Loading...</div>;

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={100}
      slidesPerView={4}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 20 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        950: { slidesPerView: 3, spaceBetween: 80 },
        1024: { slidesPerView: 4, spaceBetween: 200 },
      }}
    >
      {sortedLatest.map((inv, i) => (
        <SwiperSlide key={inv.id || i} className="mb-12">
          <InvestorCards
            InvesImage={inv.headshot ? import.meta.env.VITE_IMAGE_KEY + inv.headshot : DummyLogo}
            InvesUserName={
              <TruncatedText
                text={`${inv.first_name} ${inv.last_name}`}
                maxLength={10}
              />
            }
            InvesDesc={inv.experience_level}
            state={inv.state}
            PropertyInterest={
              <TruncatedText
                text={inv.property_interests.join(" - ")}
                maxLength={30}
              />
            }
            year={getJoinYear(inv.created_at)}
            onConnectClick={handleConnectClick}
            onMessageClick={handleMessageClick}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InvestorCarousel;
