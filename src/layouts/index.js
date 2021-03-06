import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Seo from "../components/seo";

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="main flex-auto flex-grow flex-shrink-0 mb-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
