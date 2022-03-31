import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Layout = ({ children }) => {
  const pathname = useLocation().pathname;
  console.log("pathname,", pathname);
  const headerName = pathname.match("/breeding") ? "two" : "one";
  console.log("headerName,", headerName);
  return (
    <>
      <main className="min-h-[100vh] text-white bg-bgblue bg-main-background bg-cover bg-no-repeat bg-center ">
        <div className="container mx-auto">
          <Navbar />
          {/* shining blue elipse */}
          {/* <div className="flex justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="843"
              height="265"
              viewBox="0 0 657 265"
            >
              <path
                id="Path_4297"
                data-name="Path 4297"
                d="M328.5,0C509.926,0,657,17.685,657,39.5S509.926,79,328.5,79,0,61.315,0,39.5,147.074,0,328.5,0Z"
                transform="translate(93 93)"
                fill="#0110c8"
                opacity="0.200"
              />
            </svg>
          </div> */}

          {/* 
          <div className="h-16 bg-layout-header-one bg-auto bg-no-repeat bg-center bg-contain">

          </div> */}

          <div className="">
            <img
              className="w-full h-full"
              src={require(`../assets/images/layout-header-${headerName}.png`)}
              alt=""
            />
          </div>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
