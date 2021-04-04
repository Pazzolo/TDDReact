import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const currentButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: buttonEnabled ? 'gray': buttonColor }}
        onClick={() => setButtonColor(currentButtonColor)}
        disabled={buttonEnabled}
      >
        Change to {currentButtonColor}
      </button>
      <input
        id="disableButtonCheckbox"
        type="checkbox"
        defaultChecked={buttonEnabled}
        aira-checked={buttonEnabled.toString()}
        onChange={(e) => setButtonEnabled(e.target.checked)}
      />
      <label htmlFor="disableButtonCheckbox">Disable Button</label>
    </div>
  );
}

export default App;
