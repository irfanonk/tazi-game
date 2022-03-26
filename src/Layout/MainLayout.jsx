import React from "react";
import Navbar from "../components/navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <main className="mx-auto  min-h-screen text-white bg-[#00092E] bg-main-background bg-cover bg-no-repeat bg-center ">
        <div className="container mx-auto">
          <Navbar />
          <div className="h-40 bg-layout-header-one bg-auto bg-no-repeat bg-center"></div>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
