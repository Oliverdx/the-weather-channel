import styled from "styled-components";

export const WeatherCardWrapper = styled.div`
  display: grid;
  grid-template-rows: 50px auto 50px;
  grid-gap: 20px;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  background: var(--darkest-gray);
  box-sizing: border-box;
  padding: 20px;
`;

export const CardTemperature = styled.h3`
  font-size: 40px;
  font-weight: 300;
`;

export const CardHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .updating-btn{
    width: 20px;
    height: 30px;
    appearance: none;
    -webkit-appearance: none;
    border: none;
    background: none;

      &_image-update,
      &_image-updating{
        width: 30px;
        height: auto;
      }

      &_image-updating{
        animation: 1000ms infinite forwards updatingMotion;
        transform-origin: center center;
      }
    }

    @keyframes updatingMotion{
      0%{
        transform: rotate(0deg)
      }
      100%{
        transform: rotate(270deg);
      }
    }
  }
`;

export const CardBody = styled.section`
  .weather{
    &_image{
      width: 150px;
      height: auto;
      margin: 0 auto;
      display: block;
    };

    &_description{
      text-align: center;
      margin-top: 10px;
    }
`;

export const CardFooter = styled.section`
display: flex;
justify-content: space-between;`;

export const SmallInfo = styled.div`
  font-size: 15px;
`;