import React, { useState } from "react";

function Buttons({ hitMe, stand, split, double, surrender }) {
  return (
    <div>
      <button className="hand__btn" onClick={hitMe}>
        Hit me
      </button>
      <button className="hand__btn" onClick={stand}>
        Stand
      </button>
      <button className="hand__btn" onClick={split}>
        Split
      </button>
      <button className="hand__btn" onClick={double}>
        Double
      </button>
      <button className="hand__btn" onClick={surrender}>
        Surrender
      </button>
    </div>
  );
}

export default Buttons;
