const Button = ({
  type = "secondary",
  size = "base",
  label,
  Icon,
  iconClass,
  buttonClassName = "",
  hoverEffectClassName = "",
}) => {
  let buttonClass =
    type === "primary"
      ? "bg-white text-black hover:text-white shadow-lg"
      : type === "secondary"
      ? "border border-white text-white hover:text-black shadow-lg"
      : "";

  let hoverEffect =
    type === "primary"
      ? "bg-gradient-to-r from-blue-500 to-blue-700 shadow-xl"
      : type === "secondary"
      ? "bg-white shadow-xl"
      : "";

  let buttonSize =
    size === "lg"
      ? "text-base lg:text-lg font-bold px-8 py-4"
      : size === "base"
      ? "text-sm lg:text-base font-semibold px-6 py-3"
      : size === "sm"
      ? "text-xs xl:text-sm font-semibold px-6 py-3"
      : "";

  return (
    <div
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-in-out cursor-pointer ${buttonClass} ${buttonSize} ${buttonClassName}`}
    >
      <span
        className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left ${hoverEffect} ${hoverEffectClassName}`}
      ></span>
      <span className="relative z-10 flex items-center gap-2">
        {label || (Icon && <Icon className={iconClass} />)}
      </span>
    </div>
  );
};

export default Button;
