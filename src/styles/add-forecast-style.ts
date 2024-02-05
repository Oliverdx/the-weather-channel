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

  @media screen and (max-width: 768px){
    .title{
      width: 90%;
      font-size: 25px;
      margin: 0 auto;
    }

    .subtitle{
      width: 90%;
      font-size: 14px;
      margin: 30px auto;
    }

  }
`;

export const TwoColumns = styled.div`
  display: flex;
  justify-content: center;
  column-count: 2;

  @media screen and (max-width: 768px){
    width: 80%;
  }
`;