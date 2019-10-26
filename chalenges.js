/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scors, roundScore, activePlayer, gamePlaying;

init();
gamePlaying = true;
var lastDice;
// dice = Math.floor(Math.random() * 6) + 1;

// console.log(dice);

// document.querySelector("#current-" + activePlayer).textContent = dice;

// function btn() {
//     dice = Math.floor(Math.random() * 6) + 1;
//     document.querySelector(".dice").src = "dice-" + dice + ".png";
// }

document.querySelector(".btn-roll").addEventListener('click', function () {
    if (gamePlaying) {
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        var dice = dice1 + dice2;
        // 2. display the result
        // var diceDOM = document.querySelector(".dice")
        document.getElementById("dice-1").style.display = 'block';
        document.getElementById("dice-2").style.display = 'block';
        document.getElementById("dice-1").src = 'dice-' + dice1 + '.png';
        document.getElementById("dice-2").src = 'dice-' + dice2 + '.png';

        // 3. update the round scoure IF the rolled number was not 1
/*
        if (dice === 6 && lastDice === 6) {

            scors[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = 0;
            nextPlayer();

        } else if (dice !== 1) {
            //add score 
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //next player
            nextPlayer();

        }

        lastDice = dice;
        */

       if (dice1 !== 1 && dice1 !== 1) {
        //add score 
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //next player
        nextPlayer();

    }
    }
});


document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // add curent score to global score

        scors[activePlayer] += roundScore;

        // update the Ui 

        document.querySelector('#score-' + activePlayer).textContent = scors[activePlayer];

        var input = document.querySelector(".final_score").value;
        var winningScore;
        // check if player win game

        if (input) {
            winningScore = input
        } else {
            winningScore = 100;
        }

        if (scors[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!!!!!!!';

            hideDice();

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }


});

function hideDice() {
    document.getElementById("dice-1").style.display = 'none';
    document.getElementById("dice-2").style.display = 'none';
}
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    hideDice();
}

document.querySelector('.btn-new').addEventListener('click', init)

function init() {
    scors = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    hideDice();

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}