import React, { useEffect, useState } from "react";
// IMAGES
import DashboardIcon1_1 from "../../../assets/DashboardIcon1.1.png";
import DashboardIcon5_1 from "../../../assets/DashboardIcon5.1.png";
import DashboardIcon6_1 from "../../../assets/DashboardIcon6.1.png";
import DashboardIcon2_1 from "../../../assets/DashboardIcon2.1.png";
import DashboardIcon4_1 from "../../../assets/DashboardIcon4.1.png";
import DashboardIcon3_1 from "../../../assets/DashboardIcon3.1.png";
import Spinner from "../../../Components/Spinner/Spinner";
import axios from "axios";
import { LogIn } from "lucide-react";

const ListItem = [
  {
    metric: "👀 Total Listing Views",
  },
  {
    metric: "📩 Inquiries Received",
  },
  {
    metric: "💰 Offers Made & Received",
  },
  {
    metric: "🤝 New Network Connections",
  },
  {
    metric: "📊 Featured Listing Views",
  },
  {
    metric: "📢 Social Shares",
  },
];

const Analytics = () => {
  const token = localStorage.getItem("token");
  const ApiKey = import.meta.env.VITE_API_KEY;

  const [Loading, setLoading] = useState(false);
  const [Analytics, setAnalytics] = useState([]);

  useEffect(() => {
    const FindAnalytics = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${ApiKey}/analytics`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response);
        setAnalytics(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    FindAnalytics();
  }, []);

  return (
    <>
      <section className="py-6 px-2 sm:px-0">
        {/* PAGE TITTLE  */}
        <div className="flex justify-between">
          <h1 className="font-Urbanist text-[#222222] text-[30px] font-[700]">
            Analytics
          </h1>
        </div>
      </section>

      {!Loading ? (
        <div className="flex flex-col sm:flex-row gap-5 px-2 sm:px-0">
          <section className="sm:w-[100%]">
            {/* CARD SECTION  */}
            <div className="grid grid-cols-3 gap-5 ">
              {/* CARD 1 */}
              <div className="w-[90%] flex flex-col justify-start py-8 bg-white px-5 gap-3   sm:w-[95%] rounded-[14px]">
                <div className="flex justify-between items-center">
                  <span>
                    <h4 className="text-[15px] font-Urbanist font-[500] text-[#666666]">
                      Standard Listings Views
                    </h4>
                    <h1 className="font-Urbanist text-[#222222] text-[35px] font-[700]">
                      {Analytics.stadard_listing_views}
                    </h1>
                  </span>
                  <span>
                    <img className="" src={DashboardIcon1_1} alt="" />
                  </span>
                </div>
              </div>
              <div className="w-[90%] flex flex-col justify-start py-8 bg-white px-5 gap-3   sm:w-[95%] rounded-[14px]">
                <div className="flex justify-between items-center">
                  <span>
                    <h4 className="text-[15px] font-Urbanist font-[500] text-[#666666]">
                      Featured Listings Views
                    </h4>
                    <h1 className="font-Urbanist text-[#222222] text-[35px] font-[700]">
                      {Analytics.featured_listing_views}
                    </h1>
                  </span>
                  <span>
                    <img className="" src={DashboardIcon3_1} alt="" />
                  </span>
                </div>
              </div><div className="w-[90%] flex flex-col justify-start py-8 bg-white px-5 gap-3   sm:w-[95%] rounded-[14px]">
                <div className="flex justify-between items-center">
                  <span>
                    <h4 className="text-[15px] font-Urbanist font-[500] text-[#666666]">
                      Off Market Listings Views
                    </h4>
                    <h1 className="font-Urbanist text-[#222222] text-[35px] font-[700]">
                      {Analytics.off_listing_views}
                    </h1>
                  </span>
                  <span>
                    <img className="" src={DashboardIcon5_1} alt="" />
                  </span>
                </div>
              </div>
              
              {/* CARD 2 */}
              <div className="w-[90%] flex flex-col justify-start bg-white px-5 gap-3 py-8  sm:w-[95%] rounded-[14px]">
                <div className="flex justify-between items-center">
                  <span>
                    <h4 className="text-[15px] font-Urbanist font-[500] text-[#666666]">
                      Received Offers
                    </h4>
                    <h1 className="font-Urbanist text-[#222222] text-[35px] font-[700]">
                      {Analytics.offers_received}
                    </h1>
                  </span>
                  <span>
                    <img src={DashboardIcon2_1} alt="" />
                  </span>
                </div>
              </div>
              {/* CARD 3 */}
              <div className="w-[90%] flex flex-col justify-between bg-white px-5 gap-3 py-8  sm:w-[95%] rounded-[14px]">
                <div className="flex justify-between items-center">
                  <span>
                    <h4 className="text-[15px] font-Urbanist font-[500] text-[#666666]">
                      Accepted Offers
                    </h4>
                    <h1 className="font-Urbanist text-[#222222] text-[35px] font-[700]">
                      {Analytics.accepted_offers}
                    </h1>
                  </span>
                  <span>
                    <img src={DashboardIcon4_1} alt="" />
                  </span>
                </div>
              </div>
              <div className="w-[90%] flex flex-col justify-between bg-white px-5 gap-3 py-8  sm:w-[95%] rounded-[14px]">
                <div className="flex justify-between items-center">
                  <span>
                    <h4 className="text-[15px] font-Urbanist font-[500] text-[#666666]">
                      Pending Offers
                    </h4>
                    <h1 className="font-Urbanist text-[#222222] text-[35px] font-[700]">
                      {Analytics.pending_offers}
                    </h1>
                  </span>
                  <span>
                    <img src={DashboardIcon6_1} alt="" />
                  </span>
                </div>
              </div>
            </div>

            {/* TABLE SECTION  */}

            <div className="mt-10 overflow-x-auto rounded-[10px] w-[70%]">
              <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 font-Urbanist">
                <thead className="text-[14px] text-white uppercase bg-[#1E1E1E]">
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-4 rounded-tl-2xl min-w-[120px]"
                    >
                      Metric
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-4 rounded-tr-2xl min-w-[100px]"
                    >
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                    <th
                      scope="row"
                      className="px-5 py-4 text-gray-900 whitespace-nowrap text-[15px] font-semibold"
                    >
                      👀 Total Listing Views
                    </th>
                    <td className="px-4 py-4 text-[#222222] font-semibold text-[15px]">
                      {Analytics.total_listing_views}
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                    <th
                      scope="row"
                      className="px-5 py-4 text-gray-900 whitespace-nowrap text-[15px] font-semibold"
                    >
                      📩 Total Properties
                    </th>
                    <td className="px-4 py-4 text-[#222222] font-semibold text-[15px]">
                      {Analytics.total_properties}
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                    <th
                      scope="row"
                      className="px-5 py-4 text-gray-900 whitespace-nowrap text-[15px] font-semibold"
                    >
                      💰 Offers Made & Received
                    </th>
                    <td className="px-4 py-4 text-[#222222] font-semibold text-[15px]">
                      {Analytics.offers_made + Analytics.offers_received}
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                    <th
                      scope="row"
                      className="px-5 py-4 text-gray-900 whitespace-nowrap text-[15px] font-semibold"
                    >
                      🤝 Total Network Connections
                    </th>
                    <td className="px-4 py-4 text-[#222222] font-semibold text-[15px]">
                      {Analytics.network_connections}
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                    <th
                      scope="row"
                      className="px-5 py-4 text-gray-900 whitespace-nowrap text-[15px] font-semibold"
                    >
                      📊 Featured Listing Views
                    </th>
                    <td className="px-4 py-4 text-[#222222] font-semibold text-[15px]">
                      {Analytics.featured_listing_views}
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                    <th
                      scope="row"
                      className="px-5 py-4 text-gray-900 whitespace-nowrap text-[15px] font-semibold"
                    >
                      📢 Social Shares
                    </th>
                    <td className="px-4 py-4 text-[#222222] font-semibold text-[15px]">
                      {Analytics.social_shares}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            {/* <div className="flex justify-between">
            <h1 className="font-Urbanist text-[#222222] text-[30px] font-[700] sm:-mt-[65px]">
              Network Insights
            </h1>
          </div> */}
            {/* <div className="flex flex-col gap-4 mt-3 sm:mt-1 w-[95%]">
            <div className="bg-white rounded-[10px] px-5 py-2.5">
              <h1 className="font-Urbanist text-[#222222] text-[18px] font-[500]">
                New Connections This Month
              </h1>
              <h3 className="font-Urbanist text-[#222222] text-[18px] font-[700]">
                24
              </h3>
            </div>
            <div className="bg-white rounded-[7px] px-5 py-2.5">
              <h1 className="font-Urbanist text-[#222222] text-[18px] font-[500]">
                Messages Sent/Received
              </h1>
              <h3 className="font-Urbanist text-[#222222] text-[18px] font-[700]">
                128 conversations
              </h3>
            </div>
            <div className="bg-white rounded-[7px] px-5 py-2.5">
              <h1 className="font-Urbanist text-[#222222] text-[18px] font-[500]">
                Top Profile Viewers
              </h1>
              <h3 className="font-Urbanist text-[#222222] text-[18px] font-[700]">
                Investor Group A (5 views)
              </h3>
            </div>
            <div className="bg-white rounded-[7px] px-5 py-2.5">
              <h1 className="font-Urbanist text-[#222222] text-[18px] font-[500]">
                Pending Connection Requests
              </h1>
              <h3 className="font-Urbanist text-[#222222] text-[18px] font-[700]">
                12
              </h3>
            </div>

          </div> */}
          </section>
        </div>
      ) : (
        <div className="flex justify-center items-center !h-[75vh]">
          <Spinner style={"w-14 h-20 text-PurpleColor z-50"} />
        </div>
      )}
    </>
  );
};

export default Analytics;
