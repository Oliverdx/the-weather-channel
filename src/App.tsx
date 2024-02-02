
import React from 'react';
import { RecoilRoot } from "recoil";
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';

import { GlobalStyle, MainStyle } from './styles/mainStyle';
import AddForecasts from './pages/add-forecast';
import Forecasts from './pages/forecasts';

const App: React.FC = () => {

  const router = createBrowserRouter([
    {
      path: "/forecasts",
      element: <Forecasts />
    },
    {
      path: "/add-forecasts",
      element: <AddForecasts />
    },
    {
      path: "*",
      element: <Navigate to="/forecasts" /> //Fallback to go to forecasts in case
      // a user try to navigate to any other page not listed here
    }
  ])

  return <RecoilRoot>
    <GlobalStyle />
    <MainStyle>
      <RouterProvider router={router} />
    </MainStyle >
  </RecoilRoot>;
};

export default App;
