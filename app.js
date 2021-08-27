window.addEventListener('DOMContentLoaded', () => {
    const playersScoreLabel = document.querySelector('#player'),
          computersScoreLabel = document.querySelector('#computer'),
          rockBtn = document.querySelector('#rock'),
          paperBtn = document.querySelector('#paper'),
          scissorsBtn = document.querySelector('#scissors'),
          playersHand = document.querySelector('#players_hand'),
          computersHand = document.querySelector('#computers_hand'),
          rockPath = 'assets/rock.png',
          paperPath = 'assets/paper.png',
          scissorsPath = 'assets/scissors.png',
          variants = [rockPath, paperPath, scissorsPath],
          winnerLabel = document.querySelector('.winner');
    
    let playersChoice, computersChoice, playersScore, computersScore;

    playersScore = 0;
    computersScore = 0;

    const init = () => {
        rockBtn.addEventListener('click', () => {
            addAnimation(playersHand, 'animated1');
            addAnimation(computersHand, 'animated2');
            playersChoice = rockPath;
            computersChoice = variants[getRandomInt(0, 3)];
            disableButtons();
        });
    
        paperBtn.addEventListener('click', () => {
            addAnimation(playersHand, 'animated1');
            addAnimation(computersHand, 'animated2');
            playersChoice = paperPath;
            computersChoice = variants[getRandomInt(0, 3)];
            disableButtons();
        });
    
        scissorsBtn.addEventListener('click', () => {
            addAnimation(playersHand, 'animated1');
            addAnimation(computersHand, 'animated2');
            playersChoice = scissorsPath;
            computersChoice = variants[getRandomInt(0, 3)];
            disableButtons();
        });
    
        playersHand.addEventListener('webkitAnimationEnd', () => {
            clearAnimation(playersHand, 'animated1');
            clearAnimation(computersHand, 'animated2');
            throwHands();
            winner();
            setTimeout(() => {
                setDefaultOptions();
                ableButtons();
            }, 2000);
    
        });
    
        function getRandomInt(min, max) {
            min = Math.ceil(3);
            max = Math.floor(0);
            return Math.floor(Math.random() * (max - min)) + min; 
        }
    
        function addAnimation(elem, animation) {
            elem.classList.add(animation);
        }
    
        function clearAnimation(elem, animation) {
            elem.classList.remove(animation);
        }

        function disableButtons() {
            rockBtn.setAttribute('disabled', 'true');
            paperBtn.setAttribute('disabled', 'true');
            scissorsBtn.setAttribute('disabled', 'true');
        }

        function ableButtons() {
            rockBtn.removeAttribute('disabled');
            paperBtn.removeAttribute('disabled');
            scissorsBtn.removeAttribute('disabled');
        }
    
        function winner() {
            playersChoice = playersHand.getAttribute('src');
            computersChoice = computersHand.getAttribute('src');
    
            if ((playersChoice == rockPath && computersChoice == rockPath) ||
               (playersChoice == paperPath && computersChoice == paperPath) ||
               (playersChoice == scissorsPath && computersChoice == scissorsPath)) {
                draw();
            } else {
                if (playersChoice == paperPath && computersChoice == rockPath) {
                    playerWon();
                } else if (playersChoice == rockPath && computersChoice == paperPath) {
                    computerWon();
                }
                
                if (playersChoice == rockPath && computersChoice == scissorsPath) {
                    playerWon();
                } else if (playersChoice == scissorsPath && computersChoice == rockPath) {
                    computerWon();
                }
                
                if (playersChoice == scissorsPath && computersChoice == paperPath) {
                    playerWon();
                } else if (playersChoice == paperPath && computersChoice == scissorsPath) {
                    computerWon();
                }
            }
    
            function draw() {
                winnerLabel.textContent = 'Draw!!!';
            }
    
            function playerWon() {
                winnerLabel.textContent = 'Player won';
                playersScore += 1;
                updateScores();
            }
    
            function computerWon() {
                winnerLabel.textContent = 'Computer won';
                computersScore += 1;
                updateScores();
            }
        }
    
        function throwHands() {
            playersHand.setAttribute('src', playersChoice);
            computersHand.setAttribute('src', computersChoice);
        }
    
        function setDefaultOptions() {
            playersHand.setAttribute('src', variants[0]);
            computersHand.setAttribute('src', variants[0]);
            winnerLabel.textContent = 'Choose an option';
        }
    
        function updateScores() {
            playersScoreLabel.textContent = playersScore;
            computersScoreLabel.textContent = computersScore;
        }
    };

    init();
});

