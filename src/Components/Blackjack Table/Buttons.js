import React, { useState } from "react";

function Buttons({ hitMe, stand, split, double, surrender }) {
  return (
    <div>
      <button onClick={hitMe}>Hit me</button>
      <button onClick={stand}>Stand</button>
      <button onClick={split}>Split</button>
      <button onClick={double}>Double</button>
      <button onClick={surrender}>Surrender</button>
    </div>
  );
}

export default Buttons;
