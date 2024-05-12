import React, {Suspense} from "react";
import {Outlet} from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import Header from "../Header/Header.jsx";
import Box from "@mui/material/Box";
import Navigation from "../Navigation/Navigation.jsx";

interface LayoutType {
  children: React.ReactNode;
  className: string;
}

export const Layout = ({children}: LayoutType) => {
  return (
    <div style={{maxWidth: 1240, margin: "0 auto", padding: "0 15px"}}>
      <Header/>
      <Navigation/>
      <Suspense
        fallback={
          <Box sx={{width: "100%"}}>
            <LinearProgress color="success"/>
          </Box>
        }
      >
        {children}
        <Outlet/>
      </Suspense>
    </div>
  );
};