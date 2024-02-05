import styled from "styled-components";

export const InputWrapper = styled.div`
  margin: 20px;

  label {
    position: relative;
    width: 500px;
    height: 50px;
    display: block;
  }

  span{
    position: absolute;
    display: block;
    width: 100%;
    top: 20px;
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
    font-size: 1em;
    color: #FFF;
    outline: none;

    &:hover{
      apperance: none;
      -webkit-appearance: none;
      margin: 0;
    }
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

  @media screen and (max-width: 768px){
    width: 90%;

    label{
      width: 100%;
      margin-bottom: 30px;

      span{
        font-size: 16px;
      }
    }
  }

`;
