import React from "react";
import Navbar from "../components/Navbar";
import BreadCrumbs from "../components/BreadCrumbs";
import Body from "./Body";
import Content from "../components/Services";
import WhyUs from "../components/WhyUs";
import Gallery from "../components/Gallery";
import Contactus from "../components/Contactus";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <BreadCrumbs items={[{ label: "Home", path: "/" }]} />
      <Body />
      <Content />
      <WhyUs />
      <Gallery />
      <Contactus />
    </div>
  );
};

export default Home;
