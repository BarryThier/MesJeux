let attemps = 0; let bulls = 0; let cows = 0;
let secretNumber = generateSecretNumber();
console.log(secretNumber);
let roundStarts = {
    rounds :1, 
    wins : 0,
    loses : 0,
}
const printGameStarts = () => {
    let startsGame = document.getElementById('startsGame');
    startsGame.innerHTML = `R : ${roundStarts.rounds} | V : ${roundStarts.wins} | D : ${roundStarts.loses}`;
}
const playAgain = () => {
    roundStarts.rounds += 1;
    printGameStarts();
    attemps = 0; bulls = 0; cows = 0;
    secretNumber = generateSecretNumber();
}
const checkGuess = () => {
    let guess = document.getElementById('guessInput').value;
    let secretString = secretNumber.join('');
    bulls = 0; cows = 0;
    const checkGuessLength = new Set (guess);
    if(guess.length !== checkGuessLength.size || guess.length !== 4) {
        document.getElementById('logsArea').value += `${guess} est invalide, veuillez entrer un nombre composé de quatre chiffres différents.\n`;
        return null;
    }

    attemps += 1;

    for(let i = 0; i < 4 ; i++)  {
       if(secretString[i] === guess[i]) {
        bulls += 1 ; 
       } else if(secretString.includes(guess[i])){
        cows += 1;
       }
    }

    if (bulls === 4) {
        document.getElementById('logsArea').value += `${secretString} | Bravo vous avez gagné en ${attemps} essaie.\n`;
        roundStarts.wins += 1;
        return playAgain();
    }else if (attemps === 10){
        document.getElementById('logsArea').value += `${secretString} | Dommage vous avez perdu.\n`;
        roundStarts.loses += 1;
        return playAgain();
    }
    document.getElementById('logsArea').value += `${guess} - ${bulls}B ${cows}C, essaie : ${attemps}\n`;
}
function generateSecretNumber() {
    let numbers = Array.from({length : 9}, (_v,k) => k + 1);
    let currentIndex = numbers.length;
    let randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        [numbers[currentIndex], numbers[randomIndex]] = [numbers[randomIndex], numbers[currentIndex]];
    }

    return numbers.slice(0,4);
}

const clearLogs = () => {
    document.getElementById('logsArea').value = '';
}

const printRules = () => {
    alert(`Entrer un nombre composé de 4 chiffres différents dans la case à côté de 'Guess'. L'ordinateur le compare avec
     le code secret et vous donne deux indices: les numéros'bulls' (B) et des cows (C). Qu'est ce que cela signifie ? Un 'bulls' est 
     un chiffre qui est présent dans les deux codes à la même position . Un 'cows' est un chiffre qui est présent dans les deux
     codes mais à une position différente. Par exemple, si le code secret est 7512 et que vous essayez 5392, la réponse sera '1B 1C' (1 bull 1 cows). C'est tout`);
}