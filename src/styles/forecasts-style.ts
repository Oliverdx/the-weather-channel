import styled from "styled-components";

export const ForecastPageWrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: calc(100vh + 50px);
  padding: 50px 0 0;

  h1{
    font-size: 45px;
    margin: 0;
  }

  h2{
    margin: 0px auto 40px;
  }
  
  h1,h2{
    text-align: center;
  }

  .add_forecast-btn{
    position: fixed;
    right: 50px;
    bottom: 50px;
    background: #444;
    border-radius: 100%;
    cursor: pointer;
    
    img{
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (max-width: 1019px){
    h1{
      font-size: 30px;
    }

    h2{
      font-size: 20px;
    }
  }

  @media screen and (max-width: 768px){

    h1,h2{
      width: 90%;
    }

    h1{
      font-size: 25px;
      margin: 0 auto;
    }

    h2{
      font-size: 18px;
      margin: 30px auto;
    }
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-gap: 20px;
  justify-content: center;
  width: 1000px;
  margin: 30px auto;

  @media only screen and (max-width: 1019px){
    width: 700px;
    grid-template-columns: repeat(2, 300px);
    padding: 10px;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px){
    width: 350px;
    grid-template-columns: repeat(1, 300px);
    margin: 30px auto 0;
  }
`;