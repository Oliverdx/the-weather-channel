import styled from "styled-components";

export const WeatherCardWrapper = styled.div`
  display: grid;
  grid-template-rows: 50px auto 50px;
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

`;

export const CardBody = styled.section`
`

export const CardFooter = styled.section`
display: flex;
justify-content: space-between;`;

export const SmallInfo = styled.div`
  font-size: 15px;
`;