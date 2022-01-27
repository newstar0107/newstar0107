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
currentLabel0.textContent = 0;
currentLabel1.textContent = 0;
scoreLabel0.textContent = 0;
scoreLabel1.textContent = 0;
rollDom.style.display = "none";
rollDom.style.display = "block";
/////////////////////////BTN_ROLL
document.querySelector(".btn-roll").addEventListener("click", function () {
    state = 1;
    t = Math.floor(Math.random() * 6) + 1;
    rollDom.src = "dice-" + t + ".png";
    if (t !== 1) roundScore = roundScore + t;
    else {
        // console.log(activePlayer);
        if (activePlayer !== 0) {
            window.document.querySelector(".player-0-panel").classList.remove("active");
            window.document.querySelector(".player-1-panel").classList.add("active");
        } else {
            window.document.querySelector(".player-0-panel").classList.add("active");
            window.document.querySelector(".player-1-panel").classList.remove("active");
        }

        roundScore = 0;
        //  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        if (activePlayer == 0) activePlayer = 1;
        else activePlayer = 0;
        currentLabel0.textContent = 0;
        currentLabel1.textContent = 0;
    }
    if (activePlayer === 0) currentLabel0.textContent = roundScore;
    else currentLabel1.textContent = roundScore;
});
/////////////////////////BNT_HOLD
document.querySelector(".btn-hold").addEventListener("click", function () {
    if (state === 1) {
        state = 0;
        console.log(activePlayer);
        if (activePlayer === 0) score[0] = score[0] + roundScore;
        else score[1] = score[1] + roundScore;
        //  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        if (activePlayer == 0) activePlayer = 1;
        else activePlayer = 0;
        scoreLabel0.textContent = score[0];
        scoreLabel1.textContent = score[1];
        roundScore = 0;
        currentLabel0.textContent = 0;
        currentLabel1.textContent = 0;
        if (activePlayer !== 0) {
            window.document.querySelector(".player-0-panel").classList.remove("active");
            window.document.querySelector(".player-1-panel").classList.add("active");
        } else {
            window.document.querySelector(".player-0-panel").classList.add("active");
            window.document.querySelector(".player-1-panel").classList.remove("active");
        }
    }
});
