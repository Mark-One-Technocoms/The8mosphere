const Button = ({
  type = "secondary",
  size = "base",
  label,
  className = "",
}) => {
  let divClass =
    type === "primary"
      ? "bg-white text-black hover:text-white"
      : "border border-white text-white hover:text-black";

  let hoverEffect =
    type === "primary"
      ? "bg-gradient-to-r from-blue-500 to-blue-700"
      : "bg-white";

  let textSize =
    size === "lg"
      ? "text-base lg:text-lg font-bold"
      : size === "base"
      ? "text-sm lg:text-base font-semibold"
      : "text-xs lg:text-sm font-semibold";

  return (
    <div
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 shadow-lg transition-all duration-500 ease-in-out cursor-pointer ${divClass} ${textSize} ${className}`}
    >
      <span
        className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left ${hoverEffect}`}
      ></span>
      <span className="relative z-10">{label}</span>
    </div>
  );
};

export default Button;
