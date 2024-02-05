import styled from "styled-components";

export const AddData = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  .title{
    max-width: 600px;
    margin: 5px;
  }

  .subtitle{
    font-size: 20px;
    margin-bottom: 50px;
  }

  .text-error{
    margin: 20px 0;
    color: #F33;
  }
`;

export const TwoColumns = styled.div`
  display: flex;
  justify-content: center;
  column-count: 2;
`;