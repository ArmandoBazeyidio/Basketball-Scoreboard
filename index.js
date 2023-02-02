home = document.getElementById("HomePoint")
away = document.getElementById("AwayPoint")
historyy = document.getElementById("history")

let homeCount = 0
let awayCount = 0

// home //
function OnePoint(){
    homeCount += 1
    home.textContent = homeCount
}

function TwoPoint(){
    homeCount += 2
    home.textContent = homeCount
}

function ThreePoint(){
    homeCount += 3
    home.textContent = homeCount
}

/// away ///


function aOnePoint(){
    awayCount += 1
    away.textContent = awayCount
}

function aTwoPoint(){
    awayCount += 2
    away.textContent = awayCount
}

function aThreePoint(){
    awayCount += 3
    away.textContent = awayCount
}

// new game //

function newGame() {
    historyy.textContent += homeCount + " - " + awayCount + " | "
    homeCount = 0
    home.textContent = 0
    awayCount = 0
    away.textContent = 0
}

//period reset //
// clock reset?//