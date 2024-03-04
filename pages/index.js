import React from "react";

//Internal import
import Style from "../styles/index.module.css";
import {HeroSection, Service, BigNFTSlider, Subscribe, 
Title, Category, Filter, NFTCard, Collection} from "../components/componentindex";

const index = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
      <Title heading="New collection" paragraph="Discover the most outstanding NFTs in all topics of life."/>
      <Collection/>
      <Title heading="Feautured NFTs" paragraph="Discover the most outstanding NFTs in all topics of life."/>
      <Filter/>
      <NFTCard/>
      <Title heading="Browse by category" paragraph="Explore the NFTs in the most featured categories."/>
      <Category/>
      <Subscribe/>
    </div>
  );
};

export default index;