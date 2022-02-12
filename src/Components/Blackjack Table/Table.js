import React, { useState, useEffect } from "react";
import Betting from "./Betting";
import DealersHandDisplay from "./DealersHandDisplay";
import MyHandDisplay from "./MyHandDisplay";
import Perfect from "./Perfect";
import "./table.css";

const deckCount =
  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=4";
//get deck ID from this

// "success": true,
// "deck_id": "g78ippy1v049",
// "remaining": 52,
// "shuffled": true

// const draw 2 cards = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`

function Table() {
  const [deckID, setDeckID] = useState("");
  const [updateDealer, setUpdateDealer] = useState(0);
  const [updateMyHand, setUpdateMyHand] = useState(0);
  const [myHand, setMyHand] = useState([]);
  const [dealersHand, setDealersHand] = useState([]);
  const [updateValue, setUpdateValue] = useState(0);
  const [handValue, setHandValue] = useState([]);
  const [dealersHandValue, setDealersHandValue] = useState([]);
  const [handTotal, setHandTotal] = useState(0);

  const [dealersValue, setDealersValue] = useState(0);
  const [cardsValue, setCardsValue] = useState(0);

  const [standded, setStandded] = useState(false);

  const [theCount, setTheCount] = useState(0);
  const [delearsCount, setDealersCount] = useState(0);
  const [runningCount, setRunningCount] = useState(0);

  const drawCard2 = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`;
  const drawCard1 = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`;

  function dealCards() {
    fetch(deckCount)
      .then((res) => res.json())
      .then((deckid) => {
        setDeckID(deckid.deck_id);
        setHandValue("");
        setRunningCount(0);
        setDealersHandValue("");
        setStandded(false);
        setUpdateDealer(updateDealer + 1);
      });
  }

  function nextHand() {
    if (standded == true) {
      setRunningCount(runningCount + theCount + delearsCount);
      setMyHand([]);
      setDealersHand([]);
      setHandValue("");
      setDealersHandValue("");
      setStandded(false);
      setUpdateDealer(updateDealer + 1);
      setMyFirstHand([]);
      setMySecondHand([]);
      setSurr(false);
    }
  }

  useEffect(() => {
    if (drawCard2.length < 51) {
    } else {
      fetch(drawCard2)
        .then((res) => res.json())
        .then((myStartingHand) => {
          setMyHand(myStartingHand.cards);
          setUpdateValue(updateValue + 1);
        });
    }
  }, [updateMyHand]);

  useEffect(() => {
    if (drawCard1.length < 51) {
    } else {
      fetch(drawCard1)
        .then((res) => res.json())
        .then((dealersStartingHand) => {
          setDealersHand(dealersStartingHand.cards);
          setUpdateMyHand(updateMyHand + 1);
          setUpdateDealersValue(updateDealersValue + 1);
        });
    }
  }, [updateDealer]);

  const [updateDealersValue, setUpdateDealersValue] = useState(0);

  const [toggle, setToggle] = useState(false);

  function hitMe() {
    if (cardsValue >= 21) {
      console.log("Busted");
      setToggle(!toggle);
    } else {
      if (standded == false)
        fetch(drawCard1)
          .then((res) => res.json())
          .then((singleCard) => {
            const newHand = [...myHand, singleCard.cards[0]];
            setMyHand(newHand);
            setUpdateValue(updateValue + 1);
          });
    }
  }

  function stand() {
    setToggle(!toggle);
    setStandded(true);
  }

  useEffect(() => {
    if (drawCard1.length < 51) {
    } else {
      if (cardsValue > 21 && standded == false)
        fetch(drawCard1)
          .then((res) => res.json())
          .then((singleCard) => {
            const newHand = [...dealersHand, singleCard.cards[0]];
            setDealersHand(newHand);
            setStandded(true);
            setUpdateDealersValue(updateDealersValue + 1);
          });
      if (dealersValue < 17 && cardsValue < 22) {
        setTimeout(() => setToggle((prevToggle) => !prevToggle), 1000);
        fetch(drawCard1)
          .then((res) => res.json())
          .then((singleCard) => {
            const newHand = [...dealersHand, singleCard.cards[0]];
            setDealersHand(newHand);
            setStandded(true);
            setUpdateDealersValue(updateDealersValue + 1);
          });
      }
    }
  }, [toggle]);

  useEffect(() => {
    myHand.forEach((card) => {
      let newHandValue = [...handValue, card.code[0]];
      if (handValue < 3) {
        setHandValue(newHandValue + myHand[0].code[0]);
      } else {
        setHandValue(newHandValue);
      }
    });
    // get value of hand
    setHandTotal(handTotal + 1);
  }, [updateValue]);

  const [dealersHandTotal, setDealersHandTotal] = useState(0);

  useEffect(() => {
    dealersHand.forEach((card) => {
      let newHandValue = [...dealersHandValue, card.code[0]];
      setDealersHandValue(newHandValue);
    });
    // get value of hand
    setDealersHandTotal(dealersHandTotal + 1);
  }, [updateDealersValue]);

  // console.log(dealersHandValue);

  useEffect(() => {
    if (handValue.length < 2) {
    } else {
      if (handValue.length === 2) {
        let splittedCards = handValue.split("");
        let results = 0;
        let aceCount = 0;
        let count = 0;
        splittedCards.forEach((card) => {
          if (card === "A") {
            results = results + 11;
            aceCount++;
            count--;
          } else if (card === "2") {
            results = results + 2;
            count++;
          } else if (card === "3") {
            results = results + 3;
            count++;
          } else if (card === "4") {
            results = results + 4;
            count++;
          } else if (card === "5") {
            results = results + 5;
            count++;
          } else if (card === "6") {
            results = results + 6;
            count++;
          } else if (card === "7") {
            results = results + 7;
          } else if (card === "8") {
            results = results + 8;
          } else if (card === "9") {
            results = results + 9;
          } else if (card === "0") {
            results = results + 10;
            count--;
          } else if (card === "J") {
            results = results + 10;
            count--;
          } else if (card === "Q") {
            results = results + 10;
            count--;
          } else if (card === "K") {
            results = results + 10;
            count--;
          }
          while (results > 21 && aceCount > 0) {
            results = results - 10;
            aceCount--;
            setDealersValue(results);
          }
          if (results == 21) {
            stand();
          }
          setCardsValue(results);
          setTheCount(count);
        });
      } else {
        let results = 0;
        let aceCount = 0;
        let count = 0;
        handValue.forEach((card) => {
          if (card === "A") {
            results = results + 11;
            aceCount++;
            count--;
          } else if (card === "2") {
            results = results + 2;
            count++;
          } else if (card === "3") {
            results = results + 3;
            count++;
          } else if (card === "4") {
            results = results + 4;
            count++;
          } else if (card === "5") {
            results = results + 5;
            count++;
          } else if (card === "6") {
            results = results + 6;
            count++;
          } else if (card === "7") {
            results = results + 7;
          } else if (card === "8") {
            results = results + 8;
          } else if (card === "9") {
            results = results + 9;
          } else if (card === "0") {
            results = results + 10;
            count--;
          } else if (card === "J") {
            results = results + 10;
            count--;
          } else if (card === "Q") {
            results = results + 10;
            count--;
          } else if (card === "K") {
            results = results + 10;
            count--;
          }
          while (results > 21 && aceCount > 0) {
            results = results - 10;
            aceCount--;
            setDealersValue(results);
          }
          if (results == 21) {
            stand();
          }
          setCardsValue(results);
          if (results >= 21) {
            setToggle(!toggle);
          }
          setTheCount(count);
        });
      }
    }
  }, [handTotal]);

  useEffect(() => {
    if (dealersHandValue.length < 1) {
    } else {
      let results = 0;
      let aceCount = 0;
      let count = 0;
      dealersHandValue.forEach((card) => {
        if (card === "A") {
          results = results + 11;
          aceCount++;
          count--;
        } else if (card === "2") {
          results = results + 2;
          count++;
        } else if (card === "3") {
          results = results + 3;
          count++;
        } else if (card === "4") {
          results = results + 4;
          count++;
        } else if (card === "5") {
          results = results + 5;
          count++;
        } else if (card === "6") {
          results = results + 6;
          count++;
        } else if (card === "7") {
          results = results + 7;
        } else if (card === "8") {
          results = results + 8;
        } else if (card === "9") {
          results = results + 9;
        } else if (card === "0") {
          results = results + 10;
          count--;
        } else if (card === "J") {
          results = results + 10;
          count--;
        } else if (card === "Q") {
          results = results + 10;
          count--;
        } else if (card === "K") {
          results = results + 10;
          count--;
        }
        while (results > 21 && aceCount > 0) {
          results = results - 10;
          aceCount--;
          setDealersValue(results);
        }
        setDealersValue(results);
        setDealersCount(count);
      });
    }
  }, [handTotal, dealersHandTotal]);

  const [myFirstHand, setMyFirstHand] = useState([]);
  const [mySecondHand, setMySecondHand] = useState([]);
  const [update, setUpdate] = useState(0);
  const [myFirstHandValue, setMyFirstHandValue] = useState(0);
  const [mySecondHandValue, setMySecondHandValue] = useState(0);
  const [myFirstHandSwitch, setMyFirstHandSwitch] = useState(0);

  function split() {
    if (handValue.length < 2) {
    } else {
      if (standded == false && handValue[0] == handValue[1]) {
        fetch(drawCard2)
          .then((res) => res.json())
          .then((twoCards) => {
            const allCards = [
              myHand[0],
              twoCards.cards[0],
              myHand[1],
              twoCards.cards[1],
            ];
            setMyHand(allCards);

            const add2 = [myHand[0].code[0], twoCards.cards[0].code[0]];
            setMyFirstHand(add2);

            const add22 = [myHand[1].code[0], twoCards.cards[1].code[0]];
            setMySecondHand(add22);
            stand();
            setMyFirstHandSwitch(myFirstHandSwitch + 1);
            setCardsValue(0);
          });
      }
    }
    setUpdate(update + 1);
  }

  useEffect(() => {
    if (dealersHandValue.length < 1) {
    } else {
      let results = 0;
      let aceCount = 0;
      let Count = 0;
      myFirstHand.forEach((card) => {
        if (card === "A") {
          results = results + 11;
          aceCount++;
        } else if (card === "2") {
          results = results + 2;
        } else if (card === "3") {
          results = results + 3;
        } else if (card === "4") {
          results = results + 4;
        } else if (card === "5") {
          results = results + 5;
        } else if (card === "6") {
          results = results + 6;
        } else if (card === "7") {
          results = results + 7;
        } else if (card === "8") {
          results = results + 8;
        } else if (card === "9") {
          results = results + 9;
        } else if (card === "0") {
          results = results + 10;
        } else if (card === "J") {
          results = results + 10;
        } else if (card === "Q") {
          results = results + 10;
        } else if (card === "K") {
          results = results + 10;
        }
        while (results > 21 && aceCount > 0) {
          results = results - 10;
          aceCount--;
          setMyFirstHandValue(results);
        }
        setMyFirstHandValue(results);
      });
    }
  }, [myFirstHandSwitch]);

  useEffect(() => {
    if (dealersHandValue.length < 1) {
    } else {
      let results = 0;
      let aceCount = 0;
      let Count = 0;
      mySecondHand.forEach((card) => {
        if (card === "A") {
          results = results + 11;
          aceCount++;
        } else if (card === "2") {
          results = results + 2;
        } else if (card === "3") {
          results = results + 3;
        } else if (card === "4") {
          results = results + 4;
        } else if (card === "5") {
          results = results + 5;
        } else if (card === "6") {
          results = results + 6;
        } else if (card === "7") {
          results = results + 7;
        } else if (card === "8") {
          results = results + 8;
        } else if (card === "9") {
          results = results + 9;
        } else if (card === "0") {
          results = results + 10;
        } else if (card === "J") {
          results = results + 10;
        } else if (card === "Q") {
          results = results + 10;
        } else if (card === "K") {
          results = results + 10;
        }
        while (results > 21 && aceCount > 0) {
          results = results - 10;
          aceCount--;
          setMySecondHandValue(results);
        }
        setMySecondHandValue(results);
      });
    }
  }, [myFirstHandSwitch]);

  function double() {
    if (cardsValue >= 21) {
      console.log("Busted");
      setToggle(!toggle);
    } else {
      if (standded == false)
        fetch(drawCard1)
          .then((res) => res.json())
          .then((singleCard) => {
            const newHand = [...myHand, singleCard.cards[0]];
            setMyHand(newHand);
            setUpdateValue(updateValue + 1);
          });
    }
    stand();
  }

  const [surr, setSurr] = useState(false);

  function surrender() {
    if (standded === false) {
      fetch(drawCard1)
        .then((res) => res.json())
        .then((singleCard) => {
          const newHand = [...dealersHand, singleCard.cards[0]];
          setDealersHand(newHand);
          setStandded(true);
          setUpdateDealersValue(updateDealersValue + 1);
        });
      setSurr(true);
    }
  }

  return (
    <div>
      <hr />
      <button onClick={dealCards}>New Shoe</button>
      <button onClick={nextHand}>Next Hand</button>
      <br></br>
      <DealersHandDisplay dealersHand={dealersHand} />
      <br></br>
      {dealersValue}
      <br></br>
      <Betting runningCount={runningCount} />
      <br></br>
      <Perfect />
      {cardsValue}
      <br></br>
      <MyHandDisplay
        surrender={surrender}
        double={double}
        myHand={myHand}
        myFirstHandValue={myFirstHandValue}
        mySecondHandValue={mySecondHandValue}
        hitMe={hitMe}
        stand={stand}
        split={split}
      />
      <br></br>
      {/* The Count:{theCount} */}
      Running Count: {runningCount}
    </div>
  );
}

export default Table;
