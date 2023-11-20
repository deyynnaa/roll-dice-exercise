// Die.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

const Die = ({ face }) => {
  let icon;

  // Determine which icon to use based on the face prop
  switch (face) {
    case 1:
      icon = faDiceOne;
      break;
    case 2:
      icon = faDiceTwo;
      break;
    case 3:
      icon = faDiceThree;
      break;
    case 4:
      icon = faDiceFour;
      break;
    case 5:
      icon = faDiceFive;
      break;
    case 6:
      icon = faDiceSix;
      break;
    default:
      icon = faDiceOne; // Default to "one" if face is not recognized
  }

  return (
    <div style={{ fontSize: "450px", margin: "10px" }}>
      <FontAwesomeIcon icon={icon} style={{ color: "#56d264" }} />
      <FontAwesomeIcon icon="fa-solid fa-dice-one" beatFade style={{color: "#56d264",}} />
    </div>
  );
};

export default Die;
