import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/Play_icon.png";
import info_icon from "../../assets/info_icon.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} className="banner__img"/>
        <div className="hero__caption">
          <img src={hero_title} className="caption__img"/>
          <p>
            Discovering his ties to a scret ancient order, a young man living in
            modern Istanbul embarks a quest to save the city from an immortal
            enemy
          </p>
          <div className="hero__btns">
            <button className="btn">
              <img src={play_icon}/>
              Play
            </button>
            <button className="btn dark__btn">
              <img src={info_icon}/>
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
