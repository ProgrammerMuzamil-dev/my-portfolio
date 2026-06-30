function InputBox({ icon, placeholder, type = "text" }) {
  return (
    <div className="relative">
      <div className="absolute text-xl -translate-y-1/2 left-5 top-1/2 text-cyan-400">
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
        hover:border-cyan-300/40
      "
      />
    </div>
  );
}

export default InputBox;
