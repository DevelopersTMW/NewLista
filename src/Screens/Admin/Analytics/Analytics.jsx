import React from "react";
// IMAGES
import DashboardIcon1_1 from "../../../assets/DashboardIcon1.1.png";
import DashboardIcon5_1 from "../../../assets/DashboardIcon5.1.png";
import DashboardIcon6_1 from "../../../assets/DashboardIcon6.1.png";
import DashboardIcon1_11 from "../../../assets/DashboardIcon1.11.png";
import DashboardIcon1_12 from "../../../assets/DashboardIcon1.22.png";

const ListItem = [
  {
    metric: "👀 Total Listing Views",
    value: "12,450",
    change: "+18%",
    sign: "positive",
  },
  {
    metric: "📩 Inquiries Received",
    value: "38",
    change: "+22%",
    sign: "positive",
  },
  {
    metric: "💰 Offers Made & Received",
    value: "16",
    change: "-12%",
    sign: "negative",
  },
  {
    metric: "🤝 New Network Connections",
    value: "14",
    change: "+30%",
    sign: "positive",
  },
  {
    metric: "📊 Featured Listing Views",
    value: "6,230",
    change: "-15%",
    sign: "negative",
  },
  {
    metric: "📢 Social Shares",
    value: "102",
    change: "+10%",
    sign: "positive",
  },
];

const Analytics = () => {
  return (
    <>
      
        <section className="py-6 ">
          {/* PAGE TITTLE  */}
          <div className="flex justify-between">
            <h1 className="font-Urbanist text-[#222222] text-[30px] font-[700]">
              Analytics
            </h1>
          </div>
        </section>

        <div className="flex gap-5">
        <section className="w-[70%]">
          {/* CARD SECTION  */}
          <div className="flex flex-wrap gap-5 w-[] ">
            {/* CARD 1 */}
            <div className="flex flex-col justify-between bg-white px-5 gap-3 py-7 w-[40%] rounded-[14px]">
              <div className="flex justify-between items-center">
                <span>
                  <h4 className="text-[15px] font-Urbanist font-[500] text-[#666666]">
                    Featured Listings Views
                  </h4>
                  <h1 className="font-Urbanist text-[#222222] text-[35px] font-[700]">
                    6,230
                  </h1>
                </span>
                <span>
                  <img className="" src={DashboardIcon1_1} alt="" />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <img className="h-4 w-5" src={DashboardIcon1_11} alt="" />
                </span>
                <span>
                  <h4 className="text-[#00B69B] font-Urbanist font-[600] text-[15px]">
                    +15%
                  </h4>
                </span>
              </div>
            </div>
            {/* CARD 2 */}
            <div className="flex flex-col justify-between bg-white px-5 gap-3 py-7 w-[40%] rounded-[14px]">
              <div className="flex justify-between items-center">
                <span>
                  <h4 className="text-[15px] font-Urbanist font-[500] text-[#666666]">
                    New Inquiries
                  </h4>
                  <h1 className="font-Urbanist text-[#222222] text-[35px] font-[700]">
                    38
                  </h1>
                </span>
                <span>
                  <img src={DashboardIcon5_1} alt="" />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <img className="h-4 w-5" src={DashboardIcon1_11} alt="" />
                </span>
                <span>
                  <h4 className="text-[#00B69B] font-Urbanist font-[600] text-[15px]">
                    +22%
                  </h4>
                </span>
              </div>
            </div>
            {/* CARD 3 */}
            <div className="flex flex-col justify-between bg-white px-5 gap-3 py-7 w-[40%] rounded-[14px]">
              <div className="flex justify-between items-center">
                <span>
                  <h4 className="text-[15px] font-Urbanist font-[500] text-[#666666]">
                    Accepted Offers
                  </h4>
                  <h1 className="font-Urbanist text-[#222222] text-[35px] font-[700]">
                    8
                  </h1>
                </span>
                <span>
                  <img src={DashboardIcon6_1} alt="" />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <img className="h-4 w-5" src={DashboardIcon1_12} alt="" />
                </span>
                <span>
                  <h4 className="text-[#F93C65] font-Urbanist font-[600] text-[15px]">
                    -10%
                  </h4>
                </span>
              </div>
            </div>
          </div>

          {/* TABLE SECTION  */}
          <div className="mt-10 ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-[15px] text-[#fff] rounded-t-2xl font-Urbanist uppercase bg-[#1E1E1E] ">
                <tr className="">
                  <th scope="col" className="px-5 py-4.5 rounded-tl-2xl">
                    Metric
                  </th>
                  <th scope="col" className="px-4 py-4.5">
                    Value
                  </th>
                  <th scope="col" className="px-4 py-4.5 rounded-tr-3xl ">
                    Change
                  </th>
                </tr>
              </thead>
              <tbody>
                {ListItem.map((items, index) => (
                  <>
                    <tr className="bg-white border-b dark:bg-gray-800  dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 font-Urbanist "></tr>
                    <th
                      scope="row"
                      className="px-1 py-4.5 font-medium text-gray-900 whitespace-nowrap  text-[16px]"
                    >
                      {items.metric}
                    </th>
                    <td className="px-3.5 py-4.5 text-[#222222] font-[550] text-[16px]">
                      {items.value}
                    </td>
                    <td className="px-3.5 py-4.5 text-[#222222] font-[550] text-[16px] flex gap-1 items-center">
                      {items.sign === "positive" ? (
                        <div className="text-[#008316] font-[600] text-[16px] font-Urbanist">
                          {items.change}
                        </div>
                      ) : (
                        <div className="text-[#E31D1C] font-[600] text-[16px] font-Urbanist">
                          {items.change}
                        </div>
                      )}
                    </td>
                    <tr />
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="flex justify-between">
            <h1 className="font-Urbanist text-[#222222] text-[30px] font-[700] -mt-[65px]">
              Network Insights
            </h1>
          </div>
          <div className="flex flex-col gap-4 mt-1">
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

          </div>
        </section>
      </div>
    </>
  );
};

export default Analytics;
