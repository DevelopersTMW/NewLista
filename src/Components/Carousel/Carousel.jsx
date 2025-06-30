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
import { useConfirmation } from "../../Screens/Admin/AccountSetting/Fields/Confirmation";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { UserRoundCheck } from "lucide-react";
import Spinner from "../Spinner/Spinner";

const InvestorCarousel = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const status = localStorage.getItem("status");
  const ApiKey = import.meta.env.VITE_API_KEY;
  const [AddNetwork, setAddNetwork] = useState([]);
  const [investors, setInvestors] = useState([]);
  const [loading, setLoading] = useState(false);


  const { isOpen, confirm, handleConfirm, handleCancel } = useConfirmation();

  useEffect(() => {
    const fetchNetworks = async () => {
      setLoading(true);
      try {
        if (token) {
          const { data } = await axios.get(`${ApiKey}/users`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setInvestors(data.all_users);
          console.log(data);
        } else {
          const { data } = await axios.get(`${ApiKey}/home-network-users`);
          setInvestors(data.all_users);
          console.log(data);
        }
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
    const route = token ? (status ? "/admin/inbox" : "/pricing") : "/login";
    Swal.fire({
      icon: "info",
      title: "Join To View Investors",
      timer: 3000,
      showConfirmButton: false,
      background: "#000",
      color: "white",
    }).then(() => navigate(route));
  };

  const AddtoNetwork = async (id) => {
    const confirmed = await confirm();
    if (confirmed) {
      setLoading(true);
      try {
        const response = await axios.post(
          `${ApiKey}/connections/request`,

          { to_user_id: id },

          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(response);

        setAddNetwork((prev) =>
          prev

            .map((user) =>
              user.id === id ? { ...user, connection_status: "pending" } : user
            )
            .filter(
              (user) =>
                user.connection_status === null ||
                user.connection_status === "pending"
            )
        );
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleMessageClick = handleConnectClick;

  if (loading)
    return (
      <div className="flex justify-center items-center !h-[75vh]">
        <Spinner style={"w-14 h-20 text-PurpleColor z-50"} />
      </div>
    );

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
            InvesImage={
              inv.headshot
                ? import.meta.env.VITE_IMAGE_KEY + inv.headshot
                : DummyLogo
            }
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
            id={inv.id}
            button={AddNetwork || inv.connection_status}
            onConnectClick={AddtoNetwork}
            onMessageClick={handleMessageClick}
          />
        </SwiperSlide>
      ))}

      <ConfirmationModal
        isOpen={isOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        message="Do you want to Connect This User?"
        confirmLabel="Yes, Save"
        icon={
          <UserRoundCheck className="size-20 text-PurpleColor  bg-amber-50 PurpleColor px-3.5 py-3.5 rounded-full" />
        }
        style="bg-PurpleColor"
      />
    </Swiper>
  );
};

export default InvestorCarousel;
