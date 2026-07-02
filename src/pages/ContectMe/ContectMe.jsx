import React from "react";
import github from "../../assets/homeAssets/github.png";
import linkedin from "../../assets/homeAssets/linkedin.png";
import InputBox from "../../components/Form/Form";
import email from "../../assets/homeAssets/email.png";
import MessageBox from "../../components/Massega/MassegaBox";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedinIn,
  FaLocationArrow,
  FaMapMarkedAlt,
  FaPaperPlane,
  FaPhone,
  FaPhoneAlt,
  FaSearchLocation,
  FaTag,
  FaUser,
  FaUserAlt,
  FaVoicemail,
  FaWhatsapp,
} from "react-icons/fa";

function ContectMe() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const mailtoHref = `mailto:muzamil692008@gmail.com?subject=${encodeURIComponent(
    "Let's Work Together",
  )}`;
  return (
    <>
      <section className="mt-10 overflow-hidden">
        <div>
          <div data-aos="fade-up" className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-gradient-to-r from-transparent to-cyan-400"></span>

              <span className="uppercase tracking-[0.35em] text-sm font-semibold text-cyan-400">
                Contact Me
              </span>

              <span className="h-[2px] w-10 bg-gradient-to-l from-transparent to-cyan-400"></span>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
              <span className="text-white">Let's Work </span>

              <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text">
                Together
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 md:text-xl text-slate-400">
              Have a project in mind or just want to say hello? I'd love to hear
              from you. Let's create something meaningful and bring your ideas
              to life.
            </p>
          </div>
          <div
            data-aos="left"
            className="relative grid gap-8 mx-4 my-5 mt-16 lg:grid-cols-2"
          >
            <div
              className="
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
p-8
transition-all
duration-500
hover:border-[#38BDF8]/40
hover:shadow-[0_0_40px_rgba(56,189,248,.15)]
"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-500/15 via-transparent to-blue-500/5"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center border h-14 w-14 rounded-2xl bg-purple-500/10 border-purple-400/20">
                    <FaUserAlt className="text-2xl text-cyan-400" />
                  </div>
                  <h3 className="text-3xl font-medium text-[#F8FAFC]">
                    My Information
                  </h3>
                </div>

                <ul className="flex flex-col gap-4 mt-5">
                  <li
                    data-aos="fade-left"
                    className="
                    
  group
  flex items-center justify-between
  p-5
  rounded-2xl
  bg-white/5
  backdrop-blur-2xl
  border border-white/10
  shadow-[0_8px_32px_rgba(0,0,0,0.25)]
  transition-all duration-500
  hover:-translate-y-1.5
  hover:bg-white/10
  hover:border-cyan-400/40
  hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]
"
                  >
                    {/* Left Side */}
                    <div className="flex items-center flex-1 min-w-0 gap-5">
                      <div
                        className="
      h-16 w-16
      rounded-2xl
      flex items-center justify-center
      bg-cyan-500/10
      border border-cyan-400/20
      shadow-[0_0_20px_rgba(56,189,248,.25)]
      group-hover:scale-110
      transition-all duration-500
    "
                      >
                        <FaEnvelope className="text-3xl text-cyan-400" />
                      </div>

                      <div className="min-w-0">
                        <h3
                          data-aos="fade-left"
                          className="text-2xl font-semibold text-white"
                        >
                          Email
                        </h3>

                        <p className="text-lg break-words text-slate-400">
                          muzamil692008@gmail.com
                        </p>
                      </div>
                    </div>

                    {/* Right Icon */}
                    <div className="flex items-center justify-center transition-all duration-500 border rounded-full h-14 w-14 bg-cyan-500/10 border-cyan-400/20 text-cyan-400 group-hover:rotate-12 group-hover:scale-110">
                      <a href={mailtoHref}>
                        {" "}
                        <FaPaperPlane className="text-xl" />
                      </a>
                    </div>
                  </li>
                  <li
                    data-aos="fade-left"
                    className="
    group
    flex items-center justify-between
    p-5
    rounded-2xl
    bg-white/5
    backdrop-blur-2xl
    border border-white/10
    shadow-[0_8px_30px_rgba(0,0,0,0.25)]
    transition-all duration-500
    hover:-translate-y-1
    hover:bg-white/10
    hover:border-green-400/40
    hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]
  "
                  >
                    {/* Left Side */}
                    <div className="flex items-center flex-1 min-w-0 gap-5">
                      <div
                        className="
        h-16 w-16
        flex items-center justify-center
        rounded-2xl
        bg-green-500/10
        border border-green-400/20
        shadow-[0_0_20px_rgba(34,197,94,0.25)]
        transition-all duration-500
        group-hover:scale-110
      "
                      >
                        <FaPhoneAlt className="text-3xl text-green-400" />
                      </div>

                      <div className="min-w-0">
                        <h3
                          data-aos="fade-left"
                          className="text-2xl font-semibold text-white"
                        >
                          Phone
                        </h3>

                        <p className="text-lg break-words text-slate-400">
                          <a href="tel:+923459848961">+92 345848961</a>
                        </p>
                      </div>
                    </div>

                    {/* Right Icon */}
                    <div className="flex items-center justify-center text-green-400 transition-all duration-500 border rounded-full h-14 w-14 bg-green-500/10 border-green-400/20 group-hover:rotate-12 group-hover:scale-110">
                      <a href="tel:+923459848961">
                        <FaWhatsapp className="text-2xl" />
                      </a>
                    </div>
                  </li>

                  <li
                    data-aos="fade-left"
                    className="
                    
    group
    flex items-center justify-between
    p-5
    rounded-2xl
    bg-white/5
    backdrop-blur-2xl
    border border-white/10
    shadow-[0_8px_30px_rgba(0,0,0,0.25)]
    transition-all duration-500
    hover:-translate-y-1
    hover:bg-white/10
    hover:border-purple-400/40
    hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
  "
                  >
                    {/* Left Side */}
                    <div className="flex items-center flex-1 min-w-0 gap-5">
                      <div
                        className="
        h-16 w-16
        flex items-center justify-center
        rounded-2xl
        bg-purple-500/10
        border border-purple-400/20
        shadow-[0_0_20px_rgba(168,85,247,0.25)]
        transition-all duration-500
        group-hover:scale-110
      "
                      >
                        <FaLocationArrow className="text-3xl text-purple-400" />
                      </div>

                      <div className="min-w-0">
                        <h3
                          data-aos="fade-left"
                          className="text-2xl font-semibold text-white"
                        >
                          Location
                        </h3>

                        <p className="text-lg break-words text-slate-400">
                          Tank , KpK , Pakistan
                        </p>
                      </div>
                    </div>

                    {/* Right Icon */}
                    <div className="flex items-center justify-center text-purple-400 transition-all duration-500 border rounded-full h-14 w-14 bg-purple-500/10 border-purple-400/20 group-hover:rotate-12 group-hover:scale-110">
                      <FaMapMarkedAlt className="text-2xl" />
                    </div>
                  </li>

                  <li
                    data-aos="fade-left"
                    className="
    group
    flex items-center justify-between
    p-5
    rounded-2xl
    bg-white/5
    backdrop-blur-2xl
    border border-white/10
    shadow-[0_8px_30px_rgba(0,0,0,0.25)]
    transition-all duration-500
    hover:-translate-y-1
    hover:bg-white/10
    hover:border-white/30
    hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]
  "
                  >
                    {/* Left Side */}
                    <div className="flex items-center flex-1 min-w-0 gap-5">
                      <div
                        className="
        h-16 w-16
        flex items-center justify-center
        rounded-2xl
        bg-white/5
        border border-white/10
        shadow-[0_0_20px_rgba(255,255,255,0.08)]
        transition-all duration-500
        group-hover:scale-110
      "
                      >
                        <FaGithub className="text-3xl text-white" />
                      </div>

                      <div className="min-w-0">
                        <h3
                          data-aos="fade-left"
                          className="text-2xl font-semibold text-white"
                        >
                          GitHub
                        </h3>

                        <p className="text-lg break-words text-slate-400">
                          github.com/ProgrammerMuzamil-dev
                        </p>
                      </div>
                    </div>

                    {/* Right Side */}
                    <a
                      href="https://github.com/ProgrammerMuzamil-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-white transition-all duration-500 border rounded-full h-14 w-14 bg-white/5 border-white/10 group-hover:rotate-12 group-hover:scale-110 hover:bg-white/10"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </a>
                  </li>

                  <li
                    data-aos="fade-left"
                    className="
    group
    flex items-center justify-between
    p-5
    rounded-2xl
    bg-white/5
    backdrop-blur-2xl
    border border-white/10
    shadow-[0_8px_30px_rgba(0,0,0,0.25)]
    transition-all duration-500
    hover:-translate-y-1
    hover:bg-white/10
    hover:border-blue-400/40
    hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
  "
                  >
                    {/* Left Side */}
                    <div className="flex items-center flex-1 min-w-0 gap-5">
                      <div
                        className="
        h-16 w-16
        flex items-center justify-center
        rounded-2xl
        bg-blue-500/10
        border border-blue-400/20
        shadow-[0_0_20px_rgba(59,130,246,0.25)]
        transition-all duration-500
        group-hover:scale-110
      "
                      >
                        <FaLinkedinIn className="text-3xl text-blue-400" />
                      </div>

                      <div className="min-w-0">
                        <h3
                          data-aos="fade-left"
                          className="text-2xl font-semibold text-white"
                        >
                          LinkedIn
                        </h3>

                        <p className="text-lg break-words text-slate-400">
                          linkedin.com/in/your-profile
                        </p>
                      </div>
                    </div>

                    {/* Right Side */}
                    <a
                      href="https://linkedin.com/in/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-blue-400 transition-all duration-500 border rounded-full h-14 w-14 bg-blue-500/10 border-blue-400/20 group-hover:rotate-12 group-hover:scale-110 hover:bg-blue-500/20"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                  </li>
                </ul>
                <div
                  data-aos="fade-left"
                  className="flex items-center justify-center"
                >
                  <ul className="flex items-center justify-start gap-5 mt-10">
                    <li className="bg-[#38BDF8] hover:scale-110 hover:bg-[#0EA5E9] transition-all duration-300 p-2 rounded-2xl">
                      <a href="https://github.com/ProgrammerMuzamil-dev">
                        <img width={30} src={github} alt="GitHub" />
                      </a>
                    </li>
                    <li className="bg-[#38BDF8] hover:scale-110 hover:bg-[#0EA5E9] transition-all duration-300 p-2 rounded-2xl">
                      <a href="">
                        <img width={40} src={linkedin} alt="LinkedIn" />
                      </a>
                    </li>
                    <li className="bg-[#38BDF8] hover:scale-110 hover:bg-[#0EA5E9] transition-all duration-300 p-2 rounded-2xl">
                      <a href={mailtoHref}>
                        <img width={30} src={email} alt="Email" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-8 items-cente ">
              <form className="flex flex-col space-y-8">
                {/* Heading */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl px-6 py-6 shadow-[0_0_40px_rgba(56,189,248,0.12)]">
                  {/* Glow */}
                  <div className="absolute w-32 h-32 rounded-full -top-10 -right-10 bg-cyan-500/20 blur-3xl"></div>
                  <div className="absolute w-32 h-32 rounded-full -bottom-10 -left-10 bg-purple-500/20 blur-3xl"></div>

                  <div
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="relative z-10"
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium tracking-widest uppercase border rounded-full border-cyan-400/20 bg-cyan-500/10 text-cyan-300">
                      Your Turn
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-white">
                      Let's Build
                      <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text">
                        {" "}
                        Something Amazing
                      </span>
                    </h2>

                    <p className="max-w-lg mt-3 text-lg text-slate-400">
                      Have an idea, project, or just want to say hello? Fill out
                      the form below and I'll get back to you as soon as
                      possible.
                    </p>
                  </div>
                </div>

                <div
                  data-aos="fade-right"
                  className="grid items-center gap-6 md:grid-cols-2"
                >
                  <InputBox
                    icon={<FaUser />}
                    placeholder="Your Name"
                    type="text"
                  />

                  <InputBox
                    data-aos="fade-right"
                    icon={<FaEnvelope />}
                    placeholder="Email Address"
                    type="email"
                  />
                </div>

                <InputBox icon={<FaTag />} placeholder="Subject" type="text" />

                <MessageBox />

                <button
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  type="submit"
                  className="
    group
    relative
    overflow-hidden
    flex
    items-center
    justify-center
    gap-3
    w-full
    h-16
    rounded-2xl
    bg-gradient-to-r
    from-cyan-500
    via-sky-500
    to-blue-600
    text-white
    text-xl
    font-semibold
    shadow-[0_10px_35px_rgba(56,189,248,0.35)]
    transition-all
    duration-500
    hover:-translate-y-1
    hover:scale-[1.02]
    hover:shadow-[0_0_40px_rgba(56,189,248,0.55)]
    active:scale-95
  "
                >
                  <span className="absolute inset-0 transition-transform duration-1000 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full"></span>

                  <span className="relative z-10">Send Message</span>

                  <FaPaperPlane className="relative z-10 text-lg transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:rotate-12" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContectMe;
