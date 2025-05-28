import Inputs from "../../InputFields/Inputs";
import Selection from "../../InputFields/Selection";

const RentailForm = ({ propertyTypeName }) => {
  return (
    <div className="border-[2px] rounded-[8px] px-4 border-solid border-[#ececec] mt-5 bg-[#fcfcfc] py-8">
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <span className="w-[100%]">
            <Selection labels={"Currency"} defaultOption={"USD"}></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Monthly Rental*"}
              type={"text"}
              placeholder={"Ex: 10000"}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Building Size"}
              defaultOption={"Sq Ft"}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"‎"}
              type={"text"}
              placeholder={"Ex: 10000"}
            ></Inputs>
          </span>
        </div>
        <div className="flex gap-8">
          <span className="w-[100%]">
            <Inputs
              labels={"Building Levels"}
              type={"text"}
              placeholder={"Ex:1"}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Year Built"}
              type={"number"}
              placeholder={"2020"}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Land Scape"}
              defaultOption={"Multiple"}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"‎ "}
              type={"number"}
              placeholder={"Ex:1"}
            ></Inputs>
          </span>
        </div>
        <div className="flex gap-8">
          <span className="w-[100%]">
            <Selection
              labels={"‎ "}
              defaultOption={"Acres"}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"‎ "}
              type={"number"}
              placeholder={"Ex:1"}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Outdoor Signage Available"}
              defaultOption={"Yes"}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Parking Spaces"}
              type={"number"}
              placeholder={"Ex:1"}
            ></Inputs>
          </span>
        </div>
        <div className="flex gap-8">
          <span className="w-[100%]">
            <Inputs
              labels={"Number of Units"}
              type={"number"}
              placeholder={"Ex:1"}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Building Class"}
              defaultOption={"A"}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Percentage Leased (%)"}
              type={"number"}
              placeholder={"Ex:75"}
            ></Inputs>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RentailForm;
