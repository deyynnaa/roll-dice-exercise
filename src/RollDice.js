import React, { useState } from "react";
import Die from "./Die";

const RollDice = () => {
  // State to keep track of dice values
  const [diceValues, setDiceValues] = useState([1, 1]);

  // Function to roll the dice and update state
  const rollDice = () => {
    const newDiceValues = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    setDiceValues(newDiceValues);
    console.log("New Dice Values:", newDiceValues);
  };

  return (
    <div>
      <div>
        {/* Render two Die components, passing the values as props */}
        <Die face={diceValues[0]} />
        <Die face={diceValues[1]} />
      </div>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default RollDice;
