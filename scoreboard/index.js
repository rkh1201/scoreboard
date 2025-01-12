scoreHome = 0
scoreGuest = 0 
let homeScoreText = document.getElementById("home_score")
let guestScoreText = document.getElementById("guest_score")

function addonehome() {
    scoreHome += 1
    homeScoreText.textContent = scoreHome
}

function addtwohome() {
    scoreHome += 2
    homeScoreText.textContent = scoreHome
}

function addthreehome() {
    scoreHome += 3
    homeScoreText.textContent = scoreHome
}

function addone() {
    scoreGuest += 1
    guestScoreText.textContent = scoreGuest
}

function addtwo() {
    scoreGuest += 2
    guestScoreText.textContent = scoreGuest
}

function addthree() {
    scoreGuest += 3
    guestScoreText.textContent = scoreGuest
}