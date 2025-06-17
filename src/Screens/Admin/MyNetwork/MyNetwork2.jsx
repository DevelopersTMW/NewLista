import axios from "axios";
import { useEffect, useState } from "react";

// IMAGES
import fade from "../../../assets/fade.png";
import MyNetwork from "../../../assets/MyNetwork.jpg";
import MessageIcon2 from "../../../assets/MessageIcon2.png";
import InvestorIcon1 from "../../../assets/InvestorIcon1.png";
import CallIcon from "../../../assets/CallIcon.png";
import AccountSettingImage from "../../../assets/AccountSettingImage.png";

// COMPONENTS
import AddToNetwork from "../../../Components/Cards/AddToNetwork/AddToNetwork";
import ProfileModal from "../../../Components/ProfileModal/ProfileModal";
import Spinner from "../../../Components/Spinner/Spinner";
import SearchFilters from "./SearchFilters";
import ProfileSection from "./NetworkSections/ProfileSection/ProfileSection";
import AddtoNetworkSec from "./NetworkSections/AddtoNetworkSec/AddtoNetworkSec";
import OurNetwork from "./NetworkSections/OurNetwork/OurNetwork";
import OurRequest from "./NetworkSections/OurRequest/OurRequest";



const TabNames = [
  { name: "Discover", TabLink: "addToNetwork" },
  { name: "My Network", TabLink: "myNetwork" },
  { name: `My Request`, TabLink: "pending" },
];

const MyNetwork2 = () => {
  // KEYS
  const ApiKey = import.meta.env.VITE_API_KEY;
  const tokens = localStorage.getItem("token");
  const [loading, setloading] = useState(false);

  // FILTER
  const [searchTerm, setSearchTerm] = useState("");

  // SAVE API DATA
  const [AddNetwork, setAddNetwork] = useState([]);
  const [MyNetwork, setMyNetwork] = useState([]);
  const [PendinNetwork, setPendingNetwork] = useState([]);
  const [selectedUser, setSelectedUser] = useState([null]);
  const [type, settype] = useState();

  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("addToNetwork");

  // GET SEARCH VALUE
  const handleSearchChange = ({
    search,
    propertyType,
    investmentRange,
    locations,
  }) => {
    setSearchTerm(search + " " + propertyType);
  };

  // REJECT CARD IN NETWORK
  const handleReject = (id) => {
    setAddNetwork((prev) => prev.filter((user) => user.id !== id));
  };
  // CHANGE YEAR FORMAT
  const getJoinYear = (timestamp) => new Date(timestamp).getFullYear();
  // GET NETWORK DATA
  useEffect(() => {
    const GetNetwork = async () => {
      setloading(true);
      try {
        const response = await axios.get(`${ApiKey}/users`, {
          headers: {
            Authorization: `Bearer ${tokens}
`,
          },
        });
        const Data = response.data;
        setMyNetwork(Data.my_connections);
        setAddNetwork(Data.all_users);
        setPendingNetwork(Data.received_requests);
      } catch (error) {
        console.log(error);
        setloading(false);
      } finally {
        setloading(false);
      }
    };
    GetNetwork();
  }, []);

  const AddtoNetwork = async (id) => {
    setloading(true);
    try {
      const response = await axios.post(
        `${ApiKey}/connections/request`,
        {
          to_user_id: id,
        },
        {
          headers: {
            Authorization: `Bearer ${tokens}`,
          },
        }
      );
      const Data = response.data;
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
      setloading(false);
    } finally {
      setloading(false);
    }
  };
  // Pending Request
  const PendingRequest = async (Val, id) => {
    try {
      const response = await axios.patch(
        `${ApiKey}/connections/${id}/update`,
        {
          status: Val,
        },
        {
          headers: {
            Authorization: `Bearer ${tokens}`,
          },
        }
      );
      const Data = response.data;
      const acceptedUser = PendinNetwork.find(
        (user) => user.id === id
      )?.from_user;

      // Remove from pending
      setPendingNetwork((prev) => prev.filter((user) => user.id !== id));

      // Add to My Network if accepted
      if (Val === "accepted" && acceptedUser) {
        setMyNetwork((prev) => [...prev, acceptedUser]);
      }
    } catch (error) {
      console.log(error);
      setloading(false);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      {/* PROFILE SECTION START */}
      <ProfileSection></ProfileSection>
      {/* PROFILE SECTION END */}

      {/* SECTION 1 START  */}
      <SearchFilters
        showMobileFilter={showMobileFilter}
        setShowMobileFilter={setShowMobileFilter}
        onSearchChange={handleSearchChange}
      ></SearchFilters>
      {/* SECTION 1 END  */}

      <div className="w-full">
        {/* Tabs Header */}
        <div className="flex flex-wrap justify-between gap-2 sm:gap-4 mt-11 mb-6 bg-gray-200 rounded-[10px] w-full">
          {TabNames.map((val, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(`${val.TabLink}`)}
              className={`flex-1 min-w-[100px] text-[15px] sm:text-[18px] font-Urbanist py-2.5 md:py-2 px-2.5 md:px-4 rounded-[7px] font-semibold text-center transition duration-200 items-center cursor-pointer relative ${
                activeTab === `${val.TabLink}`
                  ? "bg-PurpleColor text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              <span>{val.name}</span>
              {val.TabLink === "pending" && PendinNetwork.length > 0 && (
                <span className="text-[11px]  absolute bg-red-600 ml-[4px] px-[6px] pt-[1px] text-white rounded-full font-bold">
                  {PendinNetwork.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        {activeTab === "myNetwork" && (
          // <section className="flex flex-col gap-7 sm:gap-10 items-center sm:items-start">
          //   <h1 className="text-[26px] mt-5 font-Urbanist text-[#f5f5f5] bg-PurpleColor w-max px-5 rounded-[7px] sm:text-[30px] font-[700]">
          //     My Network
          //   </h1>
          //   <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
          //     {loading ? (
          //       <Spinner style={"w-14 h-20 text-PurpleColor"} />
          //     ) : (
          //       (() => {
          //         const filtered = MyNetwork.filter((user) =>
          //           `${user.first_name} ${user.last_name} ${user.location} ${user.preferred_investment_type}`
          //             .toLowerCase()
          //             .includes(searchTerm.toLowerCase())
          //         );
          //         return filtered.length > 0 ? (
          //           filtered.map((user) => (
          //             <AddToNetwork
          //               key={user.id}
          //               id={user.id}
          //               InvesImage={user.headshot}
          //               InvesUserName={user.first_name + " " + user.last_name}
          //               InvesDesc={user.title}
          //               location={user.location}
          //               propertyTypes={user.preferred_investment_type}
          //               memberSince={getJoinYear(user.created_at)}
          //               email={user.email}
          //               phone={user.phone}
          //               showModal={showModal}
          //               setShowModal={setShowModal}
          //               onReject={handleReject}
          //               onViewProfile={() => {
          //                 setSelectedUser({ user: user, type: "myNetwork" });
          //                 setShowModal(true);
          //               }}
          //               type={"myNetwork"}
          //             />
          //           ))
          //         ) : (
          //           <div className="text-black font-Inter font-semibold">
          //             No Connections Found
          //           </div>
          //         );
          //       })()
          //     )}
          //   </div>
          // </section>
          <OurNetwork
            loading={loading}
            AddNetwork={AddNetwork}
            searchTerm={searchTerm}
            getJoinYear={getJoinYear}
            showModal={showModal}
            setShowModal={setShowModal}
            handleReject={handleReject}
            MyNetwork={MyNetwork}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            type={type}
          />
        )}

        {activeTab === "addToNetwork" && (
          <AddtoNetworkSec
            loading={loading}
            AddNetwork={AddNetwork}
            searchTerm={searchTerm}
            getJoinYear={getJoinYear}
            showModal={showModal}
            setShowModal={setShowModal}
            handleReject={handleReject}
            AddtoNetwork={AddtoNetwork}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            type={type}
          />
        )}

        {activeTab === "pending" && (
          <OurRequest
            loading={loading}
            PendinNetwork={PendinNetwork}
            PendingRequest={PendingRequest}
            searchTerm={searchTerm}
            getJoinYear={getJoinYear}
            showModal={showModal}
            setShowModal={setShowModal}
            handleReject={handleReject}
            AddtoNetwork={AddtoNetwork}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            type={type}
          ></OurRequest>
        )}
      </div>

      
      {type === "pending" && (
        <PendingUserModal
          user={selectedUser}
          id={selectedUser.id}
          onReject={handleReject}
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedUser(null);
          }}
          type={type}
        />
      )}
    </>
  );
};

export default MyNetwork2;
