import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Riddle = ({ riddle, onClick }) => {
  return (
    <main>
      <p>{riddle.riddle}</p>
      <ul>
        {riddle.answers.map((data) => {
          return (
            <li key={data.answer}>
              <button onClick={() => onClick(data.answer)}>{data.answer}</button>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Riddle;
