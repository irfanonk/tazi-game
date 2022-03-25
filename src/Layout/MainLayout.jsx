import React from "react";
import Navbar from "../components/navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <main className="mx-auto  min-h-screen text-white bg-[#00092E] bg-main-background bg-auto bg-no-repeat bg-center ">
        <div>
          <Navbar />
        </div>
        {children}
      </main>
    </>
  );
};

export default Layout;
