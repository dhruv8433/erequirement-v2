import styled from "@emotion/styled";
import React from "react";

const Coloredinput = styled.input`
  background-color: ${({ theme }) => theme.palette.input.background};
`;

const MyColoredInput = ({
  type,
  placeholder,
  className,
  onChange,
  icon,
  name,
  value,
  inputClass,
  onKeyDown,
  disabled,
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      <Coloredinput
        type={type}
        placeholder={placeholder}
        className={`flex-grow outline-none bg-transparent ${inputClass} ${
          disabled ? "text-gray-400" : ""
        }`}
        onChange={onChange ? onChange : null}
        name={name}
        value={value}
        onKeyDown={onKeyDown ? onKeyDown : null}
        disabled={disabled}
      />
    </div>
  );
};

const MyInput = ({
  type,
  placeholder,
  className,
  onChange,
  icon,
  name,
  value,
}) => {
  return (
    <div className={`flex items-center border w-full p-2 ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        className={`flex-grow outline-none bg-transparent`}
        onChange={onChange ? onChange : null}
        name={name}
        value={value}
      />
    </div>
  );
};

const MyTextArea = ({
  placeholder,
  className,
  onChange,
  icon,
  cols,
  name,
  value,
}) => {
  return (
    <div className={`flex items-center border w-full p-2 ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      <textarea
        placeholder={placeholder}
        className={`flex-grow outline-none bg-transparent`}
        onChange={onChange ? onChange : null}
        cols={cols}
        name={name}
        value={value}
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

export { MyInput, MyInputBorderBottom, MyTextArea, MyColoredInput };
