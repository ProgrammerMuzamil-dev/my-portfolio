import React from "react";
import done from "../../assets/aboutMeAssets/done.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  FaRocket,
  FaBullseye,
  FaLaptopCode,
  FaReact,
  FaGitAlt,
  FaPalette,
  FaPuzzlePiece,
  FaGlobe,
  FaCode,
  FaMobileAlt,
  FaRobot,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaUser,
  FaBookOpen,
  FaTools,
  FaGraduationCap,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

function ReactRouterIcon() {
  return (
    <svg viewBox="0 0 64 64" className="tech-icon" aria-label="React Router">
      <rect
        x="6"
        y="6"
        width="52"
        height="52"
        rx="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M22 24c6-8 18-8 24 0"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22 40c6 8 18 8 24 0"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 32h16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="20" cy="32" r="3" fill="currentColor" />
      <circle cx="44" cy="32" r="3" fill="currentColor" />
    </svg>
  );
}
function AboutMe() {
  const goals = [
    "Become a Full-Stack Developer",
    "Build Real-World Web Applications",
    "Contribute to Open Source Projects",
    "Master Modern Web Technologies",
    "Learn Backend Development",
    "Improve Problem-Solving Skills",
    "Create User-Friendly Digital Experiences",
    "Work on Innovative Software Projects",
    "Keep Learning and Growing as a Developer",
    "Start a Professional Career in Software Development",
    "Become an ML Developer",
  ];
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Responsive Websites",
      desc: "Build responsive websites that deliver a seamless experience across desktops, tablets, and mobile devices.",
    },
    {
      icon: <FaPalette />,
      title: "Modern UI Design",
      desc: "Design elegant, user-friendly interfaces with clean layouts and smooth interactions.",
    },
    {
      icon: <FaReact />,
      title: "React Applications",
      desc: "Develop fast, scalable, and reusable React applications using modern best practices.",
    },
    {
      icon: <FaGitAlt />,
      title: "Git & GitHub",
      desc: "Manage source code efficiently and collaborate using professional Git workflows.",
    },
    {
      icon: <FaPuzzlePiece />,
      title: "Problem Solving",
      desc: "Transform complex ideas into practical and effective software solutions.",
    },
    {
      icon: <FaGlobe />,
      title: "Web Development",
      desc: "Create modern websites focused on performance, responsiveness, and accessibility.",
    },
    {
      icon: <FaCode />,
      title: "Clean Code",
      desc: "Write organized, maintainable, and scalable code following industry standards.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile First",
      desc: "Build interfaces that look and perform beautifully on every screen size.",
    },
    {
      icon: <FaRobot />,
      title: "AI Assisted Development",
      desc: "Use AI tools to accelerate development, improve productivity, and explore new ideas.",
    },
  ];

  const technologies = [
    { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS3" },
    { icon: <FaJs className="text-[#F7DF1E]" />, name: "JavaScript" },
    { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
    {
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
      name: "Tailwind CSS",
    },
    { icon: <FaGitAlt className="text-[#F05032]" />, name: "Git" },
    { icon: <FaGithub className="text-white" />, name: "GitHub" },
    { icon: <SiVite className="text-[#646CFF]" />, name: "Vite" },
    {
      icon: <ReactRouterIcon className="text-[#CA4245]" />,
      name: "React Router",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section>
      <div className="p-5 overflow-hidden">
        {/* <div className="absolute -top-40 -left-32 w-[450px] h-[450px] rounded-full bg-[#38BDF8]/10 blur-[120px]">
          <div className="absolute top-96 -right-40 w-[380px] h-[380px] rounded-full bg-cyan-500/10 blur-[120px]"></div>
        </div> */}

        <div
          data-aos="fade-down"
          className="relative max-w-4xl py-20 mx-auto text-center"
        >
          <span className="px-5 py-2 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8] tracking-[0.25em] uppercase text-sm font-semibold">
            About Me
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-[#F8FAFC]">
            Passionate
            <span className="block bg-gradient-to-r from-[#38BDF8] via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Front-end Developer
            </span>
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-[#94A3B8] leading-9">
            I build modern, responsive and interactive web experiences using
            React, JavaScript and Tailwind CSS while continuously improving my
            skills through real-world projects.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <div className="px-6 py-3 border rounded-full bg-white/5 border-white/10 backdrop-blur-xl">
              Front-end Developer
            </div>

            <div className="px-6 py-3 border rounded-full bg-white/5 border-white/10 backdrop-blur-xl">
              React Developer
            </div>

            <div className="px-6 py-3 border rounded-full bg-white/5 border-white/10 backdrop-blur-xl">
              Always Learning
            </div>
          </div>
          <div className="mx-auto mt-12 h-[2px] w-40 rounded-full bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent"></div>
        </div>
        <div className="relative mt-24 space-y-16">
          {" "}
          <div className="grid gap-8 lg:grid-cols-3">
            <div
              data-aos="fade-right"
              className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 hover:border-[#38BDF8]/50 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#38BDF8]/10 flex items-center justify-center">
                  <FaUser className="text-3xl text-[#38BDF8]" />
                </div>

                <h2 className="text-4xl font-bold text-white">Who I Am</h2>
              </div>

              <p className="mt-8 text-lg  leading-9 text-[#CBD5E1]">
                I'm{" "}
                <span className="text-[#38BDF8]  font-semibold">
                  Muhammad Muzamil
                </span>
                , a passionate Front-end Developer currently pursuing FSc (ICS).
                I enjoy transforming ideas into modern, responsive, and
                interactive websites using React and modern web technologies.
                <br />
                <br />
                Every project I build helps me improve my problem-solving,
                creativity, and development skills while moving one step closer
                to becoming a Full Stack & Machine Learning Developer.
              </p>
            </div>

            {/* Stats */}
            <div
              data-aos="fade-left"
              className="flex flex-col justify-between p-8 border rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <h2 className="mb-8 text-3xl font-bold text-white">
                Quick Status
              </h2>

              <div className="space-y-6">
                <div className="card-glow card-glow:hover rounded-2xl bg-[#38BDF8]/10 p-6 border border-[#38BDF8]/20">
                  <h1 className="text-4xl font-black text-[#38BDF8]">15+</h1>

                  <p className="text-[#CBD5E1] mt-2">Projects Built</p>
                </div>

                <div className="card-glow card-glow:hover rounded-2xl bg-[#38BDF8]/10 p-6 border border-[#38BDF8]/20">
                  <h1 className="text-4xl font-black text-[#38BDF8]">9+</h1>

                  <p className="text-[#CBD5E1] mt-2">Technologies</p>
                </div>

                <div className="card-glow card-glow:hover rounded-2xl bg-[#38BDF8]/10 p-6 border border-[#38BDF8]/20">
                  <h1 className="text-4xl font-black text-[#38BDF8]">∞</h1>

                  <p className="text-[#CBD5E1] mt-2">Learning Never Stops</p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 hover:border-[#38BDF8]/50 transition-all duration-500"
          >
            <div className="flex items-center gap-5 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-[#38BDF8]/10 flex items-center justify-center">
                <FaBookOpen className="text-3xl text-[#38BDF8]" />
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white">My Journey</h2>

                <p className="text-[#94A3B8] mt-2">
                  My learning path in web development.
                </p>
              </div>
            </div>

            <div className="relative ml-5 border-l-2 border-[#38BDF8] space-y-12">
              <div data-aos="fade-right" className="relative pl-10">
                <div className="absolute -left-[13px] w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_25px_#38BDF8] animate-pulse"></div>

                <h3 className="text-2xl font-semibold text-white">
                  Started HTML
                </h3>

                <p className="mt-2 text-[#94A3B8]">
                  Began learning the fundamentals of web development by creating
                  simple webpages and understanding HTML structure.
                </p>
              </div>

              <div
                data-aos="fade-right"
                data-aos-delay="100"
                className="relative pl-10"
              >
                <div className="absolute -left-[13px] w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_25px_#38BDF8] animate-pulse"></div>

                <h3 className="text-2xl font-semibold text-white">
                  Learned CSS
                </h3>

                <p className="mt-2 text-[#94A3B8]">
                  Started designing beautiful and responsive layouts using
                  modern CSS techniques.
                </p>
              </div>

              <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="relative pl-10"
              >
                <div className="absolute -left-[13px] w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_25px_#38BDF8] animate-pulse"></div>

                <h3 className="text-2xl font-semibold text-white">
                  JavaScript
                </h3>

                <p className="mt-2 text-[#94A3B8]">
                  Learned programming concepts and added interactivity to
                  websites.
                </p>
              </div>

              <div
                data-aos="fade-right"
                data-aos-delay="300"
                className="relative pl-10"
              >
                <div className="absolute -left-[13px] w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_25px_#38BDF8] animate-pulse"></div>

                <h3 className="text-2xl font-semibold text-white">
                  React Development
                </h3>

                <p className="mt-2 text-[#94A3B8]">
                  Started building reusable components and interactive
                  single-page applications.
                </p>
              </div>

              <div
                data-aos="fade-right"
                data-aos-delay="400"
                className="relative pl-10"
              >
                <div className="absolute -left-[13px] w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_25px_#38BDF8] animate-pulse"></div>

                <h3 className="text-2xl font-semibold text-white">
                  Building Real Projects
                </h3>

                <p className="mt-2 text-[#94A3B8]">
                  Continuously improving by building modern React applications,
                  learning new technologies, and preparing for a professional
                  software development career.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="p-10 border rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl"
          >
            {/* Heading */}
            <div className="text-center mb-14">
              <div className="mx-auto w-20 h-20 rounded-3xl bg-[#38BDF8]/10 flex items-center justify-center">
                <FaTools className="text-4xl text-[#38BDF8]" />
              </div>

              <h2 className="mt-6 text-5xl font-black text-white">
                What I Can Do
              </h2>

              <p className="mt-4 text-[#94A3B8] max-w-2xl mx-auto">
                I create beautiful, fast and user-friendly web experiences with
                modern technologies and clean development practices.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="group rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#38BDF8]/60 hover:shadow-[0_0_40px_rgba(56,189,248,.25)]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#38BDF8]/10 flex items-center justify-center text-[#38BDF8] text-3xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                    {service.icon}
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#94A3B8]">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className=" shadow-inner   shadow-[#38BDF8] p-4 mt-16 rounded-2xl bg-[#1E293B]"
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-[#38BDF8]/10 flex items-center justify-center">
                <FaTools className="text-3xl text-[#38BDF8]" />
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white">Skill</h2>
                <p className="text-[#94A3B8] mt-2">
                  My tools which I use to bluid web.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-4 md:grid-cols-3 lg:grid-cols-5">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col items-center gap-4 hover:-translate-y-2 hover:border-[#38BDF8]/50 transition-all duration-500"
                >
                  <div className="text-5xl">{tech.icon}</div>

                  <h3 className="font-semibold text-white">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 hover:border-[#38BDF8]/50 transition-all duration-500"
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-[#38BDF8]/10 flex items-center justify-center">
                <FaGraduationCap className="text-3xl text-[#38BDF8]" />
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white">Education</h2>
                <p className="text-[#94A3B8] mt-2">
                  My academic and learning journey.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-3 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-cyan-400 via-sky-400 to-transparent"></div>

              <div className="space-y-12">
                <div data-aos="fade-right" className="relative pl-12">
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-[#38BDF8] shadow-[0_0_20px_#38BDF8]"></div>

                  <h3 className="text-2xl font-bold text-white">
                    Front-end Developer
                  </h3>

                  <p className="mt-2 text-[#94A3B8] leading-8">
                    Self-learning modern web development with React, JavaScript,
                    Tailwind CSS and real-world projects.
                  </p>
                </div>

                <div
                  data-aos="fade-right"
                  data-aos-delay="100"
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-[#38BDF8] shadow-[0_0_20px_#38BDF8]"></div>

                  <h3 className="text-2xl font-bold text-white">FSc (ICS)</h3>

                  <p className="mt-2 text-[#CBD5E1]">Government College Tank</p>

                  <span className="inline-block mt-4 px-4 py-2 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-sm font-semibold">
                    Currently Pursuing
                  </span>

                  <p className="mt-5 text-[#94A3B8] leading-8">
                    Alongside my studies, I continuously improve my front-end
                    development skills by building projects, exploring new
                    technologies, and learning modern development practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 hover:border-[#38BDF8]/50 transition-all duration-500"
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-[#38BDF8]/10 flex items-center justify-center">
                <FaRocket className="text-3xl text-[#38BDF8]" />
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white">Future Goals</h2>

                <p className="text-[#94A3B8] mt-2">
                  My roadmap for continuous growth and innovation.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {goals.map((goal, index) => (
                <div
                  key={goal}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#38BDF8]/60 hover:shadow-[0_0_30px_rgba(56,189,248,.25)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#38BDF8]/10 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <FaBullseye className="text-2xl text-[#38BDF8]" />
                  </div>

                  <p className="text-lg font-medium text-[#CBD5E1]">{goal}</p>
                </div>
              ))}
            </div>

            {/* Bottom Quote */}
            <div className="mt-12 rounded-2xl border border-[#38BDF8]/20 bg-[#38BDF8]/5 p-6 text-center">
              <p className="text-lg italic text-[#CBD5E1]">
                "Success isn't a destination—it's the result of learning,
                building, and improving every single day."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
