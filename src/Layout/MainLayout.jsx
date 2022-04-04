import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Layout = ({ children }) => {
  const pathname = useLocation().pathname;
  const headerName = pathname.match("/breeding") ? "two" : "one";
  return (
    <>
      <main className="min-h-[100vh] text-white bg-bgblue bg-main-background bg-cover bg-no-repeat bg-center  ">
        <div className="px-36 pb-16 mx-auto">
          <div className="relative">
            <Navbar />
          </div>

          <div className="flex flex-col justify-center items-center ">
            <img
              className=" max-w-full h-auto -mt-[100px] -mb-[78px] mx-auto"
              src={require("../assets/images/extra-bg-layer.png")}
              alt=""
            />
            <img
              className=" max-w-full h-auto  -mb-[22px] "
              src={require("../assets/images/roco.png")}
              alt=""
            />
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
