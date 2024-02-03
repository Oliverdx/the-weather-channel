import styled from "styled-components";

export const ForecastPageWrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 100vh;
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
    position: absolute;
    right: 50px;
    bottom: 50px;
    
    img{
      width: 75px;
      height: 75px;
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
`;