import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Riddle from "../../components/Riddle/Riddle";

const Game = () => {
  const baseURL = "http://localhost:8000";

  const [riddle, setRiddle] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isError, setIsError] = useState(false);

  const fetchRiddle = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/riddles`);
      setRiddle(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRiddle();
  }, []);

  //   function to randomise the riddle - Math.floor(Math.random(riddle)

  if (isError) {
    return (
      <p>
        A dark presence sweeps over the cave the necromancer has blocked your war
        cry...contact Gollum for support
      </p>
    );
  }

  if (!riddle) {
    return <p>Gollum is thinking of a riddle...</p>;
  }

  return (
    <main>
      <h1>Game Page</h1>
      <Riddle />
    </main>
  );
};

export default Game;
