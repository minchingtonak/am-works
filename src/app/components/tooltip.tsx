const Tooltip = ({ message, children }) => {
  return (
    <span className="group relative inline-block">
      {children}
      {/* <text className="absolute bottom-5 scale-0 transition-all rounded bg-accent p-2 text-xs text-white group-hover:scale-100"> */}
      <text className="absolute bottom-6 right-[-1] scale-0 transform -translate-x-1/2 transition-all rounded bg-accent dark:bg-[#e70e27] p-2 text-xs text-white group-hover:scale-100">
        {message}
      </text>
    </span>
  );
};

export default Tooltip;
