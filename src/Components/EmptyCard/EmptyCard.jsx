import React from "react";
import EmptyCard from "../../assets/MyOfferPage.png";

const EmptyCards = ({ Title }) => {
  return (
    <>
      {/* PAGE TITTLE  */}
      <section id={'Off-market'} className="flex flex-col justify-center items-center py-4 text-center w-[100%]">
        <div className="flex justify-center">
          <img className="w-[100%]" src={EmptyCard} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-Urbanist font-[600] text-[#00000] text-[20px]">
            {Title}
          </h1>
        </div>
      </section>
    </>
  );
};

export default EmptyCards;
