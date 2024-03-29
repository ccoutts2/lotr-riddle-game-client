import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Riddle from "../../components/Riddle/Riddle";
import "./game.scss";

const Game = () => {
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_API_URL;

  const [riddle, setRiddle] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [isError, setIsError] = useState(false);
  const [riddleId, setRiddleId] = useState(1);

  const fetchRiddle = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/riddles/${riddleId}`);
      setRiddle(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRiddle();
  }, []);

  const updateGameState = () => {
    let correctAnswers = correctAnswer + 1;
    setCorrectAnswer(correctAnswers);
  };

  const onClick = (answer) => {
    if (answer === riddle.correct) {
      updateGameState();
      let riddleIdCounter = riddleId + 1;
      setRiddleId(riddleIdCounter);
      fetchRiddle();
    } else {
      setGameOver(true);
      navigate("/loser");
    }
  };

  if (correctAnswer > 7) {
    return <p>{navigate("/winner")}</p>;
  }

  if (isError) {
    return (
      <p>
        A dark presence sweeps over the cave - the necromancer has blocked your
        war cry...contact Gollum for support
      </p>
    );
  }

  if (!riddle) {
    return <p>Gollum is thinking of a riddle...</p>;
  }

  return (
    <main className="game">
      <Riddle riddle={riddle} onClick={onClick} />
    </main>
  );
};

export default Game;
