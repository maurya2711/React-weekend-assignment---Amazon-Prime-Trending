import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  console.log(props.slides);
  const [current, setCurrent] = useState(0);
  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(0);
    }
  };

  const next = () => {
    current < props.slides.length - 1 && setCurrent(current + 1);
  };
  const restart = () => {
    setCurrent(0);
  };
  return (
    <>
      <div className="App">
        <div>
          <h1 data-testid="title">{props.slides[current].title}</h1>
          <p data-testid="text">{props.slides[current].text}</p>
        </div>
        <button
          data-testid="button-prev"
          disable={current === 0 ? true : false}
          onClick={prev}
        >
          Previous
        </button>
        <button
          data-testid="button-restart"
          disable={current === props.slides.length - 1 ? true : false}
          onClick={restart}
        >
          Restart
        </button>
        <button
          data-testid="button-next"
          disable={current === 0 ? true : false}
          onClick={next}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default App;
