import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Riddle = ({ riddle, handleSubmit }) => {
  return (
    <main>
      <p>{riddle.riddle}</p>

      {riddle.answers.map((data) => {
        return <p>{data.answer}</p>;
      })}
    </main>
  );
};

export default Riddle;
