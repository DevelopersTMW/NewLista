import axios from "axios";
import { Select } from "@headlessui/react";
import { useEffect, useState } from "react";

// IMAGES
import fade from "../../../assets/fade.png";
import MyNetwork from "../../../assets/MyNetwork.jpg";
import ResetImage from "../../../assets/ResetImage.png";
import SortIcon from "../../../assets/SortIcon1.1.png";
import MessageIcon2 from "../../../assets/MessageIcon2.png";
import InvestorIcon1 from "../../../assets/InvestorIcon1.png";
import CallIcon from "../../../assets/CallIcon.png";
import AccountSettingImage from "../../../assets/AccountSettingImage.png";

// COMPONENTS
import AddToNetwork from "../../../Components/Cards/AddToNetwork/AddToNetwork";
import ProfileModal from "../../../Components/ProfileModal/ProfileModal";
import Spinner from "../../../Components/Spinner/Spinner";
import SearchFilters from "./SearchFilters";

const BackgroundImages = {
  backgroundImage: `url(${MyNetwork})`,
  backgroundPosition: "5%",
};

const TabNames = [
  { name: "My Network", TabLink: "myNetwork" },
  { name: "Discover", TabLink: "addToNetwork" },
  { name: "Pending", TabLink: "pending" },
];

const MyNetwork2 = () => {
  // KEYS
  const ApiKey = import.meta.env.VITE_API_KEY;
  // const tokens = localStorage.getItem("token");
  const tokens = "51|Sebgg4VbS0sXkSkYKoaumnk1BDj6KR8lOMKZKYz737ee0329";

  const [loading, setloading] = useState(false);

  // FILTER
  const [searchTerm, setSearchTerm] = useState("");

  // SAVE API DATA
  const [AddNetwork, setAddNetwork] = useState([]);
  const [MyNetwork, setMyNetwork] = useState([]);
  const [PendinNetwork, setPendingNetwork] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("myNetwork");
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  // GET SEARCH VALUE
  const handleSearchChange = (value) => {
    console.log("Live value in parent:", value);
    setSearchTerm(value);
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
        console.log(Data.received_requests);
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
            Authorization: `Bearer ${tokens}
`,
          },
        }
      );
      const Data = response.data;
      console.log(Data);
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
            Authorization: `Bearer ${tokens}

`,
          },
        }
      );
      const Data = response.data;
      console.log(Data);
    } catch (error) {
      console.log(error);
      setloading(false);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      {/* BANNER START  */}
      <section className=" py-5">
        <div
          style={BackgroundImages}
          className="relative flex items-center justify-center overflow-hidden rounded-[10px]"
        >
          <img className="absolute -top-[40%]  w-[100%]" src={fade} alt="" />
          <h1 className="font-Inter font-bold text-[35px]  sm:text-[43px] text-white  text-center py-16 relative ">
            My Networks
          </h1>
        </div>
      </section>
      {/* BANNER END   */}

      {/* PROFILE SECTION START */}
      <section className="flex flex-col items-center gap-0 sm:gap-7 sm:flex-row ">
        <div className=" z-10 relative py-3 ml-3 sm:py-5 sm:w-[20%]">
          <img
            className="border-solid  border-PurpleColor w-[90%] h-[100%] border-[3px]  rounded-full"
            src={AccountSettingImage}
            alt=""
          />
        </div>

        <div className="flex items-center gap-2 flex-col sm:items-start sm:gap-2">
          <h4 className="font-Inter font-bold text-[35px] sm:text-[43px]">
            {/* {user.first_name + " " + user.last_name} */ "John"}
          </h4>
          <h6 className="font-Inter text-[18px] font-[500] text-center sm:text-start">
            Director Manager | Arme Properties
          </h6>
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:items-start sm:gap-5 ">
            <li className="flex gap-2 justify-center items-center">
              <img className="w-4 h-4 " src={InvestorIcon1} alt="" />
              <p className="font-Inter text-[14px] text-Paracolor font-[600]">
                New York
              </p>
            </li>
            <li className="flex gap-2 justify-center items-center">
              <img className="w-4 h-4 " src={MessageIcon2} alt="" />
              <p className="font-Inter text-[14px] text-Paracolor font-[600]">
                johndoe@gmail.com
              </p>
            </li>
            <li className="flex gap-2 -mt-2 sm:mt-0 justify-center items-center">
              <img className="w-4 h-4" src={CallIcon} alt="" />
              <p className="font-Inter text-[14px] text-Paracolor font-[600]">
                (224) 523 321
              </p>
            </li>
          </ul>
        </div>
      </section>
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
              className={`flex-1 min-w-[100px] text-[15px] sm:text-[18px] font-Urbanist py-2.5 md:py-2 px-2.5 md:px-4 rounded-[7px] font-semibold text-center transition duration-200 cursor-pointer ${
                activeTab === `${val.TabLink}`
                  ? "bg-PurpleColor text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {val.name}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        {activeTab === "myNetwork" && (
          <section className="flex flex-col gap-7 sm:gap-10 items-center sm:items-start">
            <h1 className="text-[26px] mt-5 font-Urbanist text-[#f5f5f5] bg-PurpleColor w-max px-5 rounded-[7px] sm:text-[30px] font-[700]">
              My Network
            </h1>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {loading ? (
                <div className="flex justify-center items-center">
                  <Spinner style={"w-14 h-20 text-PurpleColor"} />
                </div>
              ) : MyNetwork.length > 0 ? (
                MyNetwork.map((user) => (
                  <AddToNetwork
                    key={user.id}
                    id={user.id}
                    InvesImage={user.headshot}
                    InvesUserName={user.first_name + " " + user.last_name}
                    InvesDesc={user.title}
                    location={user.location}
                    propertyTypes={user.preferred_investment_type}
                    memberSince={getJoinYear(user.created_at)}
                    email={user.email}
                    phone={user.phone}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    onReject={handleReject}
                    onViewProfile={() => {
                      setSelectedUser(user);
                      setShowModal(true);
                    }}
                    type={"myNetwork"}
                  />
                ))
              ) : (
                <div className="text-black font-Inter font-semibold">
                  No Connections
                </div>
              )}
            </div>
          </section>
        )}

        {activeTab === "addToNetwork" && (
          <section className="flex flex-col gap-7 sm:gap-10 items-center sm:items-start">
            <h1 className="text-[26px] mt-5 font-Urbanist text-[#f5f5f5] bg-PurpleColor w-max px-5 rounded-[7px] sm:text-[30px] font-[700]">
              Add To Network
            </h1>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {loading ? (
                <div className="flex justify-center items-center">
                  <Spinner style={"w-14 h-20 text-PurpleColor"} />
                </div>
              ) : AddNetwork.length > 0 ? (
                AddNetwork.map((user) => (
                  <AddToNetwork
                    key={user.id}
                    id={user.id}
                    InvesImage={user.headshot}
                    InvesUserName={user.first_name + " " + user.last_name}
                    InvesDesc={user.title}
                    location={user.location}
                    propertyTypes={user.preferred_investment_type}
                    memberSince={getJoinYear(user.created_at)}
                    email={user.email}
                    phone={user.phone}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    onReject={handleReject}
                    onViewProfile={() => {
                      setSelectedUser(user);
                      setShowModal(true);
                    }}
                    AddtoNetwork={AddtoNetwork}
                    type={"addToNetwork"}
                  />
                ))
              ) : (
                <div className="text-black font-Inter font-semibold">
                  Not Found
                </div>
              )}
            </div>
          </section>
        )}

        {activeTab === "pending" && (
          <section className="flex flex-col gap-7 sm:gap-10 items-center sm:items-start">
            <h1 className="text-[26px] mt-5 font-Urbanist text-[#f5f5f5] bg-PurpleColor w-max px-5 rounded-[7px] sm:text-[30px] font-[700]">
              Pending Requests
            </h1>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {loading ? (
                <div className="flex justify-center items-center">
                  <Spinner style={"w-14 h-20 text-PurpleColor"} />
                </div>
              ) : PendinNetwork.length > 0 ? (
                PendinNetwork.map((user) => (
                  <AddToNetwork
                    key={user.id}
                    id={user.id}
                    InvesImage={user.from_user.headshot}
                    InvesUserName={
                      user.from_user.first_name + " " + user.from_user.last_name
                    }
                    InvesDesc={user.from_user.title}
                    location={user.from_user.location}
                    propertyTypes={user.from_user.preferred_investment_type}
                    memberSince={getJoinYear(user.created_at)}
                    email={user.from_user.email}
                    phone={user.from_user.phone}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    onReject={handleReject}
                    onViewProfile={() => {
                      setSelectedUser(user);
                      setShowModal(true);
                    }}
                    PendingRequest={PendingRequest}
                    type={"pending"}
                  />
                ))
              ) : (
                <div className="text-black font-Inter font-semibold">
                  No pending requests.
                </div>
              )}
            </div>
          </section>
        )}
      </div>

      {selectedUser && (
        <ProfileModal
          user={selectedUser}
          id={selectedUser.id}
          onReject={handleReject}
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedUser(null);
          }}
        />
      )}
    </>
  );
};

export default MyNetwork2;
