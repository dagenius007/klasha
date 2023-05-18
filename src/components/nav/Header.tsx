import { ReactSVG } from "react-svg";
import Dropdown from "../Dropdown";
import { FiAlignLeft } from "react-icons/fi";
import { handleView } from "../../utils/helper";

export default () => {
  return (
    <div className="w-full border-lightGrey h-16 border-b-[1px] flex md:justify-end justify-between items-center px-8">
      <FiAlignLeft size={20} className="cursor-pointer md:hidden" onClick={() => handleView("sidenav")}/>
      <div className="flex items-center">
        <div className="flex">
          <ReactSVG src="/icons/user.svg" />
          <Dropdown title="" />
        </div>
        <div className="flex">
          <Dropdown title="En" />
        </div>
      </div>
    </div>
  );
};
