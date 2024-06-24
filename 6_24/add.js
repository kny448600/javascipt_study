const stageSize = 15;

for(let i=0; i < stageSize*stageSize; i++) {
    const box = document.createElement("div");
    document.querySelector(".grid").appendChild(box);
}
const grid = document.querySelector(".grid");
const stage = document.querySelector(".grid div")

let playerLoc = stageSize*(stageSize-2)+7

function makeplayer() {
    stage[playerLoc].classList.add("player")
}
makeplayer()

function moveplayer(e) {  }

document.addEventListener("keyup", moveplayer)

function moveplayer(e) {
    stage[playerLoc].classList.remove("player");
    switch (e.keyCode) {
        case 37:
            if (playerLoc % stageSize !== 0) { playerLoc--; }
            break;
        case  39:
            if (playerLoc % stageSize < stageSize-1) { playerLoc--; }
            break;
    }
    stage[playerLoc].classList.add("player");
}


function moveplayer() {
    invadersLoc.forEach(function(invader) {
        stage[invader].classList.remove("invader");
    })
    for(let i=0; i < invadersLoc.length; i++) {
        invadersLoc[i]++;
        stage[invadersLoc[i]].classList.add("invader")
    }
}
gameInterval = setInterval(moveInvader, 1000);

function gameStart() { }


function gameStop() { }


function gameRun() { }


function displayStatus() { }


startBtn.addEventListener("click", gameStart);
stopBtn.addEventListener("click", gameStop);

function gameStart() {
    makeplayer();
    makeInvader();
    gameInterval = setInterval(moveInvader, 1000);
    document.addEventListener("keyup", moveplayer);
}

function gameStop() {
    clearInterval(gameInterval);
    document.removeEventListener("keyup", moveplayer);
}

function gameStart() {
    displayStatus();
    gameInterval = setInterval(gameRun, 1000);
    document.addEventListener("keyup", moveplayer)
    gameRun()
}
function gameRun() {
    moveInvader();
}
function displayStatus(){
    displayStatus.innerText = invadersLoc.length + "/" + invadersLoc.length
}

function gameStart(){
    stage[playerLoc].classList.remove("player");
    invadersLoc.forEach(function(invader) {
        stage[invader].classList.remove("invader");
    });
    playerLoc = stageSize*(stageSize-2)+7
    invadersLoc = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39
    ]
}

