import React from "react";

const MyInput = ({ type, placeholder, className, onChange, icon }) => {
  return (
    <div className={`flex items-center border w-full p-2 ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        className={`flex-grow outline-none bg-transparent`}
        onChange={onChange ? onChange : null}
      />
    </div>
  );
};

// MyInputBorderBottom Component
const MyInputBorderBottom = ({
  type,
  placeholder,
  className,
  onChange,
  icon,
  name,
}) => {
  return (
    <div className={`flex items-center border-b-2 w-full p-1 ${className}`}>
      {/* Input Field */}
      <input
        type={type}
        name={name} // Added name for form handling
        placeholder={placeholder}
        className={`flex-grow outline-none bg-transparent`}
        onChange={onChange ? onChange : null}
      />
      {/* Icon (if any) */}
      {icon && <span className="mr-2">{icon}</span>}
    </div>
  );
};

export { MyInput, MyInputBorderBottom };
