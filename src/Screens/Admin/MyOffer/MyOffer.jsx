import { useEffect, useState } from "react";
import clsx from "clsx";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import RightSideArrow from "../../../assets/ListingRightSideArrow.png";
import axios from "axios";
import Spinner from "../../../Components/Spinner/Spinner";
import { Link } from "lucide-react";
import { Links, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPendingOffersCount } from "../../../Reducers/PendingOffers/pendingOffersSlice";

export default function MyOffersTable() {
  const [tab, setTab] = useState("sent");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const ApiKey = import.meta.env.VITE_API_KEY;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [sentOffers, setSentOffers] = useState([]);
  const [receivedOffers, setReceivedOffers] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const pendingOffersCount = useSelector(
    (state) => state.pendingOffers?.pendingOffersCount || 0
  );

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

        const sent = response.data.sent_offers || [];
        const received = response.data.received_offers || [];

        setSentOffers(sent);
        setReceivedOffers(received);

        // Filter pending received offers count
        const pendingCount = received.filter(
          (offer) => offer.status === "pending"
        ).length;
        // Dispatch to redux
        dispatch(setPendingOffersCount(pendingCount));
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

      const res = await axios.post(
        `${ApiKey}/${endpoint}`,
        {
          offer_id: id,
          action_url: `${window.location.origin}/admin/myoffers`,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(res);

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

      // Update pending offers count in redux
      setTimeout(() => {
        // Optional: wait state update
        const updatedPendingCount = receivedOffers.filter((offer) =>
          offer.id === id ? newStatus === "pending" : offer.status === "pending"
        ).length;

        dispatch(setPendingOffersCount(updatedPendingCount));
      }, 0);
    } catch (err) {
      console.error("Action error:", err);
    } finally {
      setLoading(false);
    }
  };

  const AddtoNetwork = async (userObj) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${ApiKey}/connections/request`,
        { to_user_id: userObj.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Mark connection status as "pending", not "accepted"
      setReceivedOffers((prev) =>
        prev.map((offer) =>
          (tab === "received" ? offer.user?.id : offer.owner?.id) === userObj.id
            ? { ...offer, connection_status: "pending" }
            : offer
        )
      );

      setSentOffers((prev) =>
        prev.map((offer) =>
          (tab === "sent" ? offer.owner?.id : offer.user?.id) === userObj.id
            ? { ...offer, connection_status: "pending" }
            : offer
        )
      );
    } catch (error) {
      console.log(error);
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
                {key === "sent" ? (
                  "Sent Offers"
                ) : (
                  <div className="flex justify-center items-center gap-1">
                    Received Offers
                    {pendingOffersCount > 0 && (
                      <span className="bg-red-500 text-white px-[3px] py-[2px]  text-[12px] rounded-full font-bold  font-Urbanist min-w-[21px] h-[21px]">
                        {pendingOffersCount}
                      </span>
                    )}
                  </div>
                )}
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
                <th className="px-6 py-4.5 font-Urbanist text-center text-white text-[16px] uppercase tracking-wider font-bold">
                  Action
                </th>
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
                  <tr key={items.id} className="hover:bg-gray-100  w-max">
                    <td className="pl-6 py-6 text-[17px] font-[600] font-Urbanist text-gray-900 w-[35%]">
                      {console.log(items)}
                      <h1
                        onClick={() => {
                          if (items.property?.id) {
                            navigate(`/properties/${items.property.id}`);
                          }
                        }}
                        className="w-max cursor-pointer hover:border-b-[1px] pb-1"
                      >
                        {tab === "sent"
                          ? items.property?.property_name
                          : `${items.user?.first_name} ${items.user?.last_name} / ${items.property?.property_name}`}
                      </h1>
                    </td>
                    <td className="px-6 py-4 text-[16px] font-Urbanist font-bold text-gray-900">
                      ${items.amount}
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

                    <td className="px-6 py-4 text-center">
                      {items.status === "pending" ? (
                        tab === "received" && (
                          <div className="flex justify-center gap-1">
                            <button
                              onClick={() => handleAction(items.id, "accept")}
                              title="Accept"
                            >
                              <CheckCircleIcon className="w-7 h-7 text-green-600 hover:text-green-700 cursor-pointer" />
                            </button>
                            <button
                              onClick={() => handleAction(items.id, "Declined")}
                              title="Declined"
                            >
                              <XCircleIcon className="w-7 h-7 text-red-600 hover:text-red-700 cursor-pointer" />
                            </button>
                          </div>
                        )
                      ) : items.status === "accepted" ? (
                        items.connection_status === "accepted" ? (
                          <button
                            onClick={() => {
                              const user =
                                tab === "received" ? items.user : items.owner;
                              navigate("/admin/inbox", {
                                state: {
                                  userId: user?.id,
                                  userName: `${user?.first_name} ${user?.last_name}`,
                                },
                              });
                            }}
                            className="text-sm bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700 font-medium cursor-pointer hover-btn hover-btn-purple"
                          >
                            <span>Message</span>
                          </button>
                        ) : items.connection_status === "pending" ? (
                          <button
                            disabled
                            className="text-sm bg-gray-300 text-gray-700 px-3 py-1 rounded-full font-medium cursor-not-allowed"
                          >
                            Pending
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              AddtoNetwork(
                                tab === "received" ? items.user : items.owner
                              );
                            }}
                            className="text-sm bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700 font-medium cursor-pointer hover-btn hover-btn-purple"
                          >
                            <span>Add Network</span>
                          </button>
                        )
                      ) : (
                        <span className="text-gray-500">—</span>
                      )}
                    </td>
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
