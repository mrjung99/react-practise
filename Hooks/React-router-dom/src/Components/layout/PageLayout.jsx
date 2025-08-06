import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";

const PageLayout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading")
    return (
      <h1 className="text-center mt-20 text-6xl font-semibold">Loading.....</h1>
    );

  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
