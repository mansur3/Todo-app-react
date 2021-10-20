


import {useState} from "react";

export const Counter = ({init}) => {
  const [counter, setCounter] = useState(init);
//   const handleAdd = () => {
//       if(counter > -1) {
//           setCounter(counter + 1);
//       }
//   }
//   const handleDecrease = () => {
//       if(counter > 0) {
//           setCounter(counter - 1);
//       }
//   }
  const handleClick = (value) => {
      setCounter(value);
  }
  return (
    <div>
      <h1>counter : {counter}</h1>
      <button onClick = {() => {
          handleClick( counter + 1)
      }}>Add</button>



      <button disabled = {counter === 0} onClick = {() => {
          handleClick(counter - 1);
      }}>Substruct</button>

      <button onClick={() => {
          handleClick(counter * 2);
      }}>Double</button>


    </div>
  );
}


