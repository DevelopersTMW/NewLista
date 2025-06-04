import React from "react";
// COMPONENTS
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import MiniFooter from "../../Components/Footer/MiniFooter";
import Testimonials from "../../Components/Testimonials/Testimonials";

// IMAGES
import BgImage from "../../assets/AboutUs1.1.jpg";
import AboutUs1_2 from "../../assets/AboutUs1.2.jpg";
import AboutUs1_3 from "../../assets/AboutUs1.3.jpg";
import Testimonials1 from "../../assets/Testimonials1.png";
import AboutIcon1_1 from "../../assets/AboutIcon1.1.png";
import AboutIcon1_2 from "../../assets/AboutIcon1.2.png";
import AboutIcon1_3 from "../../assets/AboutIcon1.3.png";
import RevImage1 from "../../assets/RevImage1.jpg";
import RevImage2 from "../../assets/RevImage2.jpg";
import RevImage3 from "../../assets/RevImage3.jpg";
// BACKGORUND
const AboutBgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgb(0 0 0 / 79%)",
  backgroundBlendMode: "color",
  backgroundPosition: "bottom",
};

const AboutUs = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* About Us Start */}
      <section style={AboutBgImage} className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-10 px-6 py-28 sm:px-14 sm:py-28 md:px-10 lg:px-20 md:py-28 2xl:w-[95%]">
          <div className="hidden md:flex w-[50%] md:justify-center lg:justify-center">
            <img
              className=" h-[330px] w-[260px] md:w-[290px] md:h-[360px] lg:w-[360px] lg:h-[410px] xl:w-[400px] xl:h-[440px] object-cover rounded-[15px] "
              src={AboutUs1_2}
              alt=""
            />
            <img
              className="w-[200px] h-[200px] md:w-[210px] md:h-[220px] lg:w-[250px] lg:h-[260px] xl:w-[280px] xl:h-[280px] border-solid border-[#161616] border-[5px] mt-48 md:mt-64 -ml-24 md:-ml-34 lg:-ml-38 xl:-ml-48 z-index layering	rounded-[15px]"
              src={AboutUs1_3}
              alt=""
            />
          </div>
          <div className="w-[100%]  md:w-[50%] flex flex-col justify-center">
            {/* Heading  */}
            <div className="border-b-[1px] border-[#BBBBBB] border-solid pb-7">
              <h1 class="font-Urbanist font-bold text-[#ececec] text-[27px] sm:text-[30px] md:text-[33px] lg:text-[37px] xl:text-[42px] 2xl:text-[46px]">
                About NewLista
              </h1>
              <p class="mx-auto max-w-3xl  font-semibold text-pretty text-[#ececec] font-Urbanist text-[13px] sm:text-[13.5px] md:text-[14px] lg:text-[15px] xl:text-[17px]  2xl:text-[19px]">
                Discover the story behind NewLista, where a passion for real
                estate meets innovation and integrity.
              </p>
            </div>
            {/* Paragraph  */}
            <div>
              <p class="mx-auto mt-6 max-w-3xl font-medium text-pretty text-[#ececec] sm:text-md/8 text-[13px]  font-Urbanist sm:text-[13.5px] md:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px]">
                {" "}
                At NewLista, we're redefining how real estate investors connect,
                collaborate, and close deals. Our platform offers seamless
                access to off-market listings, powerful networking tools, and
                exclusive market insights. Whether you're buying, selling, or
                expanding your investment portfolio, NewLista empowers you with
                the tools and connections you need to succeed.
              </p>
            </div>
            {/* <div className="flex gap-4 mt-6">
              <span className="bg-white rounded-[6px] px-4 py-4">
                <h1 class="text-[26px] font-bold font-Inter text-PurpleColor">
                  200+
                </h1>
                <p class="mx-auto text-[18px] font-bold text-[#222222] sm:text-md font-Inter leading-[25px]">
                  Happy Customers
                </p>
              </span>
              <span className="bg-white rounded-[6px] px-4 py-4">
                <h1 class="text-[26px] font-bold font-Inter text-PurpleColor">
                  10k+
                </h1>
                <p class="mx-auto text-[18px] font-bold text-[#222222] sm:text-md font-Inter leading-[25px]">
                  Properties For Clients
                </p>
              </span>
              <span className="bg-white rounded-[6px] px-4 py-4">
                <h1 class="text-[26px] font-bold font-Inter text-PurpleColor">
                  16+
                </h1>
                <p class="mx-auto text-[18px] font-bold text-[#222222] sm:text-md font-Inter leading-[25px]">
                  Years of Experience
                </p>
              </span>
            </div> */}
          </div>
        </div>
      </section>
      {/* About Us End */}

      {/* SECTION 1 START  */}
      <section className="flex justify-center py-16 md:pt-20 md:pb-10">
        <div className="bg-[#F1ECFF] flex flex-col justify-center w-[90%] sm:w-[87%] gap-3  md:gap-8 rounded-[15px] px-5 sm:px-7 py-5 md:py-10 lg:py-14 md:w-[90%] lg:w-[88%] xl:px-10 xl:w-[84%] 2xl:w-[72%]">
          <div className="flex flex-col  text-center">
            <h1 className="text-[27px] font-[700] font-Urbanist  text-[#1E1E1E]  md:text-[37px] xl:text-[42px] leading-[48px] 2xl:text-[44px]">
              Our Services
            </h1>
          </div>
          <div className="flex flex-col flex-wrap">
            {/* CARD 1 PART  */}
            <div className="flex flex-wrap lg:flex-nowrap gap-7">
              <div className="bg-white sm:w-[47%] lg:w-[33%] px-5 py-5 rounded-[8px] flex justify-center flex-col lg:py-7 xl:py-5  gap-3 2xl:px-6 2xl:py-8">
                <h1 className="font-semibold font-Urbanist text-[17px] md:text-[19px] xl:text-[21px] 2xl:text-[24.5px]">
                  🏢 Off-Market Listings
                </h1>
                <p className="text-[#222222] font-Inter text-[12.5px] md:text-[14px] lg:text-[13.5px] xl:text-[15px] 2xl:text-[16px]">
                  Gain access to exclusive property listings not available on
                  public platforms.
                </p>
              </div>
              <div className="bg-white px-5 sm:w-[47%] lg:w-[33%] py-5 rounded-[8px]  flex justify-center flex-col  gap-3 2xl:px-6 2xl:py-8">
                <h1 className="font-semibold font-Urbanist text-[17px] md:text-[19px] xl:text-[21px] 2xl:text-[24.5px]">
                  🔗 Real Estate Networking
                </h1>
                <p className="text-[#222222] font-Inter text-[12.5px] md:text-[14px] lg:text-[13.5px] xl:text-[15px] 2xl:text-[16px]">
                  Connect with fellow investors to build valuable relationships
                  and explore collaborative opportunities.
                </p>
              </div>
              <div className="bg-white w-[98%] lg:w-[33%] px-5 py-5 rounded-[8px] flex justify-center flex-col  gap-3 2xl:px-6 2xl:py-10">
                <h1 className="font-semibold font-Urbanist text-[17px] md:text-[19px] xl:text-[21px] 2xl:text-[24.5px]">
                  📊 Investment Insights
                </h1>
                <p className="text-[#222222] font-Inter text-[12.5px] md:text-[14px] lg:text-[13.5px] xl:text-[15px] 2xl:text-[16px]">
                  Stay informed with the latest market trends and data to make
                  strategic investment decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 1 END  */}

      {/* SECTION 2 START  */}
      <section className="flex justify-center py-0 md:py-16 ">
        <div className="flex flex-col xl:items-center justify-center gap-7 w-[87%] md:w-[90%] lg:w-[88%]  xl:w-[100%] 2xl:w-[84%]">
          <div className="flex flex-col  xl:w-[85%] ">
            <h1 className="text-[26px] sm:text-[32px] leading-[39px] font-[700] font-Urbanist  text-[#1E1E1E] md:text-[37px] sm:leading-[48px]">
              How Can We Help You?
            </h1>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-8 xl:w-[85%]">
            {/* CARD 1  */}
            <div className="sm:w-[47%] lg:w-[33%] bg-black rounded-[10px] px-5.5 py-8 flex flex-col gap-4 min-h-[190px] justify-center">
              <div>
                <img
                  className="w-[20%] sm:w-[24%] md:w-[20%] lg:w-[23%] xl:w-[21.5%]"
                  src={AboutIcon1_1}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-textColor font-Inter font-semibold text-[18px] md:text-[20px] xl:text-[23px] leading-[25px]">
                  Tailored Investment Support
                </h1>
                <p className="text-textColor font-Inter text-[12px] md:text-[13.5px] xl:text-[16px]">
                  Whether you're a first-time investor or an experienced
                  professional, we provide insights and resources to help you
                  find and secure the best opportunities.
                </p>
              </div>
            </div>
            {/* CARD 2 */}
            <div className="sm:w-[47%] lg:w-[33%] bg-black rounded-[10px] px-5.5 py-8 flex flex-col gap-4 min-h-[190px] justify-center">
              <div>
                <img
                  className="w-[20%] sm:w-[24%] md:w-[22%] lg:w-[23%] xl:w-[22.5%]"
                  src={AboutIcon1_2}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-textColor font-Inter font-semibold text-[18px] md:text-[20px] xl:text-[23px]  leading-[22px]">
                  Seamless Connections
                </h1>
                <p className="text-textColor font-Inter text-[12px] md:text-[13.5px] xl:text-[16px]">
                  Build meaningful relationships with real estate professionals,
                  buyers, and sellers through our intuitive networking tools
                  designed to foster collaboration.
                </p>
              </div>
            </div>
            {/* CARD 3 */}
            <div className="w-[98%] lg:w-[33%] bg-black rounded-[10px] px-5.5 py-8 flex flex-col gap-4 min-h-[190px] justify-center">
              <div className="w-[100px]">
                <img
                  className="w-[55%] min-[380px]:w-[60%] md:w-[60%] xl:w-[70%]"
                  src={AboutIcon1_3}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-textColor font-Inter font-semibold text-[18px] md:text-[20px] xl:text-[23px]  sm:leading-[29px] leading-[24px] ">
                  Efficient Commercial Transactions
                </h1>
                <p className="text-textColor font-Inter text-[12px] md:text-[13.5px] xl:text-[16px]">
                  From listing to closing, execute your commercial real estate
                  deals with precision on our streamlined platform. Designed
                  exclusively for commercial professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 2 END  */}

      {/* SECTION 3 START  */}
      <section className="flex justify-center py-10 md:py-0">
        <div className="flex flex-col justify-center items-center pt-3  gap-10 px-6 sm:gap-7 sm:py-5 pb-16 sm:px-8 md:px-0 lg:py-16 w-[95%] md:w-[91%] xl:w-[100%] 2xl:w-[85%] ">
          {/* CONTENT SECTION  */}
          <div className="lg:w-[87%] xl:w-[84%]">
            <h1 className="text-[27px] sm:text-[32px] leading-[39px] font-[700] font-Urbanist  text-[#1E1E1E] md:text-[37px] sm:leading-[48px]">
              What Our Clients Say
            </h1>

            <p className="text-[12.5px] sm:text-[13px] font-Inter font-medium text-pretty text-Paracolor mt-2  md:text-[14px]/5.5  ">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose NewLista for their real
              estate needs
            </p>
          </div>
          {/* CARDSECTION  */}
          <div className="flex flex-col gap-7 sm:gap-4 sm:flex-row sm:flex-wrap lg:w-[87%] xl:w-[84%] md:gap-5">
            <Testimonials
              RevTitle={""}
              RevParagraph={
                "Newlista has transformed my real estate investing. It connected me with exclusive off-market deals, including a commercial property I recently closed. The platform is efficient, easy to use, and has opened up networking and deal opportunities I never thought possible"
              }
              Stars={5}
              RevImage={RevImage1}
              UserName={"Mike O"}
              Desination={"Investor "}
            ></Testimonials>
            <Testimonials
              RevTitle={""}
              RevParagraph={
                "As a seasoned real estate investor, I'm always looking for an edge. NewLista's networking features and exclusive off-market listings have given me just that. The tailored notifications save me time, and the ability to share my own listings with a select group of professionals has led to quicker, more profitable deals. It's become an indispensable tool in my investment arsenal."
              }
              Stars={5}
              RevImage={RevImage2}
              UserName={"Charles K"}
              Desination={"Investor"}
            ></Testimonials>
            <Testimonials
              RevTitle={""}
              RevParagraph={
                "Newlista is revolutionizing how I connect with fellow real estate investors. The platform's focus on facilitating networking among professionals is a game-changer. I'm particularly excited about the potential to share and discover off-market listings exclusively with other investors. This feature alone could be invaluable for finding hidden gem properties."
              }
              Stars={5}
              RevImage={RevImage3}
              UserName={"Michael M"}
              Desination={"Investor"}
            ></Testimonials>
          </div>
        </div>
      </section>
      {/* SECTION 3 END  */}

      <MiniFooter></MiniFooter>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
