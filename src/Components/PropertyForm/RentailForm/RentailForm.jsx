import Inputs from "../../InputFields/Inputs";
import Selection from "../../InputFields/Selection";

const currencies = [
  "USD", "EUR", "CAD", "HKD", "ISK", "PHP", "DKK", "HUF", "CZK", "AUD", "RON",
  "SEK", "IDR", "INR", "BRL", "RUB", "HRK", "JPY", "THB", "CHF", "SGD", "PLN",
  "BGN", "TRY", "CNY", "NOK", "NZD", "ZAR", "MXN", "ILS", "GBP", "KRW", "MYR"
];

const RentailForm = ({ propertyTypeName, register }) => {
  return (
    <div className="border-[2px] rounded-[8px] px-4 border-solid border-[#ececec] mt-5 bg-[#fcfcfc] py-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          <span className="w-[100%]">
            <Selection labels={"Currency"} defaultOption={"Select Your Currency"} Options={currencies}></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Monthly Rental*"}
              type={"text"}
              placeholder={"Ex: 10000"}
              name={"custom_fields.MonthlyRental"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Building Size"}
              defaultOption={"Select Size"}
              Options={["Sq Ft" , "Sq M"]}
              name={"custom_fields.BuildingSize"}
              register={register}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"‎"}
              type={"text"}
              placeholder={"Ex: 10000"}
              name={"custom_fields.BuildingSizeNumber"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Building Levels"}
              type={"text"}
              placeholder={"Ex:1"}
              name={"custom_fields.BuildingLevels"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Year Built"}
              type={"number"}
              placeholder={"2020"}
              name={"custom_fields.YearBuilt"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Land Scape Size"}
              defaultOption={"Select Size"}
              Options={["Sq Ft" , "Sq M"]}
              name={"custom_fields.LandScape"}
              register={register}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"‎ "}
              type={"number"}
              placeholder={"Ex:1"}
              name={"custom_fields.LandScapeNumber"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"‎ "}
              defaultOption={"Select"}
              Options={["Acres" , "Hectacres"]}
              name={"custom_fields.LandScapeAcres"}
              register={register}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"‎ "}
              type={"number"}
              placeholder={"Ex:1"}
              name={"custom_fields.LandScapeNumber2"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Outdoor Signage Available"}
              defaultOption={"Select"}
              Options={["Yes" , "No"]}
              name={"custom_fields.Outdoor-Signage"}
              register={register}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Parking Spaces"}
              type={"number"}
              placeholder={"Ex:1"}
              name={"custom_fields.Parking-Space"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Number of Units"}
              type={"number"}
              placeholder={"Ex:1"}
              name={"custom_fields.NumberOfUnits"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Building Class"}
              defaultOption={"Select Class"}
              Options={["A" , "B" , "C" , "D"]}
              name={"custom_fields.BuildingClass"}
              register={register}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Percentage Leased (%)"}
              type={"number"}
              placeholder={"Ex:75"}
              name={"custom_fields.Percentage-Lease"}
              register={register}
            ></Inputs>
          </span>
        </div>
    </div>
  );
};

export default RentailForm;
