var nowCube; // shoonii utga ba 1-6 gesen utga vana
var activePlayer = 0; //odoo togloj bgaa toglogchiig zaana 0==player1 ,1==player2;
var score = [0, 0];
var roundScore = 0;
var t = 1;
var state = 0;
function randomCube() {
    t = Math.floor(Math.random() * 6) + 1;

    switch (t) {
        case 1:
            window.document.querySelector("img").src = "dice-1.png";
            break;
        case 2:
            window.document.querySelector("img").src = "dice-2.png";
            break;
        case 3:
            window.document.querySelector("img").src = "dice-3.png";
            break;
        case 4:
            window.document.querySelector("img").src = "dice-4.png";
            break;
        case 5:
            window.document.querySelector("img").src = "dice-5.png";
            break;
        case 6:
            window.document.querySelector("img").src = "dice-6.png";
            break;
    }
    return t;
}

//nowCube = randomCube();
var rollDom = window.document.querySelector("img");
var currentLabel0 = window.document.getElementById("current-0");
var currentLabel1 = window.document.getElementById("current-1");
var scoreLabel0 = window.document.getElementById("score-0");
var scoreLabel1 = window.document.getElementById("score-1");
function startState() {
    window.document.querySelector(".player-0-panel").classList.add("active");
    window.document.querySelector(".player-1-panel").classList.remove("active");
    activePlayer = 0;
    roundScore = 0;
    score = [0, 0];
    currentLabel0.textContent = 0;
    currentLabel1.textContent = 0;
    scoreLabel0.textContent = 0;
    scoreLabel1.textContent = 0;
    rollDom.style.display = "none";
    rollDom.style.display = "block";
}
startState();
/////////////////////////BTN_ROLL
document.querySelector(".btn-roll").addEventListener("click", function () {
    state = 1;
    // rollDom.style.display = "block";
    t = Math.floor(Math.random() * 6) + 1;
    rollDom.src = "dice-" + t + ".png";
    if (t !== 1) roundScore = roundScore + t;
    else {
        roundScore = 0;
        calc();
    }
    if (activePlayer === 0) currentLabel0.textContent = roundScore;
    else currentLabel1.textContent = roundScore;
});
/////////////////////////BNT_HOLD
document.querySelector(".btn-hold").addEventListener("click", calc);
document.querySelector(".btn-new").addEventListener("click", startState);

function calc() {
    if (state === 1) {
        state = 0;
        console.log(activePlayer);
        score[activePlayer] = score[activePlayer] + roundScore;
        window.document.getElementById("score-" + activePlayer).textContent = score[activePlayer];
        if (score[activePlayer] >= 100) {
            window.document.getElementById("name-" + activePlayer).textContent = "WINNER GOOD LUCK";
            window.document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        }
        //  scoreLabel0.textContent = score[0];
        //  scoreLabel1.textContent = score[1];

        if (activePlayer == 0) activePlayer = 1;
        else activePlayer = 0;

        roundScore = 0;
        currentLabel0.textContent = 0;
        currentLabel1.textContent = 0;
        window.document.querySelector(".player-0-panel").classList.toggle("active");
        window.document.querySelector(".player-1-panel").classList.toggle("active");
        // rollDom.style.display = "none";
    }
}
