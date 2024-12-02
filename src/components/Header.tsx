import Logo from "../assets/images/logo.svg";
import IconOpen from "../assets/images/icon-hamburger.svg";
import IconClose from "../assets/images/icon-close.svg";
import { useState } from "react";
import { Navlist } from "./data";
const Header = () => {
  const [status, setStatus] = useState(true);

  return (
    <>
      <header
        className={` ${
          !status ? " lg:bg-transparent bg-white z-30 fixed" : "absolute"
        }  top-0 w-full`}
      >
        <div className="flex gap-[4rem] lg:m-8  my-4 items-center p-4 justify-evenly lg:justify-start">
          <div className="lg:hidden">
            <img
              className="cursor-pointer"
              src={status ? IconOpen : IconClose}
              alt="Icon-Menu"
              onClick={() => {
                setStatus(!status);
              }}
            />
          </div>
          {status && (
            <div className="brand">
              <img src={Logo} alt="brand-image" className="" />
            </div>
          )}
          {/* desktop */}
          <nav className=" space-x-8 lg:flex hidden text-white font-semibold ">
            {Navlist.map((val, index) => (
              <ul key={index}>
                <li className="text-white font-semibold hover:underline underline-offset-8 ">
                  {" "}
                  <a href={val.link} className="">
                    {" "}
                    {val.name}
                  </a>
                </li>
              </ul>
            ))}
          </nav>
          {/* mobile */}
          {!status && (
            <nav className="flex space-x-5 lg:hidden z-20">
              {Navlist.map((val, index) => (
                <ul key={index}>
                  <li className={`${!status && "text-black font-semibold"}`}>
                    {" "}
                    <a href={val.link}> {val.name}</a>
                  </li>
                </ul>
              ))}
            </nav>
          )}
        </div>
      </header>
      <span
        className={`${
          !status &&
          "lg:hidden bg-black h-screen w-full bg-opacity-50 lg:z-0 z-10 fixed"
        }`}
      />
    </>
  );
};

export default Header;
