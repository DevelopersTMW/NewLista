import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../../../../Components/Spinner/Spinner";
import EditIcon from "../../../../../assets/EditIcon.png";
import { PencilOff, ScanSearch } from "lucide-react";
import RightSideArrow from "../../../../../assets/ListingRightSideArrow.png"
import { Link, useNavigate } from "react-router-dom";
import ConfirmationModal from "../../../../../Components/ConfirmationModal/ConfirmationModal";
import { useConfirmation } from "../../../AccountSetting/Fields/Confirmation";

const ListingTable = ({ status, propertyType, priceRange , search }) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
   // REACT HOOK FOR
    const { isOpen, confirm, handleConfirm, handleCancel } = useConfirmation();

  const ApiKey = import.meta.env.VITE_API_KEY;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${ApiKey}/user-properties`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setListings(res.data?.data || []);
      } catch (err) {
        console.error("Error fetching listings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

 const applyFilters = (properties) => {
  return properties.filter((item) => {
    const matchesStatus = status
      ? item.listing_status?.toLowerCase() === status.toLowerCase()
      : true;

    const matchesType = propertyType
      ? item.property_type?.toLowerCase() === propertyType.toLowerCase()
      : true;

    const price = Number(item.sale_price);
    const matchesPrice = (() => {
      if (!priceRange || isNaN(price)) return true;

      switch (priceRange) {
        case "Under $250K": return price < 250000;
        case "$250K – $500K": return price >= 250000 && price <= 500000;
        case "$500K – $1M": return price >= 500000 && price <= 1000000;
        case "$1M – $2.5M": return price >= 1000000 && price <= 2500000;
        case "$2.5M – $5M": return price >= 2500000 && price <= 5000000;
        case "$5M – $10M": return price >= 5000000 && price <= 10000000;
        case "$10M – $25M": return price >= 10000000 && price <= 25000000;
        case "$25M – $50M": return price >= 25000000 && price <= 50000000;
        case "Over $50M": return price > 50000000;
        default: return true;
      }
    })();

    const matchesSearch = search
      ? item.property_name?.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchesStatus && matchesType && matchesPrice && matchesSearch;
  });
};


  const filteredListings = applyFilters(listings);
  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);
  const currentListings = filteredListings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // EDIT PROPERTY
  const handleConfirmation = async (id) => {
    const confirmed = await confirm();
    if (confirmed) {
      navigate(`/create-property?editId=${id}`);
    }
  };
  useEffect(() => {
  setCurrentPage(1);
}, [status, propertyType, priceRange, search]);


  return (
    <>
      <div className="pt-8 sm:px-4 md:px-7 bg-white w-[98%] rounded-b-[13px] xl:w-full overflow-x-auto h-[85vh]">
        {loading ? (
          <div className="flex justify-center items-center !h-[75vh]">
            <Spinner style={"w-14 h-20 text-PurpleColor z-50"} />
          </div>
        ) : (
          <table className="min-w-[880px] w-full text-sm text-left rtl:text-right text-gray-500 bg-[#fcfcfc]">
            <thead className="text-[13.5px] tracking-[1.5px] sm:tracking-normal sm:text-[14px] md:text-[15px] text-white font-Urbanist uppercase bg-[#1E1E1E]">
              <tr>
                <th className="px-6 py-4.5 rounded-tl-2xl">
                  Property Name 
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
                      <Link
                        onClick={() => {
                          handleConfirmation(item.id);
                        }}
                      >
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
          <PencilOff
            strokeWidth={1.75}
            className="size-16 text-red-600  bg-amber-50 px-3.5 py-3.5 rounded-full"
          />
        }
        style="bg-red-600"
      />
    </>
  );
};

export default ListingTable;
