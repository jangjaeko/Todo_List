import { useReducer } from "react";

function reducer(state, action) {
  console.log(action); // 0 , {type: 'increase', data: 1}
  //   if (action.type === "increase") {
  //     return state + action.data;
  //   }
  //   if (action.type === "decrease") {
  //     return state - action.data;
  //   }
  switch (action.type) {
    case "increase":
      return state + action.data;
    case "decrease":
      return state - action.data;
    default:
      return state;
  }
}

export default function Exam() {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({
      //action object
      type: "increase",
      data: 1,
    });
  };
  const onClickMinus = () => {
    dispatch({
      type: "decrease",
      data: 1,
    });
  };
  return (
    <div>
      <h1>{state} </h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
}
