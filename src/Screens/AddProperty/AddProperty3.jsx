import React from "react";
// COMPONENTS
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
// IMAGES
import AddPropertyBanner from "../../assets/AddPropertyBanner1.1.jpg";

const AddProperty3 = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* BANNER START  */}
      <section>
        <div>
          <img
            className="h-[40vh] object-cover w-[100%]"
            src={AddPropertyBanner}
            alt=""
          />
        </div>
      </section>
      {/* BANNER END   */}


      {/* PROPERTY FORM SECTION */}
      <section>
                
      </section>
      {/* PROPERTY FORM SECTION */}




      <Footer></Footer>
    </>
  );
};

export default AddProperty3;
