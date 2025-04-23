import React, { useEffect } from "react";
import { Select } from "@headlessui/react";
// COMPONENTS
import TransparentNavbar from "../../Components/Navbar/TransparentNavbar";
import TopDevelopes from "../../Components/Cards/TopDevelopes/TopDevelopes";
import PropertiesCards from "../../Components/Cards/PropertiesCards/PropertiesCards";
import Testimonials from "../../Components/Testimonials/Testimonials";
// IMAGES
import HeroBg from "../../assets/HeroSecImage.jpg";
import HomeSec1_1 from "../../assets/HomeSec1.1.png";
import HomeSec1_2 from "../../assets/HomeSec1.2.png";
import HomeSec1_3 from "../../assets/HomeSec1.3.png";
import TopDeveloper1_1 from "../../assets/TopDeveloper1.1.jpg";
import TopDeveloper1_2 from "../../assets/TopDeveloper1.2.jpg";
import TopDeveloper1_3 from "../../assets/TopDeveloper1.3.jpg";
import PropertiesImage1 from "../../assets/PropertiesImage1.png";
import PropertiesImage2 from "../../assets/PropertiesImage2.png";
import PropertiesImage3 from "../../assets/PropertiesImage3.png";
import Testimonials1 from "../../assets/Testimonials1.png";
import HomeSec5_1 from "../../assets/HomeSec5.1.png";
import HomeSec5_2 from "../../assets/HomeSec5.2.png";
import InvestorCards from "../../Components/Cards/InvestorCards/InvestorCards";
import Footer from "../../Components/Footer/Footer";

// BACKGORUND
const HeroBackground = {
  backgroundImage: `url(${HeroBg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundBlendMode: "black",
  backgroundColor: "#0009",
};

const Home = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <>
      <TransparentNavbar></TransparentNavbar>
      <div>
        {/* HERO SECTION START */}
        <section
          style={HeroBackground}
          className="relative isolate px-6 pt-14 lg:px-8 -mt-[10%]"
        >
          <div className="mx-auto max-w-7xl py-28 sm:py-44 lg:py-44">
            {/* CONTENT SECTION START  */}
            <div className="text-center pt-20">
              <h1 className="text-7xl font-[600] font-Poppins tracking-tight text-balance text-white sm:text-[60px] leading-[67px]">
                The Ultimate Commercial Real Estate Marketplace & Investor
                Network
              </h1>
              <p className="mt-8 text-md font-medium text-pretty text-textColor sm:text-lg/8 ">
                List properties, connect with investors, and unlock exclusive
                off-the-market deals—all in one powerful platform.
              </p>
            </div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center mt-8">
              <div className="relative flex rounded-full px-6.5 py-3.5 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-textColor justify-center items-center">
                <div className="px-4 py-2 border-r-[1px] border-solid border-Paracolor">
                  <Select
                    name="status"
                    aria-label="Project status"
                    className={
                      "overline-none text-[16px] font-Inter text-black font-[500]"
                    }
                  >
                    <option className="" value="active">
                      Buy
                    </option>
                    <option className="" value="active">
                      Active
                    </option>
                    <option className="" value="paused">
                      Paused
                    </option>
                    <option className="" value="delayed">
                      Delayed
                    </option>
                    <option className="" value="canceled">
                      Canceled
                    </option>
                  </Select>
                </div>
                <div className="px-8 py-1 border-r-[1px] border-solid border-Paracolor flex flex-col ">
                  <h1 className="text-[14px] font-Inter text-black font-[600]">
                    Location
                  </h1>
                  <Select
                    name="status"
                    aria-label="Project status"
                    className={
                      "overline-none text-[13px] font-Inter text-Paracolor font-[500] -mt-0.5 -ml-1"
                    }
                  >
                    <option className="overline-none font-Inter" value="active">
                      Select Your City
                    </option>
                    <option className="" value="active">
                      Active
                    </option>
                    <option className="" value="paused">
                      Paused
                    </option>
                    <option className="" value="delayed">
                      Delayed
                    </option>
                    <option className="" value="canceled">
                      Canceled
                    </option>
                  </Select>
                </div>
                <div className="px-8 py-1 border-r-[1px] border-solid border-Paracolor flex flex-col ">
                  <h1 className="text-[14px] font-semibold font-Inter text-black ">
                    Property Type
                  </h1>
                  <Select
                    name="status"
                    aria-label="Project status"
                    className={
                      "overline-none text-[13px] font-Inter text-Paracolor font-[500] -mt-0.5 -ml-1"
                    }
                  >
                    <option className="overline-none font-Inter" value="active">
                      Choose Property Type
                    </option>
                    <option className="" value="active">
                      Active
                    </option>
                    <option className="" value="paused">
                      Paused
                    </option>
                    <option className="" value="delayed">
                      Delayed
                    </option>
                    <option className="" value="canceled">
                      Canceled
                    </option>
                  </Select>
                </div>
                <div className="px-8 py-1  flex flex-col ">
                  <h1 className="text-[14px] font-Inter text-black font-[600]">
                    Price Range
                  </h1>
                  <Select
                    name="status"
                    aria-label="Project status"
                    className={
                      "overline-none text-[13px] font-Inter text-Paracolor font-[500] -mt-0.5 -ml-1"
                    }
                  >
                    <option className="overline-none font-Inter" value="active">
                      Choose Price Range
                    </option>
                    <option className="" value="active">
                      Active
                    </option>
                    <option className="" value="paused">
                      Paused
                    </option>
                    <option className="" value="delayed">
                      Delayed
                    </option>
                    <option className="" value="canceled">
                      Canceled
                    </option>
                  </Select>
                </div>
                <div>
                  <button className="bg-PurpleColor text-white px-2 py-2 rounded-full text-[14px] cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-5 font-bold"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* HERO SECTION END */}

        {/* SECTION 1 START  */}
        <section className="flex flex-col items-center justify-center py-14 gap-10 ">
          <div className="flex flex-col justify-center items-center w-[60%] text-center">
            <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] leading-[48px]">
              Seamless Real Estate Investing Starts Here
            </h1>
            <p className="text-md font-Inter font-medium text-pretty text-Paracolor mt-2 sm:text-md/8 ">
              NewLista simplifies how investors, buyers, and sellers connect.
              Discover exclusive listings, grow your network, and close
              deals—all in one easy-to-use platform.
            </p>
          </div>
          <div className="flex gap-8 w-[83%]">
            {/* CARD 1  */}
            <div className="w-[33%] bg-PurpleColor rounded-[10px] px-5.5 py-8 flex flex-col gap-4 min-h-[200px] justify-between">
              <div>
                <img src={HomeSec1_1} alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-textColor font-Inter font-semibold text-[23px] leading-[22px]">
                  List & Promote
                </h1>
                <p className="text-textColor font-Inter text-[16px]">
                  Post properties and attract serious buyers.
                </p>
              </div>
              <div className="mt-3">
                <button className="w-[100%] border-[1px] border-solid border-textColor py-2 text-textColor font-Inter rounded-[6px]">
                  Add a Property
                </button>
              </div>
            </div>
            {/* CARD 2 */}
            <div className="w-[33%] bg-PurpleColor rounded-[10px] px-5.5 py-8 flex flex-col gap-4 min-h-[200px] justify-between">
              <div>
                <img src={HomeSec1_2} alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-textColor font-Inter font-semibold text-[23px] leading-[22px]">
                  Connect & Collaborate
                </h1>
                <p className="text-textColor font-Inter text-[16px]">
                  Build your network and form partnerships.
                </p>
              </div>
              <div className="mt-3">
                <button className="w-[100%] border-[1px] border-solid border-textColor py-2 text-textColor font-Inter rounded-[6px]">
                  Add a Property
                </button>
              </div>
            </div>
            {/* CARD 3 */}
            <div className="w-[33%] bg-PurpleColor rounded-[10px] px-5.5 py-8 flex flex-col gap-4 min-h-[200px]">
              <div className="w-[100px]">
                <img src={HomeSec1_3} alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-textColor font-Inter font-semibold text-[23px] leading-[27px]">
                  Search for Off-Market Properties
                </h1>
                <p className="text-textColor font-Inter text-[16px]">
                  Access off-market deals and make direct offers.
                </p>
              </div>
              <div className="mt-3">
                <button className="w-[100%] border-[1px] border-solid border-textColor py-2 text-textColor font-Inter rounded-[6px]">
                  Add a Property
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 1 END   */}

        {/* SECTION 2 START  */}
        <section className="flex flex-col justify-center items-center py-14 gap-10">
          {/* CONTENT SECTION  */}
          <div className="flex justify-center items-center w-[84%]">
            <div className="w-[65%]">
              <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] leading-[48px]">
                Featured Properties
              </h1>
              <p className="text-md font-Inter font-medium text-pretty text-Paracolor mt-2 sm:text-[14px]/5.5 ">
                Explore our handpicked selection of featured properties. Each
                listing offers a glimpse into exceptional homes and investments
                available through Estatein. Click "View Details" for more
                information.
              </p>
            </div>
            <div className="w-[35%] flex justify-end">
              <button className="px-5 font-Inter bg-[#1E1E1E] text-white py-3 rounded-[7px]">
                View All Properties
              </button>
            </div>
          </div>
          {/* PROPERTY CARD SECTION  */}
          <div className="flex gap-7 w-[84%]">
            <PropertiesCards
              Img={PropertiesImage1}
              Heading={"Seaside Serenity Villa"}
              desc={
                " A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More"
              }
              Status={"Active"}
              Price={"550,000"}
            ></PropertiesCards>
            <PropertiesCards
              Img={PropertiesImage2}
              Heading={"Seaside Serenity Villa"}
              desc={
                " A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More"
              }
              Status={"Rental"}
              Price={"550,000"}
            ></PropertiesCards>
            <PropertiesCards
              Img={PropertiesImage3}
              Heading={"Seaside Serenity Villa"}
              desc={
                " A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More"
              }
              Status={"Sold"}
              Price={"550,000"}
            ></PropertiesCards>
          </div>
          <div className="flex gap-7 w-[84%]">
            <PropertiesCards
              Img={PropertiesImage3}
              Heading={"Seaside Serenity Villa"}
              desc={
                " A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More"
              }
              Status={"Sold"}
              Price={"550,000"}
            ></PropertiesCards>
            <PropertiesCards
              Img={PropertiesImage1}
              Heading={"Seaside Serenity Villa"}
              desc={
                " A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More"
              }
              Status={"Active"}
              Price={"550,000"}
            ></PropertiesCards>

            <PropertiesCards
              Img={PropertiesImage2}
              Heading={"Seaside Serenity Villa"}
              desc={
                " A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More"
              }
              Status={"Rental"}
              Price={"550,000"}
            ></PropertiesCards>
          </div>
        </section>
        {/* SECTION 2 END */}

        {/* SECTION 3 START  */}
        <section className="flex flex-col justify-center items-center py-20 gap-10">
          {/* CONTENT SECTION  */}
          <div className="flex justify-center items-center w-[84%]">
            <div className="w-[65%]">
              <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] leading-[48px]">
                Top Developers in Commercial Real Estate
              </h1>
              <p className="text-md font-Inter font-medium text-pretty text-Paracolor mt-2 sm:text-[14px]/5.5 ">
                Discover the leaders in commercial real estate development.
                These developers are shaping the skyline and driving innovation
                across cities.
              </p>
            </div>
            <div className="w-[35%] flex justify-end">
              <button className="px-5 font-Inter bg-[#1E1E1E] text-white py-3 rounded-[7px]">
                View All Developers
              </button>
            </div>
          </div>
          {/* PROPERTY CARD SECTION  */}
          <div className="flex gap-7 w-[84%]">
            <TopDevelopes
              Img={TopDeveloper1_1}
              Heading={"New York City"}
              MiniHeading={"Manhattan"}
              desc={
                " Known for its iconic skyline and bustling financial district, Manhattan is the heart of New York's real estate market."
              }
              Price={"550K"}
            ></TopDevelopes>
            <TopDevelopes
              Img={TopDeveloper1_2}
              Heading={"Los Angeles"}
              MiniHeading={"Santa Monica"}
              desc={
                " Santa Monica offers a mix of beachfront properties and thriving retail spaces, ideal for both business and leisure."
              }
              Price={"550K"}
            ></TopDevelopes>
            <TopDevelopes
              Img={TopDeveloper1_3}
              Heading={"Miami"}
              MiniHeading={"Brickell"}
              desc={
                "Brickell is Miami's financial hub, known for its high-rise apartments and vibrant nightlife scene."
              }
              Price={"550K"}
            ></TopDevelopes>
          </div>
        </section>
        {/* SECTION 3 END */}
        {/* SECTION 4 START  */}
        <section className="flex flex-col justify-center items-center py-16 gap-10">
          {/* CONTENT SECTION  */}
          <div className="w-[84%]">
            <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] leading-[48px]">
              What Our Clients Say
            </h1>
            <p className="text-md font-Inter font-medium text-pretty text-Paracolor mt-2 sm:text-[14px]/5.5  ">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose Estatein for their real
              estate needs.
            </p>
          </div>
          {/* CARDSECTION  */}
          <div className="flex justify-center gap-7 w-[84%]">
            <Testimonials
              RevTitle={"Seamless & Efficient Platform!"}
              RevParagraph={
                "NewLista made listing and selling properties effortless. I connected with serious buyers and closed a deal in just two weeks!"
              }
              Stars={3}
              RevImage={Testimonials1}
              UserName={"Michael R."}
              Desination={"USA, California"}
            ></Testimonials>
            <Testimonials
              RevTitle={"Exclusive Deals & Great Networking!"}
              RevParagraph={
                "The off-market listings gave me access to investment opportunities I couldn’t find anywhere else. The networking features are a huge bonus!"
              }
              Stars={4}
              RevImage={Testimonials1}
              UserName={"Sarah L."}
              Desination={"USA, Florida"}
            ></Testimonials>
            <Testimonials
              RevTitle={"Everything You Need in One Place!"}
              RevParagraph={
                "From property listings to investor connections, NewLista has transformed how I do business. Highly recommend to any serious real estate professional!"
              }
              Stars={5}
              RevImage={Testimonials1}
              UserName={"David M."}
              Desination={"USA, Nevada"}
            ></Testimonials>
          </div>
        </section>
        {/* SECTION 4 END  */}
        {/* SECTION 5 START  */}
        <section className="flex flex-col justify-center items-center gap-10 pt-12 pb-20">
          <div className="w-[84%]">
            <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] leading-[48px]">
              Have a property to sell?
            </h1>
          </div>
          <div className="w-[84%] border-solid border-[1px] border-[#BBBBBB] flex rounded-[10px]">
            <div className="w-[25%] h-[90%]">
              <img className="" src={HomeSec5_1} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center text-center px-20 gap-5 w-[50%] py-2">
              <h1 className="font-Inter font-bold text-[22px] leading-[25px]">
                Reach serious buyers, close deals faster, and maximize your
                property's potential.{" "}
              </h1>
              <button className="bg-PurpleColor py-2 text-[16px] text-white font-Inter rounded-[8px] w-full">
                Sell your Property
              </button>
            </div>
            <div className="w-[25%] h-[90%]">
              <img className="" src={HomeSec5_2} alt="" />
            </div>
          </div>
        </section>
        {/* SECTION 5 END  */}
        {/* SECTION 6 START  */}
        <section className="flex flex-col justify-center items-center pb-28 pt-10 gap-10 overflow-hidden">
          {/* CONTENT SECTION  */}
          <div className="flex justify-center items-center w-[84%]">
            <div className="w-[65%]">
              <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] leading-[48px]">
                Expand Your Real Estate Network
              </h1>
              <p className="text-md font-Inter font-medium text-pretty text-Paracolor mt-2 sm:text-[14px]/5.5 ">
                Connect with serious investors, brokers, and real estate
                professionals. Build partnerships, exchange insights, and
                discover exclusive deals.
              </p>
            </div>
            <div className="w-[35%] flex justify-end">
              <button className="px-5 font-Inter bg-[#1E1E1E] text-white py-3 rounded-[7px]">
                View more
              </button>
            </div>
          </div>
          {/* CARD SECTION  */}
          <div className="w-[84%] flex gap-10">
            <InvestorCards InvesImage={Testimonials1} InvesUserName={'John Doe'} InvesDesc={"Real Estate Investor"}  ></InvestorCards> 
            <InvestorCards InvesImage={Testimonials1} InvesUserName={'John Doe'} InvesDesc={"Real Estate Investor"}  ></InvestorCards> 
            <InvestorCards InvesImage={Testimonials1} InvesUserName={'John Doe'} InvesDesc={"Real Estate Investor"}  ></InvestorCards> 
            <InvestorCards InvesImage={Testimonials1} InvesUserName={'John Doe'} InvesDesc={"Real Estate Investor"}  ></InvestorCards> 
            <InvestorCards InvesImage={Testimonials1} InvesUserName={'John Doe'} InvesDesc={"Real Estate Investor"}  ></InvestorCards> 
            <InvestorCards InvesImage={Testimonials1} InvesUserName={'John Doe'} InvesDesc={"Real Estate Investor"}  ></InvestorCards> 
          </div>
        </section>
        {/* SECTION 6 END  */}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
