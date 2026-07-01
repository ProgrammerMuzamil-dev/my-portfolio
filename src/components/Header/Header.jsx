import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Humburger from "../Humburger/Humburger";
function Header() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
      isActive ? "text-[#38BDF8]" : "text-[#CBD5E1]"
    } hover:text-[#F8FAFC]`;

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#1E293B]">
        {" "}
        <div className="flex items-center p-5 justify-evenly">
          <div>
            <img
              width={70}
              className="rounded-xl"
              src={logo}
              alt="LogoOfMine"
            />
          </div>
          <section className="hidden md:block ">
            <div className="flex gap-5 md:gap-32">
              <div className="flex gap-2 uppercase ">
                <NavLink className={linkClass} to="/">
                  Home
                </NavLink>
                <NavLink className={linkClass} to="/AboutMe">
                  About Me
                </NavLink>
                <NavLink className={linkClass} to="/Projects">
                  Projects
                </NavLink>
                <NavLink className={linkClass} to="/ContectMe">
                  Contect Me
                </NavLink>
              </div>
              <div>
                <button className="px-3 border uppercase border-[#38BDF8] hover:bg-[#0EA5E9] py-2 rounded-lg text-sm font-medium transition-all duration-300 text-[#F8FAFC] hover:text-[#0F172A]">
                  Get In Touch
                </button>
              </div>
            </div>
          </section>
          <div className="relative block md:hidden">
            <Humburger />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
