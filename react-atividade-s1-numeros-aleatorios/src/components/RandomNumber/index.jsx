import { useState } from "react";
import "./style.css";

function RandomNumber() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  function sort() {
    setNumber(Math.floor(Math.random() * 1000) + 1);
  }

  return (
    <div className="container__number">
      <p>Número aleatório:</p>
      <p>{number}</p>
      <button onClick={sort}>Sortear</button>
    </div>
  );
}

export default RandomNumber;
