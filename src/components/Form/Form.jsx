function InputBox({ icon, placeholder, type = "text" }) {
  return (
    <div className="group relative w-full">
      <div className="absolute z-10 text-xl -translate-y-1/2 pointer-events-none left-5 top-1/2 text-cyan-400 transition-all duration-300 group-focus-within:text-cyan-300">
        {icon}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        className="
        w-full
        h-16
        rounded-2xl
        bg-white/5
        border
        border-cyan-400/20
        backdrop-blur-xl
        pl-16
        pr-5
        text-white
        placeholder:text-slate-400
        outline-none
        transition-all
        duration-500
        focus:border-cyan-400
        focus:shadow-[0_0_30px_rgba(56,189,248,.35)]
        focus:translate-y-[-1px]
        hover:border-cyan-300/40
      "
      />
    </div>
  );
}

export default InputBox;
