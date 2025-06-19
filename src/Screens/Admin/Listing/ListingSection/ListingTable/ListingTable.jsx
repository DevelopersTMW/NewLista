import React, { useEffect, useState } from "react";
import EditIcon from "../../../../../assets/EditIcon.png";
import DownloadIcon from "../../../../../assets/DownloadIcon.png";
import Spinner from "../../../../../Components/Spinner/Spinner";
import RightSideArrow from "../../../../../assets/ListingRightSideArrow.png";
import LeftSideArrow from "../../../../../assets/ListingLeftSideArrow.png";
import axios from "axios";
import { EyeClosed, FilePenLine, PencilOff, ScanSearch, UserRoundCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useConfirmation } from "../../../AccountSetting/Fields/Confirmation";
import ConfirmationModal from "../../../../../Components/ConfirmationModal/ConfirmationModal";

const ListingTable = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const { isOpen, confirm, handleConfirm, handleCancel } = useConfirmation();

  const ApiKey = import.meta.env.VITE_API_KEY;
  const token = localStorage.getItem("token");
  const navigate = useNavigate()

  useEffect(() => {
    const GetListing = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${ApiKey}/user-properties`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setListings(response.data?.data || []);
        console.log(response.data);
        
      } catch (error) {
        console.error("Fetch listing error:", error);
      } finally {
        setLoading(false);
      }
    };

    GetListing();
  }, []);



  const totalPages = Math.ceil(listings.length / itemsPerPage);
  const currentListings = listings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  // EDIT PROPERTY 
  const handleConfirmation = async (id)=>{
     const confirmed = await confirm();
     if(confirmed){
      navigate(`/create-property?editId=${id}`)
     }
  }


  return (
    <>
      <div className="pt-8 sm:px-4 md:px-7 bg-white w-[98%] rounded-b-[13px] xl:w-full overflow-x-auto h-[80vh]">
        {loading ? (
          <div className="flex justify-center items-center !h-[75vh]">
            <Spinner style={"w-14 h-20 text-PurpleColor z-50"} />
          </div>
        ) : (
          <table className="min-w-[880px] w-full text-sm text-left rtl:text-right text-gray-500 bg-[#fcfcfc]">
            <thead className="text-[13.5px] tracking-[1.5px] sm:tracking-normal sm:text-[14px] md:text-[15px] text-white font-Urbanist uppercase bg-[#1E1E1E]">
              <tr>
                <th className="px-6 py-4.5 rounded-tl-2xl">
                  Property Name & Address
                </th>
                <th className="px-6 py-4.5">Type</th>
                <th className="px-6 py-4.5">Price</th>
                <th className="px-6 py-4.5">Status</th>
                <th className="px-6 py-4.5">Date Listed</th>
                <th className="px-6 py-4.5 rounded-tr-3xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentListings.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center bg-white py-10 text-gray-500 font-Urbanist text-[16px]"
                  >
                    No listings found.
                  </td>
                </tr>
              ) : (
                currentListings.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b border-gray-200 hover:bg-gray-50 font-Urbanist"
                  >
                    <th
                      scope="row"
                      className="w-[30%] text-[14px] px-4 py-6 font-medium text-gray-900 whitespace-nowrap sm:text-[14px] md:text-[16px]"
                    >
                      {item.property_name}
                    </th>
                    <td className="w-[15%] text-center px-3.5 py-6 text-[#222222] font-[550] text-[16px]">
                      {item.property_type}
                    </td>
                    <td className="w-[15%] text-center px-3.5 py-6 text-[#222222] font-[550] text-[16px]">
                      {`$${Number(item.sale_price).toLocaleString("en-US")}`}
                    </td>
                    <td className="px-3.5 py-6 text-[#222222] font-[550] text-[16px] flex gap-1 items-center mt-3 ml-2 sm:ml-0 sm:mt-2.5">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          item.listing_status === "Available"
                            ? "bg-[#02E327]"
                            : item.listing_status === "Loss"
                            ? "bg-[#E31D1C]"
                            : "bg-[#4379EE]"
                        }`}
                      ></div>
                      {item.listing_status}
                    </td>
                    <td className="w-[35%] sm:w-[20%] px-3.5 py-6 text-[#222222] font-[550] text-[16px]">
                      {new Date(item.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-6 text-[#222222] font-[550] text-[16px] flex gap-3 justify-center">
                      <Link onClick={()=>{handleConfirmation(item.id)}}>
                        <img
                          className="w-5.5 h-5.5"
                          src={EditIcon}
                          alt="Edit"
                        />
                      </Link>
                      <Link to={`/properties/${item.id}`}>
                        <ScanSearch />
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination Section */}
      {!loading && listings.length > 0 && (
        <section className="mt-3 flex justify-between items-center px-5">
          <div>
            <h1 className="font-Urbanist font-semibold text-[16px] sm:text-[17px]">
              Page {currentPage} of {totalPages || 1}
            </h1>
          </div>
          <div>
            <div className="border-[1px] border-solid border-[#222222] flex rounded-[7px]">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="border-r-[1px] border-solid border-[#BBBBBB] px-3.5 py-2 disabled:opacity-50 cursor-pointer"
              >
                <img className="w-2.5 h-3" src={RightSideArrow} alt="Next" />
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
                  alt="Previous"
                />
              </button>
            </div>
          </div>
        </section>
      )}

      <ConfirmationModal
        isOpen={isOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        message="Do you want to Edit Property?"
        confirmLabel="Yes"
        icon={
          <PencilOff  strokeWidth={1.75} className="size-16 text-red-600  bg-amber-50 px-3.5 py-3.5 rounded-full" />
        }
        style="bg-red-600"
      />
    </>
  );
};

export default ListingTable;
