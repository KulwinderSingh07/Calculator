import { useState } from "react";
import "./App.css";

function App() {
  const [calculation, setCalculation] = useState("");
  const operators = ["/", "+", "-", "*", "."];
  const input_handle = (value) => {
    if (
      (operators.includes(value) && calculation === "") ||
      (operators.includes(value) && operators.includes(calculation.slice(-1)))
    ) {
      return;
    }
    setCalculation(calculation + value);
  };
  const evaluation = () => {
    setCalculation(eval(calculation).toString());
  };
  const do_deletion = () => {
    setCalculation(calculation.slice(0, -1));
  };
  const the_digit_maker = () => {
    let numericals = [];
    for (let i = 9; i >= 0; i--) {
      numericals.push(
        <button
          className={"valueof" + i.toString()}
          key={i}
          onClick={() => {
            input_handle(i.toString());
          }}
        >
          {i}
        </button>
      );
    }
    return numericals;
  };
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="display">{calculation || "0"}</div>
        <div className="calculatorkeys">
          <div className="operators">
            <button
              className="divide"
              onClick={() => {
                input_handle("/");
              }}
            >
              /
            </button>
            <button
              className="multiply"
              onClick={() => {
                input_handle("*");
              }}
            >
              *
            </button>
            <button
              className="addition"
              onClick={() => {
                input_handle("+");
              }}
            >
              +
            </button>
            <button
              className="subtratio"
              onClick={() => {
                input_handle("-");
              }}
            >
              -
            </button>
            <button
              className="decimal"
              onClick={() => {
                input_handle(".");
              }}
            >
              .
            </button>
          </div>
          <div className="numericals">
            {the_digit_maker()}
            <button
              className="clear"
              onClick={() => {
                setCalculation("");
              }}
            >
              AC
            </button>
            <button
              className="deletion"
              onClick={() => {
                do_deletion();
              }}
            >
              DEL
            </button>
          </div>
          <button
            className="evaluation"
            onClick={() => {
              evaluation();
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
