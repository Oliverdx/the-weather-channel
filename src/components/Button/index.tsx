import React, { ButtonHTMLAttributes } from "react"
import { ButtonStyle } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button = ({...props}: ButtonProps) => {
  const { children } = props;

  return <ButtonStyle {...props}>
    {children}
  </ButtonStyle>
}

export default Button;