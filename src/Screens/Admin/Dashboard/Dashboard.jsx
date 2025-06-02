import React from 'react'
// IMAGES
import DashboardIcon1_1 from "../../../assets/DashboardIcon1.1.png"
import DashboardIcon2_1 from "../../../assets/DashboardIcon2.1.png"
import DashboardIcon3_1 from "../../../assets/DashboardIcon3.1.png"
import DashboardIcon4_1 from "../../../assets/DashboardIcon4.1.png"
import DashboardIcon1_11 from "../../../assets/DashboardIcon1.11.png"
import DashboardIcon1_22 from "../../../assets/DashboardIcon1.22.png"


const Dashboard = () => {
  return (
    <>
    <section className='py-6 px-2 sm:px-3 min-[890px]:px-0'>
      {/* PAGE TITTLE  */}
      <div>
        <h1 className='text-[30px] font-Urbanist text-[#222222] sm:text-[30px] font-[700]'>Dashboard</h1>
      </div>

      {/* CARDS SECTION  */}
      <div className='flex flex-wrap gap-5 mt-5 min-[890px]:mt-9'> 
        {/* CARD 1 */}
        <div className='w-[100%] flex flex-col justify-between bg-white px-5 gap-5 py-7  sm:w-[47%] lg:w-[35%] rounded-[14px] xl:w-[31%] 2xl:w-[23%]'>
          <div className='flex justify-between '>
            <span>
              <h4 className='text-[15px] font-Urbanist font-[500] text-[#666666]'>Total Listings</h4>
              <h1 className='font-Urbanist text-[#222222] text-[30px] md:text-[35px] font-[700]'>1,245</h1>
            </span>
            <span>
              <img className='max-[390px]:w-14 w-16' src={DashboardIcon1_1} alt="" />
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <span>
              <img  className='h-4 w-5' src={DashboardIcon1_11} alt="" />
            </span>
            <span>
              <h4 className='text-[#606060] font-Urbanist font-[600] text-[15px]' >15 New Listings Today</h4>
            </span>
          </div>
        </div>
        {/* CARD 2 */}
        <div className='w-[100%] flex flex-col justify-between bg-white px-5 gap-5 py-7  rounded-[14px] sm:w-[47%] lg:w-[35%] xl:w-[31%] 2xl:w-[23%]'>
          <div className='flex justify-between'>
            <span>
              <h4 className='text-[15px] font-Urbanist font-[500] text-[#666666]'>Active Listings</h4>
              <h1 className='font-Urbanist text-[#222222] text-[30px] md:text-[35px] font-[700]'>1,103</h1>
            </span>
            <span>
              <img className='max-[390px]:w-14 w-16' src={DashboardIcon2_1} alt="" />
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <span>
              <img className='h-4 w-5' src={DashboardIcon1_11} alt="" />
            </span>
            <span>
              <h4 className='text-[#606060] font-Urbanist font-[600] text-[15px]' >10 Newly Activated Today</h4>
            </span>
          </div>
        </div>
        {/* CARD 3 */}
        <div className='w-[100%] flex flex-col justify-between bg-white px-5 gap-5 py-7 rounded-[14px] sm:w-[47%]  lg:w-[35%] xl:w-[31%] 2xl:w-[23%]'>
          <div className='flex justify-between'>
            <span>
              <h4 className='text-[15px] font-Urbanist font-[500] text-[#666666]'>Network Connections</h4>
              <h1 className='font-Urbanist text-[#222222] text-[30px] md:text-[35px] font-[700]'>234</h1>
            </span>
            <span>
              <img className='max-[390px]:w-14 w-16' src={DashboardIcon3_1} alt="" />
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <span>
              <img className='h-4 w-5' src={DashboardIcon1_11} alt="" />
            </span>
            <span>
              <h4 className='text-[#606060] font-Urbanist font-[600] text-[15px]' >5 New Connections Today</h4>
            </span>
          </div>
        </div>
        {/* CARD 4 */}
        <div className='w-[100%] flex flex-col justify-between bg-white px-5 gap-5 py-7 rounded-[14px] sm:w-[47%] lg:w-[35%] xl:w-[31%] 2xl:w-[23%]'>
          <div className='flex justify-between'>
            <span>
              <h4 className='text-[15px] font-Urbanist font-[500] text-[#666666]'>Pending Offers</h4>
              <h1 className='font-Urbanist text-[#222222] text-[30px] md:text-[35px] font-[700]'>12</h1>
            </span>
            <span>
              <img className='max-[390px]:w-14 w-16' src={DashboardIcon4_1} alt="" />
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <span>
              <img className='h-4 w-5' src={DashboardIcon1_22} alt="" />
            </span>
            <span>
              <h4 className='text-[#606060] font-Urbanist font-[600] text-[15px]' >No Offer Today</h4>
            </span>
          </div>
        </div>
      </div>
    </section>
    </>
   
  )
}

export default Dashboard