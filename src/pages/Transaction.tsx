import { ReactSVG } from "react-svg";
import Table from "../components/Table";
import { transactions } from "../constants/transactions";
import { FiSearch } from "react-icons/fi";

const columns = [
  {
    Header: "Transaction ID",
    accessor: "transactionId",
  },
  {
    Header: "Source",
    accessor: "source",
  },
  {
    Header: "Customer name",
    accessor: "customerName",
  },
  {
    Header: "Customer Phone",
    accessor: "customerPhone",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Request Date",
    accessor: "request",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

export default () => {
  return (
    <div>
      <p className="text-left text-lg  px-4  pb-6 border border-tableColor pt-4">
        Transaction history
      </p>
      <div className="flex h-14 justify-between items-center border-t-0 border-[1px] border-tableColor px-4">
        <div className="relative">
          <input
            placeholder="Search"
            className="text-sm h-10 border text-[#565C69] border-[#F4F4F4] px-3.5 rounded-lg focus:outline-0"
          />
          <FiSearch className="absolute right-3 top-3 cursor-pointer" />
        </div>

        <div className="flex">
          <button className="text-sm flex border border-black p-4 h-10 rounded-lg items-center mr-4">
            Filter <ReactSVG src="/icons/filter.svg" className="ml-2" />
          </button>
          <button className="text-sm  border border-black p-4 h-10 rounded-lg flex items-center">Export</button>
        </div>
      </div>
      <div className="pt-10  border-t-0 border-[1px] border-tableColor">
        <Table columns={columns} data={transactions} />
      </div>
    </div>
  );
};
