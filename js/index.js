optionButtons = document.querySelectorAll(".option-button");
newGameButton = document.querySelector("#new-game-button");
sheldonsDisplay = document.querySelector("#sheldons-display");
playersDisplay = document.querySelector("#players-display");
resultDisplay = document.querySelector("#result-display");

function startGame(playersChoice) {
    disableOptionButtons(true);
    let sheldonsChoice = Math.floor(Math.random() * 5);
    sheldonsDisplay.src = "/img/" + sheldonsChoice + ".png";
    playersDisplay.src = "/img/" + playersChoice + ".png";
    whoWon(sheldonsChoice, playersChoice);
}

function disableOptionButtons(value) {
    for (let optionButton of optionButtons) {
        optionButton.disabled = value;
    }
    newGameButton.disabled = !value;
}

function whoWon(sheldonsChoice, playersChoice) {
    if (sheldonsChoice == playersChoice) {
        resultDisplay.style.color = "rgb(221, 171, 0)";
        resultDisplay.innerHTML = "Döntetlen!";
    } else if ((sheldonsChoice == (playersChoice + 1) % 5) || (sheldonsChoice == (playersChoice + 3) % 5)) {
        resultDisplay.style.color = "rgb(0, 152, 87)";
        resultDisplay.innerHTML = "Ön nyert!";
    } else {
        resultDisplay.style.color = "rgb(199, 15, 37)";
        resultDisplay.innerHTML = "Sheldon nyert!";
    }
}

function resetGame() {
    sheldonsDisplay.src = "";
    playersDisplay.src = "";
    resultDisplay.style.color = "white";
    resultDisplay.innerHTML = "Válasszon!";
    disableOptionButtons(false);
}