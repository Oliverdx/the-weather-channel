import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  background: none;
  border: 2px solid #FFF;
  color: #FFF;
  font-size: 1em;
  transition: ease all 300ms;
  appearance: none;
  -webkit-appearance: none;

  &:hover{
    background: #FFF;
    color: #000;
    cursor: pointer;
  }
`;