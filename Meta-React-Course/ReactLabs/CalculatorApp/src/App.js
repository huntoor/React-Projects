import { useState, useRef } from "react";
import "./App.css";

import AdditionBtn from "./Components/AdditionBtn";
import SubtractionBtn from "./Components/SubtractionBtn";
import MultiplicationBtn from "./Components/MultiplicationBtn";
import DivideBtn from "./Components/DivideBtn";
import ResetInputBtn from "./Components/ResetInputBtn";
import ResetResultBtn from "./Components/ResetResult";


function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);


  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {result}
        </p>
        <input
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />

        <AdditionBtn setResult={setResult} inputRef={inputRef} />
        <SubtractionBtn setResult={setResult} inputRef={inputRef} />
        <MultiplicationBtn setResult={setResult} inputRef={inputRef} />
        <DivideBtn setResult={setResult} inputRef={inputRef} />
        <ResetInputBtn inputRef={inputRef} />
        <ResetResultBtn setResult={setResult} />
      </form>
    </div>
  );
}

export default App;