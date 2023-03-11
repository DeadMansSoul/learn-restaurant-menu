import React, { useReducer, useState, useEffect } from "react";
import "./style.css";

const reducer = (state, action) => {
    return (action.type === "DECR" && state>0 ) ? state-1 : state+1;
}

const UseReducer = () => {
  const initialData = 0;
//   const [myNum, setMyNum] = useState(0);
//initialData is your currentState or state
//dispatch triggers the reducer or reducer function which inturn will update the currentState
const [state, dispatch] = useReducer(reducer, initialData);

//   useEffect(() => {
//     document.title = `Chats(${myNum})`;
//   });

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => {dispatch({type:"INCR"})}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" onClick={() => {dispatch({type:"DECR"})}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseReducer;
