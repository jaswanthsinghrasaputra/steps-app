import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function previousHandler() {
    if (step > 1) setStep((s) => s - 1);
  }
  function nextHandler() {
    if (step < 3) setStep((s) => s + 1);
  }
  function OpenCloseHandler() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div>
      <button className="close" onClick={OpenCloseHandler}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step === 1 ? "active" : ""}`}>1</div>
            <div className={`${step === 2 ? "active" : ""}`}>2</div>
            <div className={`${step === 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">{`step ${step}:${messages[step - 1]} `}</p>
          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={previousHandler}
            >
              <span>👈 Previous</span>
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={nextHandler}>
              <span>Next 👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ bgColor, textColor, onClick ,children}) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >{children}</button>
  );
}

export default App;
