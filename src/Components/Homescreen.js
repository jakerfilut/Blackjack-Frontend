import React from "react";
import { Link } from "react-router-dom";

function homescreen() {
  // let navigate = useNavigate();

  return (
    <div>
      Welcome To Blackjack Trainer
      <div>Here you can hone your skills to beat the Casino</div>
      <nav>
        <Link to="/blackjack">
          <button>BlackJack</button>
        </Link>
      </nav>
      <div>
        Learn Perfect Strategy. Keep track of the count. Develop a bet spread
      </div>
      <nav>
        <Link to="/counting">
          <button>Speed Counting</button>
        </Link>
      </nav>
      <div>Learn to count cards with Speed and accuracy</div>
    </div>
  );
}

export default homescreen;
