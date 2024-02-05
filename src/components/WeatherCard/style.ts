import styled from "styled-components";

export const WeatherCardWrapper = styled.div`
  display: grid;
  grid-template-rows: 50px auto 60px;
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

  @media screen and (max-width: 1019px){
    font-size: 30px;
  }
`;

export const CardHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .position{
    p{
      margin: 0;
    }
  }

  @media screen and (max-width: 1019px){
    font-size: 13px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  justify-content: center;
  flex-direction: column;
  grid-gap: 10px;
  width: 30px;

  .remove-btn,
  .updating-btn{
    width: 30px;
    height: 30px;
  }

  .remove-btn{
    &:hover:after{
      color: #F00;
      cursor: pointer;
    }

    &:after{
      display: block;
      content: "\\00d7";
      color: #FFF;
      font-size: 40px;
      line-height: 30px;
    }
  }

  .updating-btn{
      &_image-update,
      &_image-updating{
        width: 30px;
        height: auto;
      }

      &:hover{
        animation: 500ms 1 forwards updatingMotion;
        transform-origin: center center;
        cursor: pointer;
      }

      &_image-updating{
        animation: 1000ms infinite forwards updatingMotion;
        transform-origin: center center;
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
  justify-content: space-between;
  align-items: center;
`;

export const SmallInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SmallInfo = styled.span`
  display: flex;
  align-items: center;
  font-size: 15px;

  img{
    height: 20px;
    margin: 0 10px 0 0;
  }

  @media screen and (max-width: 1019px){
    font-size: 12px;
  }

`;