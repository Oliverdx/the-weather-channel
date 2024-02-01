import React from "react";
import { InputWrapper } from "./style";

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}


const Input = ({ label, ...props }: inputProps) => {
  return <InputWrapper>
    <label>
      <span>{label}</span>
      <input {...props} />
    </label>
  </InputWrapper>
};

export default Input;
