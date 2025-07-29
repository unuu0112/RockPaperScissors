function solve(playerTurn) {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    if(playerTurn === "r" || playerTurn === 'rock'){
        playerTurn = rock;
    } else if(playerTurn == "p" || playerTurn == "paper"){
        playerTurn = paper;
    } else if(playerTurn == "s" || playerTurn == 'scissors'){
        playerTurn = scissors;
    }

    console.log(`You choose ${playerTurn}`);
    let computerTurn = '';

    let comRandom = Math.floor(Math.random() * 3) + 1;
    switch (comRandom) {
        case 1:
            computerTurn = rock;
            break;
        case 2:
            computerTurn = paper;
            break;
        case 3:
            computerTurn = scissors
            break;
        default:
            break;
    }
    console.log(`The computer choose ${computerTurn}`);

    if((playerTurn == rock && computerTurn === scissors) || (playerTurn == scissors && computerTurn === paper) || (playerTurn == paper && computerTurn === rock)){
        console.log('You win!');
    } else if((computerTurn == rock && playerTurn === scissors) || (computerTurn == scissors && playerTurn === paper) || (computerTurn == paper && playerTurn === rock)) {
        console.log('You lose!');
    } else {
        console.log('This game was a draw!');
    }
}

solve('p');