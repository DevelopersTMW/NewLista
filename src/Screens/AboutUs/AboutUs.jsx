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
  backgroundPosition: "bottom",
};

const AboutUs = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* About Us Start */}
      <section style={AboutBgImage}>
        <div className="flex gap-10 px-20 py-28 ">
          <div className="flex w-[50%] justify-center">
            <img
              className="w-[400px] h-[440px] object-cover "
              src={AboutUs1_2}
              alt=""
            />
            <img
              className="w-[280px] h-[280px] border-solid border-white border-[5px] mt-64 -ml-48"
              src={AboutUs1_3}
              alt=""
            />
          </div>
          <div className="w-[50%] flex flex-col justify-center">
            {/* Heading  */}
            <div className="border-b-[1px] border-[#BBBBBB] border-solid pb-7">
              <h1 class="text-[42px] font-Urbanist font-bold text-[#000000]">
                About NewLista
              </h1>
              <p class="mx-auto max-w-3xl  t font-semibold text-pretty text-black sm:text-[17px] font-Urbanist">
                Discover the story behind NewLista where passion for real estate
                meets innovation and integrity.
              </p>
            </div>
            {/* Paragraph  */}
            <div>
              <p class="mx-auto mt-6 max-w-3xl  text-[16px] font-medium text-pretty text-[#222222] sm:text-md/8 font-Urbanist">
                {" "}
                At NewLista, we’re redefining the way real estate professionals
                connect, collaborate, and close deals. Built for investors,
                brokers, and property owners, our platform offers seamless
                access to off-market listings, powerful networking tools, and
                exclusive market insights. Whether you're buying, selling, or
                expanding your investment portfolio, NewLista empowers you with
                the tools and connections you need to succeed.
              </p>
            </div>
            <div className="flex gap-4 mt-6">
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
            </div>
          </div>
        </div>
      </section>
      {/* About Us End */}

      {/* SECTION 1 START  */}
      <section className="flex justify-center pt-20 pb-10">
        <div className="bg-[#F1ECFF] flex flex-col justify-center w-[85%] px-20 py-14 gap-8 rounded-[15px]">
          <div className="flex flex-col  text-center">
            <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[42px] leading-[48px]">
              Our Services
            </h1>
          </div>
          <div className="flex flex-col gap-7 ">
            {/* CARD 1 PART  */}
            <div className="flex gap-7">
              <div className="bg-white px-5 py-5 rounded-[8px] flex justify-center flex-col  gap-3">
                <h1 className="font-semibold font-Urbanist text-[21px]">
                  🏢 Exclusive Off-Market Listings
                </h1>
                <p className="text-[#222222] font-Inter text-[15px] ">
                  Gain access to premium real estate deals not available
                  anywhere else. Connect with verified sellers and investors to
                  discover hidden opportunities.
                </p>
              </div>
              <div className="bg-white px-5 py-5 rounded-[8px] w-[70%] flex justify-center flex-col  gap-3">
                <h1 className="font-semibold font-Urbanist text-[20px]">
                  🔗 Real Estate Networking
                </h1>
                <p className="text-[#222222] font-Inter text-[13.5px]">
                  Build valuable connections with industry professionals. Join a
                  thriving community of investors, brokers, and property owners
                  to collaborate and grow your portfolio.
                </p>
              </div>
            </div>
            {/* CARD 2 PART  */}
            <div className="flex gap-7">
              <div className="bg-white px-5 py-5 rounded-[8px] w-[70%] flex justify-center flex-col  gap-3">
                <h1 className="font-semibold font-Urbanist text-[20px]">
                  💰 Seamless Property Transactions
                </h1>
                <p className="text-[#222222] font-Inter text-[13.5px]">
                  Buy, sell, and lease properties with ease. From listing to
                  closing, our platform simplifies the process and maximizes
                  your success.
                </p>
              </div>
              <div className="bg-white px-5 py-5 rounded-[8px] flex justify-center flex-col  gap-3">
                <h1 className="font-semibold font-Urbanist text-[21px]">
                  📊 Data-Driven Market Insights
                </h1>
                <p className="text-[#222222] font-Inter text-[15px]">
                  Stay ahead with real-time analytics and trends. Make informed
                  decisions with expert-driven insights on commercial real
                  estate opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 1 END  */}

      {/* SECTION 2 START  */}
      <section className="flex flex-col items-center justify-center py-16 gap-7 ">
        <div className="flex flex-col  w-[85%] ">
          <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] leading-[48px]">
            How Can We Help You?
          </h1>
        </div>
        <div className="flex gap-8 w-[85%]">
          {/* CARD 1  */}
          <div className="w-[33%] bg-PurpleColor rounded-[10px] px-5.5 py-8 flex flex-col gap-4 min-h-[190px] justify-center">
            <div>
              <img src={AboutIcon1_1} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-textColor font-Inter font-semibold text-[23px] leading-[25px]">
                Tailored Investment Support
              </h1>
              <p className="text-textColor font-Inter text-[16px]">
                Whether you're a first-time investor or an experienced
                professional, we provide insights and resources to help you find
                and secure the best opportunities.
              </p>
            </div>
          </div>
          {/* CARD 2 */}
          <div className="w-[33%] bg-PurpleColor rounded-[10px] px-5.5 py-8 flex flex-col gap-4 min-h-[190px] justify-center">
            <div>
              <img src={AboutIcon1_2} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-textColor font-Inter font-semibold text-[23px] leading-[22px]">
                Seamless Connections
              </h1>
              <p className="text-textColor font-Inter text-[16px]">
                Build meaningful relationships with real estate professionals,
                buyers, and sellers through our intuitive networking tools
                designed to foster collaboration.
              </p>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="w-[33%] bg-PurpleColor rounded-[10px] px-5.5 py-8 flex flex-col gap-4 min-h-[190px] justify-center">
            <div className="w-[100px]">
              <img src={AboutIcon1_3} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-textColor font-Inter font-semibold text-[23px] leading-[29px]">
                Efficient Commercial Transactions
              </h1>
              <p className="text-textColor font-Inter text-[16px]">
                From listing to closing, execute your commercial real estate
                deals with precision on our streamlined platform. Designed
                exclusively for commercial professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 2 END  */}

      {/* SECTION 3 START  */}
      <section className="flex flex-col justify-center items-center pb-20 gap-10">
        {/* CONTENT SECTION  */}
        <div className="w-[84%]">
          <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] leading-[48px]">
            What Our Clients Say
          </h1>
          <p className="text-md font-Inter font-medium text-pretty text-Paracolor mt-2 sm:text-[14px]/5.5  ">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>
        </div>
        {/* CARDSECTION  */}
        <div className="flex justify-center gap-7 w-[84%]">
          <Testimonials
            RevTitle={""}
            RevParagraph={
              "Newlista has transformed my real estate investing. It connected me with exclusive off-market deals, including a commercial property I recently closed. The platform is efficient, easy to use, and has opened up networking and deal opportunities I never thought possible"
            }
            Stars={3}
            RevImage={RevImage1}
            UserName={"Mike O"}
            Desination={"Real Estate Investor "}
          ></Testimonials>
          <Testimonials
            RevTitle={""}
            RevParagraph={
              "As a newcomer to commercial real estate, Newlista has been invaluable. Its curated listings and expert connections helped me invest confidently in a growing metro area. The insights from experienced investors made all the difference"
            }
            Stars={4}
            RevImage={RevImage2}
            UserName={"Leila N."}
            Desination={"Investor"}
          ></Testimonials>
          <Testimonials
            RevTitle={""}
            RevParagraph={
              "As a broker focused on value-add properties, Newlista has transformed how I work. It’s expanded my reach, helped me close multiple deals, and streamlined the process so I can focus on finding top opportunities for clients. The professional network is unmatched."
            }
            Stars={5}
            RevImage={RevImage3}
            UserName={"Michael M"}
            Desination={"Commercial Real Estate Broker. "}
          ></Testimonials>
        </div>
      </section>
      {/* SECTION 3 END  */}

      <MiniFooter></MiniFooter>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
