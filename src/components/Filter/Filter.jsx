import React from "react";

function Filter({ activeFilter, setActiveFilter }) {
  const filters = ["All", "Landing Pages", "Web Apps", "UI Components"];

  return (
    <>
      <section className="overflow-hidden">
        <div className="bg-[#334155] max-w-max w-full flex justify-center items-center gap-3 p-5 rounded-2xl border border-[#475569]  hover:bg-[#475569] hover:scale-x-105 transition-all duration-300 ">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
             px-3 py-2 rounded-lg border uppercase text-sm font-medium transition-all duration-300

             ${
               activeFilter === filter
                 ? "bg-[#0EA5E9] text-[#0F172A] border-[#0EA5E9]"
                 : "border-[#38BDF8] text-[#F8FAFC] hover:bg-[#0EA5E9] hover:text-[#0F172A]"
             }
         `}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export default Filter;
