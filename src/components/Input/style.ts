import styled from "styled-components";

export const InputWrapper = styled.div`
  margin: 20px;

  label {
    position: relative;
    width: 300px;
    height: 50px;
    display: block;
  }

  span{
    position: absolute;
    top: 27px;
    left: 50%;
    font-size: 18px;
    transform: translateX(-50%);
    transition: ease all 300ms;
  }

  input{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 5px;
    box-sizing: border-box;
    background: none;
    border: none;
    border-bottom: 2px solid #FFF;
    color: #FFF;
    outline: none;
  }

  label:has( > input:required:valid) span,
  label:has( > input:active) span,
  label:has( > input:hover) span,
  label span:hover{
    font-size: 12px;
    top: 0;
    left: 0;
    transform: translateX(0%)
  }

`;
