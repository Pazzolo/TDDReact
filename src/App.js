import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}
function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const currentButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        style={{ backgroundColor: buttonEnabled ? "gray" : buttonColor }}
        onClick={() => setButtonColor(currentButtonColor)}
        disabled={buttonEnabled}
      >
        Change to {replaceCamelWithSpaces(currentButtonColor)}
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
