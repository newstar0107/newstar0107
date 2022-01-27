var nowCube; // shoonii utga ba 1-6 gesen utga vana
var activeplayer = 0; //odoo togloj bgaa toglogchiig zaana 0==player1 ,1==player2;
var score = [0, 0];
var roundScore = 0;
var t;
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

nowCube = randomCube();
console.log(nowCube);
window.document.querySelector("#score-0").textContent = nowCube;
window.document.querySelector("#score-1").textContent = nowCube;
window.document.querySelector("#current-0").textContent = nowCube;
window.document.querySelector("#current-1").textContent = nowCube;
//window.document.querySelector(".dice").style.display = "none";
