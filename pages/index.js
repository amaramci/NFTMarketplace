import React from "react";

//Internal import
import Style from "../styles/index.module.css";
import {HeroSection, Service, BigNFTSlider} from "../components/componentindex";

const index = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
    </div>
  );
};

export default index;