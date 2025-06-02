import React from "react";
import MyOffer from "../../../assets/MyOfferPage.png";

const MyOffers = () => {
  return (
    <>
      {/* HEADING SECTION  */}
      <section className="py-6">
        {/* PAGE TITTLE  */}
        <div className="flex justify-between">
          <h1 className="font-Urbanist text-[#222222] text-[30px] font-[700]">
            My Offers
          </h1>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <img className="w-[85%]" src={MyOffer} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-Urbanist font-[600] text-[#00000] text-[18px]">
            No offers yet!
          </h3>
          <h1 className="font-Urbanist font-[600] text-[#00000] text-[20px] text-center">
            Start exploring properties and make your first deal.
          </h1>
        </div>
      </section>
    </>
  );
};

export default MyOffers;
