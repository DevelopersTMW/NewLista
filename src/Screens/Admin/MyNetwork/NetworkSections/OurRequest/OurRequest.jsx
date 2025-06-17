import React, { useState, useEffect } from "react";
import AddToNetwork from "../../../../../Components/Cards/AddToNetwork/AddToNetwork";
import Spinner from "../../../../../Components/Spinner/Spinner";
import PendingUserModal from "../../../../../Components/ProfileModal/PendingUserModal";
import Pagination from "../../../../../Components/Pagination/Pagination";

const OurRequest = ({
  loading,
  PendinNetwork,
  searchTerm,
  getJoinYear,
  showModal,
  setShowModal,
  handleReject,
  setSelectedUser,
  PendingRequest,
  selectedUser,
  type,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  useEffect(() => {
    setCurrentPage(1); // Reset page when search changes
  }, [searchTerm]);

  const filtered = PendinNetwork.filter((user) =>
    `${user.from_user.first_name} ${user.from_user.last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginatedUsers = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <section className="flex flex-col gap-7 sm:gap-10 items-center sm:items-start w-full">
        <h1 className="text-[26px] mt-5 font-Urbanist text-[#f5f5f5] bg-PurpleColor w-max px-5 rounded-[7px] sm:text-[30px] font-[700]">
          My Requests
        </h1>

        <div className="flex flex-wrap gap-4 justify-center sm:justify-start w-full">
          {loading ? (
            <Spinner style={"w-14 h-20 text-PurpleColor"} />
          ) : paginatedUsers.length > 0 ? (
            paginatedUsers.map((user) => (
              <AddToNetwork
                key={user.id}
                id={user.id}
                InvesImage={user.from_user.headshot}
                InvesUserName={`${user.from_user.first_name} ${user.from_user.last_name}`}
                InvesDesc={user.from_user.title}
                location={user.from_user.address}
                propertyTypes={user.from_user.property_interests}
                memberSince={getJoinYear(user.created_at)}
                email={user.from_user.email}
                phone={user.from_user.phone}
                showModal={showModal}
                setShowModal={setShowModal}
                onReject={handleReject}
                onViewProfile={() => {
                  setSelectedUser({
                    user: user,
                    type: "pending",
                    PendingRequest: PendingRequest,
                  });
                  setShowModal(true);
                }}
                PendingRequest={PendingRequest}
                type={"pending"}
              />
            ))
          ) : (
            <div className="text-black font-Inter font-semibold">
              No Requests Found
            </div>
          )}
        </div>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </section>

      {/* Modal */}
      {selectedUser && (
        <PendingUserModal
          user={selectedUser}
          id={selectedUser.id}
          onReject={handleReject}
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedUser(null);
          }}
          type={type}
        />
      )}
    </>
  );
};

export default OurRequest;
