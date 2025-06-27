import { useEffect, useState } from "react";
import clsx from "clsx";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import RightSideArrow from "../../../assets/ListingRightSideArrow.png";
import axios from "axios";
import Spinner from "../../../Components/Spinner/Spinner";
import { Link } from "lucide-react";
import { Links, useNavigate } from "react-router-dom";

export default function MyOffersTable() {
  const [tab, setTab] = useState("sent");
  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  const ApiKey = import.meta.env.VITE_API_KEY;
  const [loading, setLoading] = useState(true);
  const [sentOffers, setSentOffers] = useState([]);
  const [receivedOffers, setReceivedOffers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const offers = tab === "sent" ? sentOffers : receivedOffers;
  const totalPages = Math.ceil(offers.length / itemsPerPage);
  const paginatedOffers = offers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const GetOffers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${ApiKey}/offers`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSentOffers(response.data.sent_offers || []);
        setReceivedOffers(response.data.received_offers || []);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    GetOffers();
  }, [ApiKey, token]);

  const handleAction = async (id, action) => {
    try {
      setLoading(true);
      const endpoint = action === "accept" ? "offer/accept" : "offer/decline";

      await axios.post(
        `${ApiKey}/${endpoint}`,
        { offer_id: id, action_url: `${window.location.origin}/admin/myoffers` },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const newStatus = action === "accept" ? "accepted" : "rejected";

      setReceivedOffers((prevOffers) =>
        prevOffers.map((offer) =>
          offer.id === id ? { ...offer, status: newStatus } : offer
        )
      );

      setSentOffers((prevOffers) =>
        prevOffers.map((offer) =>
          offer.id === id ? { ...offer, status: newStatus } : offer
        )
      );
    } catch (err) {
      console.error("Action error:", err);
    } finally {
      setLoading(false);
    }
  };

  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-700",
    accepted: "bg-green-100 text-green-700",
    declined: "bg-red-200 text-red-700",
  };

  return (
    <>
      <section className="pt-6 px-2 sm:px-0">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#222] text-[35px] font-bold font-Urbanist">
              My Offer
            </h1>
          </div>
          <div className="flex space-x-3 mb-6">
            {["sent", "received"].map((key) => (
              <button
                key={key}
                onClick={() => {
                  setTab(key);
                  setCurrentPage(1);
                }}
                className={clsx(
                  "px-5 py-2 rounded-full transition font-semibold text-[15.5px] font-Urbanist cursor-pointer",
                  tab === key
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                )}
              >
                {key === "sent" ? "Sent Offers" : "Received Offers"}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-6 font-urbanist">
        <div className="overflow-x-auto bg-white rounded-lg shadow-sm min-h-[60vh]">
          <table className="min-w-full divide-black">
            <thead className="bg-black">
              <tr>
                <th className="px-6 py-4.5 text-left text-white text-[16px] uppercase tracking-wider font-Urbanist font-[700]">
                  {tab === "sent" ? "Property" : "From / Property"}
                </th>
                <th className="px-6 py-3 font-Urbanist text-left text-white text-[15.5px] uppercase tracking-wider font-bold">
                  Amount
                </th>
                <th className="px-6 py-3 font-Urbanist text-left text-white text-[16px] uppercase tracking-wider font-bold">
                  Date
                </th>
                <th className="px-6 py-3 font-Urbanist text-center text-white text-[15.5px] uppercase tracking-wider font-bold">
                  Status
                </th>
                {tab === "received" && (
                  <th className="px-6 py-4.5 font-Urbanist text-center text-white text-[16px] uppercase tracking-wider font-bold">
                    Action
                  </th>
                )}
              </tr>
            </thead>
            {loading ? (
              <tbody className="relative">
                <tr className="mt-[50%]">
                  <td
                    colSpan={tab === "received" ? 5 : 4}
                    className="text-center  text-gray-500 font-semibold font-Urbanist"
                  >
                    <div className="flex pt-[13%] justify-center items-center ">
                      <Spinner
                        style={"w-12 h-14 text-PurpleColor z-50"}
                      ></Spinner>
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : paginatedOffers.length === 0 ? (
              <tbody className="relative">
                <tr className="mt-[50%]">
                  <td
                    colSpan={tab === "received" ? 5 : 4}
                    className="text-center  text-gray-500 font-semibold font-Urbanist"
                  >
                    <div className="flex pt-[13%] justify-center items-center ">
                      No Offer Found
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="divide-y divide-gray-200 ">
                {paginatedOffers.map((items) => (
                  <tr
                    onClick={() => {
                      if (items.property?.id) {
                        navigate(`/properties/${items.property.id}`);
                      }
                    }}
                    key={items.id}
                    className="hover:bg-gray-100 cursor-pointer"
                  >
                    <td className="pl-6 py-6 text-[17px] font-[600] font-Urbanist text-gray-900">
                      {tab === "sent"
                        ? items.property?.property_name
                        : `${items.user?.first_name} ${items.user?.last_name} / ${items.property?.property_name}`}
                    </td>
                    <td className="px-6 py-4 text-[16px] font-Urbanist font-bold text-gray-900">
                      ${items.amount} {/* amount is a string with commas */}
                    </td>
                    <td className="px-6 py-4 text-[16px] font-Urbanist font-semibold text-gray-500">
                      {new Date(items.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={clsx(
                          "px-3 py-0.5 inline-flex text-[14px] font-semibold font-Urbanist rounded-full",
                          statusStyles[items.status]
                        )}
                      >
                        {items.status.charAt(0).toUpperCase() +
                          items.status.slice(1)}
                      </span>
                    </td>
                    {tab === "received" && (
                      <td className="px-6 py-4 text-center">
                        {items.status === "pending" ? (
                          <div className="flex justify-center gap-1">
                            <button
                              onClick={() => handleAction(items.id, "accept")}
                              title="Accept"
                            >
                              <CheckCircleIcon className="w-7 h-7 text-green-600 hover:text-green-700 cursor-pointer" />
                            </button>
                            <button
                              onClick={() => handleAction(items.id, "reject")}
                              title="Reject"
                            >
                              <XCircleIcon className="w-7 h-7 text-red-600 hover:text-red-700 cursor-pointer" />
                            </button>
                          </div>
                        ) : (
                          <span className="text-gray-500">—</span>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>

      {!loading && totalPages > 1 && (
        <section className="flex justify-between items-center px-2 pb-4">
          <div>
            <h1 className="font-Urbanist font-semibold text-[16px] sm:text-[17px]">
              Page {currentPage} of {totalPages}
            </h1>
          </div>
          <div className="border border-[#222] flex rounded-[7px]">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="border-r border-[#BBB] px-3.5 py-2 disabled:opacity-50 cursor-pointer"
            >
              <img className="w-2.5 h-3" src={RightSideArrow} alt="Prev" />
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-2 disabled:opacity-50 cursor-pointer"
            >
              <img
                className="w-2.5 h-3 rotate-180"
                src={RightSideArrow}
                alt="Next"
              />
            </button>
          </div>
        </section>
      )}
    </>
  );
}
