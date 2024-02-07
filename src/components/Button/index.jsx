import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[15px]" };
const variants = {
  fill: {
    indigo_A400: "bg-indigo-A400 shadow-bs text-white-A700",
    white_A700: "bg-white-A700 shadow-bs text-indigo-A400",
  },
};
const sizes = { xs: "p-2", sm: "p-4", md: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "fill",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["indigo_A400", "white_A700"]),
};

export { Button };
