import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const currentColor = useState;
  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={buttonEnabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        id="disableButtonCheckbox"
        type="checkbox"
        defaultChecked={buttonEnabled}
        aira-checked={buttonEnabled}
        onChange={(e) => setButtonEnabled(e.target.checked)}
      />
      <label htmlFor="disableButtonCheckbox">Disable Button</label>
    </div>
  );
}

export default App;
