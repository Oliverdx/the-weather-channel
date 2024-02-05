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
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-gap: 20px;
  justify-content: center;
  width: 1000px;
  margin: 30px auto;
`;