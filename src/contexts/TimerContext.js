import { useState, createContext } from "react";
const TimerContext = createContext();

const TimerContextProvider = ({ children }) => {
  const [timer, setTimer] = useState(0);

  return (
    <TimerContext.Provider value={{ timer, setTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerContextProvider };
