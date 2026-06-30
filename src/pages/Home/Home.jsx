import React, { use } from "react";
import myImage from "../../assets/homeAssets/myImage.png";
import github from "../../assets/homeAssets/github.png";
import linkedin from "../../assets/homeAssets/linkedin.png";
import email from "../../assets/homeAssets/email.png";
import resumePDF from "../../assets/Muhammad_Muzamil_Resume(1).pdf";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
function Home() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Muhammad_Muzamil_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section className="flex items-center min-h-screen px-6 overflow-hidden lg:px-20">
        <div className="grid items-center w-full grid-cols-1 gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="mb-4 text-xl text-sky-400">Hi, I'm 👋</p>

            <h1
              data-aos="fade-rght"
              data-aos-delay="100"
              className="text-6xl font-bold leading-tight text-white lg:text-8xl"
            >
              Muhammad
              <br />
              Muzamil
            </h1>

            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="mt-6 text-[#94a3b8] space-y-2"
            >
              <p className="typewriter typewriter-1">Frontend Developer</p>

              <p className="typewriter typewriter-2">React Developer</p>

              <p className="typewriter typewriter-3">UI Enthusiast</p>
            </div>

            <p
              data-aos="fade-right"
              data-aos-delay="300"
              className="max-w-xl mt-8 text-lg leading-8 text-slate-300"
            >
              I build modern, responsive and user-focused web applications using
              React, JavaScript and Tailwind CSS. My goal is to create clean
              interfaces and meaningful user experiences.
            </p>

            <div className="flex gap-4 mt-10">
              <button
                data-aos="fade-up"
                data-aos-delay="400"
                className="px-3 border uppercase border-[#38BDF8] hover:bg-[#0EA5E9] py-2 rounded-lg text-sm font-medium transition-all duration-300 text-[#F8FAFC] hover:text-[#0F172A]"
              >
                View Projects
              </button>

              <button
                data-aos="fade-up"
                data-aos-delay="400"
                onClick={downloadResume}
                className="px-3 border uppercase border-[#38BDF8] hover:bg-[#0EA5E9] py-2 rounded-lg text-sm font-medium transition-all duration-300 text-[#F8FAFC] hover:text-[#0F172A]"
              >
                Download Resume
              </button>
            </div>

            <ul className="flex items-center justify-start gap-5 mt-10">
              <li>
                <a href="">
                  <img width={30} src={github} alt="GitHub" />
                </a>
              </li>
              <li>
                <a href="">
                  <img width={40} src={linkedin} alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="">
                  <img width={30} src={email} alt="Email" />
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT */}

          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="flex justify-center"
          >
            <img src={myImage} className="portrait-glow" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
