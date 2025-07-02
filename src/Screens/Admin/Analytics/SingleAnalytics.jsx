import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
  Title,
} from "chart.js";

// Icons
import DashboardIcon1 from "../../../assets/DashboardIcon1.1.png";
import DashboardIcon2 from "../../../assets/DashboardIcon2.1.png";
import DashboardIcon3 from "../../../assets/DashboardIcon3.1.png";
import DashboardIcon4 from "../../../assets/DashboardIcon4.1.png";
import UpIcon from "../../../assets/DashboardIcon1.11.png";
import DownIcon from "../../../assets/DashboardIcon1.22.png";
import { ChevronDownIcon } from "flowbite-react";

ChartJS.register(
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
  Title
);

export default function PropertyViewChartCards() {
  const { id } = useParams();
  const ApiKey = import.meta.env.VITE_API_KEY;
  const token = localStorage.getItem("token");

  const [filter, setFilter] = useState("Daily");
  const [labels, setLabels] = useState([]);
  const [views, setViews] = useState([]);
  const [offerStats, setOfferStats] = useState({
    accepted: 0,
    received: 0,
    pending: 0,
    shared: 0,
  });

  useEffect(() => {
    const loadAnalytics = async () => {
      try {
        const res = await axios.get(
          `${ApiKey}/single-property-analytic/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const data = res.data;

        // Set offer-related stats
        setOfferStats({
          accepted: data.accepted_offers?.length || 0,
          received: data.offers_received?.length || 0,
          pending: data.pending_offers?.length || 0,
          shared: data.social_shares?.length || 0,
        });

        // Views grouped by filter
        const views = data.total_listing_views || [];
        const grouped = {};

        views.forEach((view) => {
          const dateObj = new Date(view.created_at);
          let key;

          if (filter === "Daily") {
            key = dateObj.toISOString().split("T")[0];
          } else if (filter === "Weekly") {
            const startOfWeek = new Date(dateObj);
            const day = startOfWeek.getDay();
            startOfWeek.setDate(dateObj.getDate() - day);
            key = startOfWeek.toISOString().split("T")[0];
          } else if (filter === "Monthly") {
            key = `${dateObj.getFullYear()}-${String(
              dateObj.getMonth()
            ).padStart(2, "0")}`;
          } else if (filter === "Last 90 Days") {
            const ninetyDaysAgo = new Date();
            ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
            if (dateObj < ninetyDaysAgo) return;
            key = dateObj.toISOString().split("T")[0];
          }

          grouped[key] = (grouped[key] || 0) + 1;
        });

        const sortedKeys = Object.keys(grouped).sort();
        const labelFormatted = sortedKeys.map((key) => {
          const parts = key.split("-");
          if (filter === "Monthly") {
            return new Date(parts[0], parts[1]).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            });
          } else {
            return new Date(key).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
          }
        });

        setLabels(labelFormatted);
        setViews(sortedKeys.map((k) => grouped[k]));
      } catch (error) {
        console.error("Error loading analytics:", error);
      }
    };

    loadAnalytics();
  }, [id, filter]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#ffffff",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        titleColor: "#111827",
        bodyColor: "#374151",
        padding: 10,
        displayColors: false,
        callbacks: {
          label: (context) => `Views: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#9CA3AF", font: { size: 12 } },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#9CA3AF", font: { size: 12 } },
        grid: { color: "#F3F4F6", drawTicks: false },
      },
    },
  };

  const statCards = [
    {
      label: "Offers Received",
      value: offerStats.received,
      icon: DashboardIcon1,
    },
    {
      label: "Pending Offers",
      value: offerStats.pending,
      icon: DashboardIcon2,
    },
    {
      label: "Accepted Offers",
      value: offerStats.accepted,
      icon: DashboardIcon3,
    },
    { label: "Social Shares", value: offerStats.shared, icon: DashboardIcon4 },
  ];

  return (
    <>
      {/* STAT CARDS */}
      <section className="flex flex-wrap gap-5 mt-5 min-[890px]:mt-9">
        {statCards.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[47%] lg:w-[40%] xl:w-[31%] 2xl:w-[23%] bg-white rounded-[14px] p-6 flex flex-col justify-between gap-5"
          >
            <div className="flex justify-between">
              <span>
                <h4 className="text-[15px] font-Urbanist font-[500] text-[#666666]">
                  {card.label}
                </h4>
                <h1 className="font-Urbanist text-[#222222] text-[30px] md:text-[35px] font-[700]">
                  {card.value}
                </h1>
              </span>
              <span>
                <img className="max-[390px]:w-14 w-16" src={card.icon} alt="" />
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <img
                  className="h-4 w-5"
                  src={card.value > 0 ? UpIcon : DownIcon}
                  alt=""
                />
              </span>
              <span>
                <h4 className="text-[#606060] font-Urbanist font-[600] text-[15px]">
                  {card.value} new today
                </h4>
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* FILTER + CHARTS */}
      <section className="max-w-6xl mx-auto pr-7 mt-7">
        <div className="mb-5 items-center flex justify-between">
          <div>
            <h1 className="font-Urbanist font-bold text-[32px] leading-[43px] w-max">
              Property View Analytics
            </h1>
          </div>
          <div className="relative">
            <select
              id="viewFilter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="block w-full pr-8.5 pl-6 py-2.5 rounded-[8px] font-semibold text-[15px] border-b-[1px] border-gray-300  focus:ring-PurpleColor focus:border-PurpleColor text-[#fcfcfc] font-Urbanist outline-none appearance-none cursor-pointer bg-black"
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Last 90 Days">Last 90 Days</option>
            </select>
            <ChevronDownIcon
              className={`pointer-events-none absolute top-3 right-3 size-5 fill-[#fcfcfc] text-black`}
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* LINE CHART */}
          <div className="bg-white rounded-xl px-6 py-10 shadow-lg">
            <div className="h-64">
              <Line
                data={{
                  labels,
                  datasets: [
                    {
                      label: "Views",
                      data: views,
                      fill: true,
                      borderColor: "#3B82F6",
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      tension: 0.4,
                      pointRadius: 4,
                      pointHoverRadius: 6,
                      pointBackgroundColor: "#3B82F6",
                    },
                  ],
                }}
                options={chartOptions}
              />
            </div>
          </div>

          {/* BAR CHART */}
          <div className="bg-white flex justify-center items-center rounded-xl px-6 ">
            <div className="h-64 w-full" >
              <Bar
                data={{
                  labels,
                  datasets: [
                    {
                      label: "Views",
                      data: views,
                      backgroundColor: "#10B981",
                      borderRadius: 4,
                    },
                  ],
                }}
                options={chartOptions}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
