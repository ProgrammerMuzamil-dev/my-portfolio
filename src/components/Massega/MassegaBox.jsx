function MessageBox() {
  return (
    <div className="relative">
      <textarea
        rows={6}
        placeholder="Write your message..."
        className="
          w-full
          rounded-2xl
          bg-white/5
          border
          border-cyan-400/20
          backdrop-blur-xl
          p-5
          text-white
          placeholder:text-slate-400
          resize-none
          outline-none
          transition-all
          duration-500
          hover:border-cyan-300/40
          focus:border-cyan-400
          focus:shadow-[0_0_30px_rgba(56,189,248,.35)]
        "
      />
    </div>
  );
}

export default MessageBox;
