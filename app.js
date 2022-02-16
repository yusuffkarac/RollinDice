const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

////////////////////////////////////////////////////

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");

////////////////////////////////////////////////////

const current0El = document.getElementById("current--0");
const current1E1l = document.getElementById("current--1");

////////////////////////////////////////////////////

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
// console.log(btnRoll);
////////////////////////////////////////////////////

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = "0";
  score1El.textContent = "0";
  current0El.textContent = "0";
  current1E1l.textContent = "0";
};

init();

function switchPlayer() {
  document.getElementById("current--" + activePlayer).textContent = "0";
  currentScore = 0;
  activePlayer = activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

btnRoll.addEventListener("click", function () {
  let dice;
  if (playing) {
    dice = Math.floor(Math.random() * 6) + 1; // 1-6
    diceEl.src = "dice-" + dice + ".png";
  }
  currentScore += dice;
  document.getElementById("current--" + activePlayer).textContent =
    currentScore;

  switchPlayer();

  hold(dice);
});
const sleep = (seconds) => {
    const waitUntil = new Date().getTime() + seconds * 1000
    while(new Date().getTime() < waitUntil) {
    }
}
function hold(dice) {

  scores[activePlayer] += currentScore;
  document.getElementById("current--" + activePlayer).textContent = dice;
  let gscore = document.getElementById("score--" + activePlayer).textContent;
  gscore = Number(gscore);
  gscore += dice;
  document.getElementById("score--" + activePlayer).textContent = gscore;
 

  if (gscore >= 20) {
    console.log("winneerrrr");
    console.log("player--" + activePlayer);
    document.querySelector("#name--" + activePlayer).textContent = "Winner!";
    let winners = document.getElementById("player--" + activePlayer);
    winners.style.backgroundColor = "rgb(83, 83, 83)";
    document.getElementById("name--" + activePlayer).style.color = "white";
    document.getElementById("name--" + activePlayer).style.color = "white";
    document.getElementById("score--" + activePlayer).style.color = "white";
    document.getElementById("currentt--" + activePlayer).style.backgroundColor =
      "#1ac5d1";
      }

}
btnNew.addEventListener("click", function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = "0";
  score1El.textContent = "0";
  current0El.textContent = "0";
  current1E1l.textContent = "0";
  
});
btnNew.onclick = () => init;