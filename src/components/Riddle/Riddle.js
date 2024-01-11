import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./riddle.scss";

const Riddle = ({ riddle, onClick }) => {
  return (
    <main className="riddle">
      <div className="riddle__wrap">
        <p className="riddle__text">{riddle.riddle}</p>
        <ul className="riddle__options">
          {riddle.answers.map((data) => {
            return (
              <li key={data.answer}>
                <button
                  className="riddle__answer"
                  onClick={() => onClick(data.answer)}
                >
                  {data.answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Riddle;
