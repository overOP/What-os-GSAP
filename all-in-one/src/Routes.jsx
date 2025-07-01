
import React from "react";

import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/mainLayout";
import First from "./page/First";
import Scroll from "./page/Scroll";
import Svg from "./page/Svg";
import CustomCursor from "./page/CustomCursor";
import Timelain from "./page/Timelain";
import TexAnimation from "./page/TexAnimation";
import ScrollingText from "./page/ScrollingText";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "/first",
            element: <First/>
        },
        {
            path: "/scroll",
            element: <Scroll/>
        },
        {
            path: "/svg",
            element: <Svg/>
        },
        {
            path: "/custom-cursor",
            element: <CustomCursor/>   
        },
        {
            path: "/timelain",
            element: <Timelain/>
        },
        {
            path: "/text-animation",
            element: <TexAnimation/>
        },
        {
            path: "scrolling-text",
            element: <ScrollingText/>
        }
    ],
  },
]);
