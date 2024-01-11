import "./riddle.scss";

const Riddle = ({ riddle, onClick }) => {
  return (
    <section className="riddle">
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
    </section>
  );
};

export default Riddle;
