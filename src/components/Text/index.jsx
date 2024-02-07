import React from "react";

const sizeClasses = {
  txtSarabunBold20: "font-bold font-sarabun",
  txtSarabunRegular18: "font-normal font-sarabun",
  txtSarabunLight14: "font-light font-sarabun",
  txtInterRegular20: "font-inter font-normal",
  txtInterBold25: "font-bold font-inter",
  txtSarabunLight14Black900: "font-light font-sarabun",
  txtInterRegular16: "font-inter font-normal",
  txtSarabunBold50: "font-bold font-sarabun",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
