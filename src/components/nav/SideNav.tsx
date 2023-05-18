import { ReactSVG } from "react-svg";
import { navs } from "../../constants/nav";
import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { handleView } from "../../utils/helper";

export default () => {
  return (
    <div
      className="w-80 px-12 py-[30px] bg-lightRed fixed z-50 left-[-320px] md:relative md:left-0 h-screen flex flex-col justify-between"
      id="sidenav"
    >
      <div className="mb-[52px] flex justify-between items-center">
        <img src="/images/logo.png" className="w-[84px]" />
        <FiX color="black" size={20} className="md:hidden" onClick={() => handleView("sidenav")} />
      </div>

      <div>
        {navs.map((nav: any, i: number) => (
          <div className="text-left mb-8" key={i}>
            <p className="text-grey text-base mb-4">{nav.title}</p>
            {nav.menus.map((menu: any, index: number) => (
              <NavLink
                to={menu.route}
                activeClassName="active"
                className="flex mb-[18px] cursor-pointer menu hover:text-mainColor items-center"
                key={index}
                exact
              >
                <ReactSVG src={menu.icon} className="nav-icon" />
                <p className="ml-3 font-normal">{menu.title}</p>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
      <div>
        <button className="bg-mainColor flex w-[120px] text-xs text-white items-center h-10 px-3 rounded-full mb-3">
          <ReactSVG src="/icons/question.svg " className="mr-2" />
          Support
        </button>
        <button className="rounded border-2 border-black w-[120px] h-10 text-sm flex items-center px-3">
          <ReactSVG src="/icons/lessthan.svg " className="mr-1" />
          Hide panel
        </button>
      </div>
    </div>
  );
};
