import { useEffect, useReducer } from "react";

const timerReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, isExpired: false, isPaused: false, isRunning: true };
    case "PAUSE":
      return { ...state, isPaused: true, isRunning: false };
    case "END":
      return {
        ...state,
        isRunning: false,
        isExpired: true,
        time: action.payload,
      };
    case "TICK":
      return state.isRunning ? { ...state, time: state.time - 1 } : state;
    default:
      return state;
  }
};

export const useTimer = (initialTime, callback) => {
  const [state, dispatch] = useReducer(timerReducer, {
    time: initialTime || 60,
    isRunning: false,
    isPaused: false,
    isExpired: false,
  });

  useEffect(() => {
    let timerInterval;

    if (state.isRunning) {
      timerInterval = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    }

    if (state.time === 0) {
      dispatch({ type: "END", payload: initialTime });
      callback && callback();
    }

    return () => clearInterval(timerInterval);
  }, [state.time, initialTime, callback, state.isRunning]);

  const start = () => dispatch({ type: "START" });
  const pause = () => dispatch({ type: "PAUSE" });
  const end = () => dispatch({ type: "END", payload: initialTime });

  return { ...state, start, pause, end };
};
