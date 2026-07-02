import React from "react";
import { useState } from "react";
import cross from "../../assets/cross.png";
import menu from "../../assets/menu.png";
import { NavLink } from "react-router-dom";
function Humburger() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    ` py-4 px-3     text-center rounded-lg text-sm font-medium transition-all duration-300 ${
      isActive ? "text-[#38BDF8]" : "text-[#CBD5E1]"
    } hover:text-[#F8FAFC]`;
  const mailtoHref = `mailto:mmprogrammer.dev@gmail.com?subject=${encodeURIComponent(
    "Let's Work Together"
  )}`;

  return (
    <div>
      <button onClick={() => setOpen(!open)} className="relative z-[1000]">
        {open ? <img src={cross} alt="icon" /> : <img src={menu} alt="icon" />}
      </button>
      {open && (
        <div className="fixed top-20 left-4 right-4 z-[9999] rounded-3xl border border-white/10 bg-slate-900/90 backdrop-blur-xl shadow-2xl overflow-hidden">
          {" "}
          <div className="flex flex-col">
            <NavLink
              className={linkClass}
              to="/"
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              className={linkClass}
              to="/AboutMe"
              onClick={() => setOpen(false)}
            >
              About Me
            </NavLink>

            <NavLink
              className={linkClass}
              to="/Projects"
              onClick={() => setOpen(false)}
            >
              Projects
            </NavLink>

            <NavLink
              className={linkClass}
              to="/ContectMe"
              onClick={() => {
                setOpen(false);
              }}
            >
              Contact Me
            </NavLink>
          </div>
          <div className="p-6 mt-5">
            <a
              href={mailtoHref}
              onClick={() => setOpen(false)}
              className="block w-full rounded-xl border border-sky-400 bg-sky-500/90 py-3 text-center font-semibold text-sky-300 transition-all duration-300 hover:bg-sky-500 hover:text-slate-900 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Humburger;
