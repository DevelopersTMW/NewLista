import React from "react";
import { Link } from "react-router-dom";
import HomeSec1_1 from "../../../assets/HomeSec1.1.png";
import HomeSec1_2 from "../../../assets/HomeSec1.2.png";
import HomeSec1_3 from "../../../assets/HomeSec1.3.png";

const HomeSection1 = ({ token }) => {
  const CardDetails = [
    {
      image: HomeSec1_1,
      name: "List & Promote",
      desc: "Post properties and attract serious buyers.",
      buttonName: "Add a Property",
      ButtonLink: "/create-property",
    },
    {
      image: HomeSec1_2,
      name: "Connect & Collaborate",
      desc: "Build your network and form partnerships.",
      buttonName: "Create a Network",
      ButtonLink: token ? "/admin/network" : "/login",
    },
    {
      image: HomeSec1_3,
      name: "Search for Off-Market Properties",
      desc: "Access off-market deals and make direct offers.",
      buttonName: "Find Off Market Properties",
      ButtonLink: token ? "/view-property" : "/pricing",
    },
  ];

  return (
    <>
      <section className="flex flex-col sm:items-center justify-center gap-8 px-6 sm:px-0 py-20 sm:py-14 sm:gap-10 w-[100%] xl:w-[97%] 2xl:w-[85%] 2xl:py-16">
        <div className="flex flex-col justify-center items-center sm:w-[80%] md:w-[80%] lg:w-[69%] xl:w-[63%] sm:text-center">
          <h1 className="text-[32px] leading-[38px] font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] sm:leading-[43px] md:text-[39px] md:leading-[45px]">
            Seamless Real Estate Investing Starts Here
          </h1>
          <p className="text-[14px] font-Inter font-medium text-pretty text-Paracolor mt-2 sm:text-md/8 md:text-[16px]">
            NewLista connects real estate investors—buyers and sellers—on one
            platform built to list properties, showcase exclusive off-market
            deals, grow your network, and close more deals.
          </p>
        </div>
        <div className="flex flex-col sm:flex-wrap sm:flex-row gap-8 sm:gap-4 sm:w-[90%] md:w-[84%] md:gap-3 lg:w-[84%] ">
          {CardDetails.map((items, index) => {
            return (
              <div
                key={index}
                className="sm:w-[48.5%] lg:w-[32%] bg-PurpleColor rounded-[10px] px-5.5 py-8 flex flex-col gap-4 min-h-[200px] justify-between"
              >
                <div>
                  <img className="sm:w-[30%]" src={items.image} alt="" />{" "}
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-textColor font-Inter font-semibold text-[23px] leading-[26px]">
                    {items.name}
                  </h1>
                  <p className="text-textColor font-Inter text-[15px] sm:text-[16px]">
                    {items.desc}
                  </p>
                </div>
                <div className="mt-3">
                  <Link to={`${items.ButtonLink}`}>
                    <button className="w-[100%] text-[14px] border-[1px] border-solid border-textColor py-2.5 text-textColor font-Inter rounded-[6px] cursor-pointer hover-btn hover-btn-purple hover:border-black sm:text-[16px]">
                      <span> {items.buttonName}</span>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HomeSection1;
