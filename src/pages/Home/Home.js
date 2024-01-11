import "./home.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import oneRing from "../../images/oneRing.jpeg";

const Home = () => {
  const navigate = useNavigate();

  const getRing = () => {
    navigate("/game");
  };

  return (
    <main className="home">
      <h1 className="home__title">gollum's cave</h1>
      <div className="home__text-wrap">
        <p className="home__text">
          You've discovered the entrance to an ominous cave and your eye is
          drawn to the glimmer of something gold and shiny.
        </p>
        <p className="home__text">Maybe you should pick it up?</p>
      </div>
      <img onClick={getRing} className="home__img" src={oneRing}></img>
    </main>
  );
};

export default Home;
