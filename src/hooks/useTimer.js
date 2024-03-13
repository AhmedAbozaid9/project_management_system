import { useEffect, useReducer } from "react";

const timerReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return {
        ...state,
        isExpired: false,
        isPaused: false,
        isRunning: true,
        time: action.payload,
      };
    case "PAUSE":
      return { ...state, isPaused: true, isRunning: false };
    case "RESUME":
      return { ...state, isPaused: false, isRunning: true };
    case "END":
      return {
        ...state,
        isRunning: false,
        isExpired: true,
      };
    case "TICK":
      return state.isRunning ? { ...state, time: state.time - 1 } : state;
    default:
      return state;
  }
};

export const useTimer = () => {
  const [state, dispatch] = useReducer(timerReducer, {
    time: 60,
    isRunning: false,
    isPaused: false,
    isExpired: true,
  });

  useEffect(() => {
    let timerInterval;

    if (state.isRunning) {
      timerInterval = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    }

    if (state.time === 0) {
      dispatch({ type: "END" });
      callback && callback();
    }

    return () => clearInterval(timerInterval);
  }, [state.time, state.isRunning]);

  const start = (initialTime) =>
    dispatch({ type: "START", payload: initialTime });
  const pause = () => dispatch({ type: "PAUSE" });
  const resume = () => dispatch({ type: "RESUME" });
  const end = () => dispatch({ type: "END" });

  return { ...state, start, pause, resume, end };
};
