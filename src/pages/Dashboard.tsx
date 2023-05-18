import Charts from "../components/Charts";
import Dropdown from "../components/Dropdown";
import { HiArrowLongDown } from "react-icons/hi2";

export default () => {
  return (
    <div className="text-left">
      <p className="text-lowBlack text-xl font-sans mb-6">Sales overview</p>
      <div className="block md:flex gap-x-6 w-full">
        <div className="h-60 w-full p-6 border rounded-lg border-black mb-8 md:mb-0">
          <p className="text-sm text-black mb-2.5">Today's sales</p>
          <p className="text-xl text-black font-poppins">₦1,652.50</p>
        </div>
        <div className="h-60 w-full p-6 border rounded-lg border-black bg-black mb-8 md:mb-0">
          <p className="text-sm text-black text-white mb-0">
            24 Aug - 01 Sep 21
          </p>
          <Charts
            data={[
              100, 70, 50, 80, 100, 20, 65, 70, 20, 30, 25, 30, 85, 70, 100,
            ]}
            options={{
              fill: {
                type: "gradient",
                colors: ["#EF2C5A"],
              },
            }}
          />
          <p className="font-normal mb-2.5 text-white text-sm font-normal">
            This week
          </p>
          <p className="font-normal mb-2.5 text-xl text-white">₦1,652.50</p>
        </div>
        <div className="h-60 w-full p-6 border rounded-lg border-black mb-8 md:mb-0">
          <p className="text-sm text-black mb-2">24 Aug - 01 Sep 21</p>
          <Charts
            data={[
              100, 70, 50, 80, 100, 20, 65, 70, 20, 30, 25, 30, 85, 70, 100,
            ]}
          />
          <p className="font-normal mb-2.5 text-sm font-normal">This month</p>
          <p className="font-normal mb-2.5 text-xl">₦1,652.50</p>
        </div>
        <div className="h-60 w-full p-6 border rounded-lg border-black mb-8 md:mb-0">
          <p className="text-sm text-black mb-2">24 Aug - 01 Sep 21</p>
          <Charts
            data={[
              100, 70, 50, 80, 100, 20, 65, 70, 20, 30, 25, 30, 85, 70, 100,
            ]}
          />
          <p className="font-normal mb-2.5 text-sm font-normal">Last month</p>
          <p className="font-normal mb-2.5 text-xl">₦1,652.50</p>
        </div>
      </div>

      <div className="block md:flex h-[284px] gap-x-6 w-full mt-14">
        <div className="w-[100%]">
          <div className="flex items-center mb-[4px] flex-wrap">
            <p className="text-lg mr-3 sales">Sales</p>
            <p className="text-mainColor text-sm mr-3 font-medium ml-3">
              7 days
            </p>
            <p className="black text-sm font-mediumbold mr-5 font-medium ">
              30 days
            </p>
            <Dropdown title={"USD"} />
            <input
              placeholder="Email"
              className="md:ml-4 text-sm h-10 border text-[#565C69] border-[#F4F4F4] px-3.5 rounded-lg focus:outline-0 mr-3 w-[45%] text-black"
            />
            <button className="h-10 text-sm flex items-center justify-between border border-black rounded-lg px-3">
              <HiArrowLongDown /> Download report
            </button>
          </div>
          <div className="h-full rounded-lg border border-black">
            <Charts
              data={[4000, 3700, 2500, 3000, 1000, 3500, 1500]}
              height={"100%"}
              options={{
                // grid: {
                //   borderColor: '#111',
                //   strokeDashArray: 7,
                // },
                xaxis: {
                  labels: {
                    datetimeFormatter: {
                      year: "yyyy",
                      month: "MMMM 'yy",
                    },
                  },
                },
                grid: {
                  show: true,
                },
                yaxis: {
                  // tickAmount: 1000,
                  tickAmount: 4,
                  min: 1000,
                  max: 4000,
                  labels: {
                    datetimeFormatter: {
                      year: "yyyy",
                      month: "MMMM 'yy",
                    },
                  },
                },
                
              }}
            />
          </div>
        </div>

        <div className="bg-mainColor rounded-lg p-6 flex flex-col justify-between mt-11 h-full">
          <p className="text-white text-xl">
            KlashaWire - send <br /> money to businesses globally from Africa
          </p>
          <button className="bg-black text-white text-sm px-6 py-3 rounded-lg w-fit">
            Send a Wire
          </button>
        </div>
      </div>
    </div>
  );
};


