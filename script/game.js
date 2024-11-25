function startGame() {
    startBackgroundMusic();
    playerHp = 100;
    monsterHp = 100;
    stage = 1;
    score = 0;
    enemyDamage = calculateEnemyDamage(stage);
    document.getElementById('game').style.display = 'block';
    document.getElementById('gameOverOverlay').style.display = 'none';

    updateHpImages();

    showStageQuestion();
}


function updateHpImages() {
    const playerHpImg = document.getElementById('playerHpImg');
    const monsterHpImg = document.getElementById('monsterHpImg');

    playerHpImg.src = getHpImage(playerHp, true);  
    monsterHpImg.src = getHpImage(monsterHp, false);  

    if (playerHp <= 0 ) {
        startGame();
        heroOver();
        stopLowHpSound(); 
        endGame();
    } else if(playerHp <= 30) {
        playLowHpSound();
    } else {
        stopLowHpSound();
    }
}



function getHpImage(hp, isPlayer) {
    const basePath = isPlayer ? './assets/bar/playerbar-' : './assets/bar/slimebar-';
    if (hp >= 100) return `${basePath}100.png`;
    else if (hp >= 90) return `${basePath}90.png`;
    else if (hp >= 80) return `${basePath}80.png`;
    else if (hp >= 70) return `${basePath}70.png`;
    else if (hp >= 60) return `${basePath}60.png`;
    else if (hp >= 50) return `${basePath}50.png`;
    else if (hp >= 40) return `${basePath}40.png`;
    else if (hp >= 30) return `${basePath}30.png`;
    else if (hp >= 20) return `${basePath}20.png`;
    else if (hp >= 10) return `${basePath}10.png`;
    else return `${basePath}0.png`;
}

function generateQuestion(stage) {
    const operators = ['+', '-', 'x', '/'];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    let num3 = 0;
    let operator = '';
    let question = '';

    switch (stage) {
        case 1:
            operator = operators[Math.floor(Math.random() * operators.length)];
            switch (operator) {
                case '+':
                    question = `${num1} + ${num2}`;
                    correctAnswer = num1 + num2;
                    break;
                case '-':
                    question = `${num1} - ${num2}`;
                    correctAnswer = num1 - num2;
                    break;
                case 'x':
                    question = `${num1} x ${num2}`;
                    correctAnswer = num1 * num2;
                    break;
                case '/':
                    question = `${num1 * num2} / ${num1}`;
                    correctAnswer = num2;
                    break;
            }
            break;
        case 2:
            operator = operators[Math.floor(Math.random() * operators.length)];
            switch (operator) {
                case '+':
                    question = `${num1} + ${num2} + ${num3}`;
                    correctAnswer = num1 + num2;
                    break;
                case '-':
                    question = `${num1} - ${num2}`;
                    correctAnswer = num1 - num2;
                    break;
                case 'x':
                    question = `${num1} x ${num2}`;
                    correctAnswer = num1 * num2;
                    break;
                case '/':
                    question = `${num1 * num2} / ${num1}`;
                    correctAnswer = num2;
                    break;
            }
            break;
        case 3:
            num3 = Math.floor(Math.random() * 10) + 1;
            operator = operators[Math.floor(Math.random() * operators.length)];
            switch (operator) {
                case '+':
                    question = `${num1} + ${num2} + ${num3}`;
                    correctAnswer = num1 + num2 + num3;
                    break;
                case '-':
                    question = `${num1} - ${num2} - ${num3}`;
                    correctAnswer = num1 - num2 - num3;
                    break;
                case 'x':
                    question = `${num1} x ${num2}`;
                    correctAnswer = num1 * num2;
                    break;
                case '/':
                    question = `${num1 * num2} / ${num1}`;
                    correctAnswer = num2;
                    break;
            }
            break;
        case 4:
            num3 = Math.floor(Math.random() * 10) + 1;
            operator = operators[Math.floor(Math.random() * operators.length)];
            switch (operator) {
                case '+':
                    question = `${num1} + ${num2} + ${num3}`;
                    correctAnswer = num1 + num2 + num3;
                    break;
                case '-':
                    question = `${num1} - ${num2} - ${num3}`;
                    correctAnswer = num1 - num2 - num3;
                    break;
                case 'x':
                    question = `${num1} x ${num2} x ${num2}`;
                    correctAnswer = num1 * num2 * num2;
                    break;
                case '/':
                    question = `${num1 * num2} / ${num1}`;
                    correctAnswer = num2;
                    break;
            }
            break;
    }

    return question;
}

function calculateEnemyDamage(stage) {
    if (stage >= 3) {
        return 30;
    } else {
        return 10 + (stage - 1) * 5; 
    }
}


function updateEnemy(stage) {
    const enemy = document.querySelector('.enemy');
    if (!enemy) return;
    
    const enemyTypes = ['plus', 'minus', 'divide', 'cross'];
    const enemyIndex = (stage - 1) % enemyTypes.length;
    const enemyType = enemyTypes[enemyIndex];

    enemy.className = 'enemy';
    enemy.id = enemyType;

    console.log(`Stage: ${stage}, Enemy Type: ${enemyType}`);
}

function generateQuestion(stage) {
    const operators = ['+', '-', 'x', '/'];
    const num1 = Math.floor(Math.random() * 9) + 1; 
    const num2 = Math.floor(Math.random() * 9) + 1; 
    let num3 = Math.floor(Math.random() * 9) + 1; 
    let operator = '';
    let question = '';

    const getQuestionAndAnswer = (num1, num2, num3, operator) => {
        let question = '';
        let correctAnswer = 0;

        switch (operator) {
            case '+':
                question = `${num1} + ${num2} + ${num3}`;
                correctAnswer = num1 + num2 + num3;
                break;
            case '-':
                question = `${num1} - ${num2} - ${num3}`;
                correctAnswer = num1 - num2 - num3;
                break;
            case 'x':
                question = `${num1} x ${num2} x ${num3}`;
                correctAnswer = num1 * num2 * num3;
                break;
            case '/':
                question = `${num1 * num2} / ${num1}`;
                correctAnswer = num2;
                break;
        }

        return { question, correctAnswer };
    };

    switch (stage) {
        case 1:
            operator = operators[Math.floor(Math.random() * operators.length)];
            switch (operator) {
                case '+':
                    question = `${num1} + ${num2}`;
                    correctAnswer = num1 + num2;
                    break;
                case '-':
                    question = `${num1} - ${num2}`;
                    correctAnswer = num1 - num2;
                    break;
                case 'x':
                    question = `${num1} x ${num2}`;
                    correctAnswer = num1 * num2;
                    break;
                case '/':
                    question = `${num1 * num2} / ${num1}`;
                    correctAnswer = num2;
                    break;
            }
            break;
        case 2:
            operator = operators[Math.floor(Math.random() * operators.length)];
            switch (operator) {
                case '+':
                    question = `${num1} + ${num2} + ${num3}`;
                    correctAnswer = num1 + num2 + num3;
                    break;
                case '-':
                    question = `${num1} - ${num2}`;
                    correctAnswer = num1 - num2;
                    break;
                case 'x':
                    question = `${num1} x ${num2}`;
                    correctAnswer = num1 * num2;
                    break;
                case '/':
                    question = `${num1 * num2} / ${num1}`;
                    correctAnswer = num2;
                    break;
            }
            break;
        case 3:
            operator = operators[Math.floor(Math.random() * operators.length)];
            switch (operator) {
                case '+':
                    question = `${num1} + ${num2} + ${num3}`;
                    correctAnswer = num1 + num2 + num3;
                    break;
                case '-':
                    question = `${num1} - ${num2} - ${num3}`;
                    correctAnswer = num1 - num2 - num3;
                    break;
                case 'x':
                    question = `${num1} x ${num2}`;
                    correctAnswer = num1 * num2;
                    break;
                case '/':
                    question = `${num1 * num2} / ${num1}`;
                    correctAnswer = num2;
                    break;
            }
            break;
        case 4:
        default: // Use the same logic for stage 4 and beyond
            operator = operators[Math.floor(Math.random() * operators.length)];
            const result = getQuestionAndAnswer(num1, num2, num3, operator);
            question = result.question;
            correctAnswer = result.correctAnswer;
            break;
    }

    return question;
}



function showStageQuestion() {
    const answersDiv = document.querySelectorAll('.answer-btn');

    answersDiv.forEach(btn => {
        btn.style.opacity = '1';
    });

    if (playerHp <= 0) {
        setTimeout(() => {
            endGame();
            heroOver();
        }, 500);
        return;
    } else if (monsterHp <= 0) {
        
        showClearAlert();
        stage++;
        monsterHp = 100;
        enemyDamage = calculateEnemyDamage(stage);//
    }
    showQuestion(stage);
}






function showQuestion(stage) {
    const question = generateQuestion(stage);
    document.getElementById('question').innerText = question;
    setupAnswers();
    updateStatus();
    updateEnemy(stage);
    startTimer(stage);
}



function setupAnswers() {
    const answersDiv = document.querySelectorAll('.answer-btn');
    let answers = new Set();

    answers.add(correctAnswer);

    while (answers.size < 4) {
        let wrongAnswer = correctAnswer;
        while (answers.has(wrongAnswer)) {
            const offset = Math.floor(Math.random() * 5) + 1;
            if (Math.random() > 0.5) {
                wrongAnswer = correctAnswer + offset;
            } else {
                wrongAnswer = correctAnswer - offset;
            }
        }
        answers.add(wrongAnswer);
    }

    let answersArray = Array.from(answers).sort(() => Math.random() - 0.5);

    answersDiv.forEach((btn, index) => {
        btn.innerText = answersArray[index];
        btn.onclick = () => checkAnswer(parseInt(answersArray[index]));
        btn.style.opacity = 1;
    });
}

function updateStatus() {
    updateHpImages();
    document.getElementById('stage').innerText = stage;
    document.getElementById('playerScore').innerText = score;
}

function showAlertImage(isCorrect) {
    const alertDiv = document.querySelector('.alert');
    const alertImg = document.getElementById('alert-img');

    if (isCorrect) {
        alertImg.src = './assets/game/bener.png';
    } else {
        alertImg.src = './assets/game/salah.png';
    }

    alertDiv.style.display = 'block';
    alertImg.classList.add('alert-img');

    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 1500);
}

function showClearAlert() {
    playSound('./assets/sound/win.mp3', 0.3); 
    const alertDiv = document.querySelector('.alert');
    const alertImg = document.getElementById('alert-img');
    alertImg.src = './assets/game/clear.png';
    alertDiv.style.display = 'block';
    alertImg.classList.add('alert-img');
    
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 1500);
}


function checkAnswer(selectedAnswer) {
    const answersDiv = document.querySelectorAll('.answer-btn');

    answersDiv.forEach(btn => {
        btn.style.opacity = btn.innerText == correctAnswer ? '1' : '0.5';
    });

    if (selectedAnswer === correctAnswer) {
        showAlertImage(true);
        score += 10;
        playSound('./assets/sound/correct.mp3', 0.3); 
        attackHero(() => {
            monsterHp -= 10;
            updateHpImages();  
            showStageQuestion();
        });
    } else {
        showAlertImage(false);
        playSound('./assets/sound/wrong.mp3', 0.2); 
        DAttack(() => {
            playerHp -= enemyDamage;
            updateHpImages();  
            if (playerHp <= 0) {
                heroOver();
                endGame();

            } else {
                showStageQuestion();
            }
        });
    }
}


function endGame() {
    stopGameplay();
    stopLowHpSound(); 
    if (bgMusic) {
        bgMusic.pause();
        bgMusic = null;
    }
    const gameOverOverlay = document.getElementById('gameOverOverlay');
    gameOverOverlay.style.display = 'flex';
    document.getElementById('finalScore').innerText = `Score: ${score}`;
    playSound('./assets/sound/lose.mp3', 0.3);
}


document.getElementById('retryButton').addEventListener('click', () => {
    playSound('./assets/sound/select.mp3', 0.3); 
    document.getElementById('gameOverOverlay').style.display = 'none';
    window.location.href = "game.html";
});

document.getElementById('homeButton').addEventListener('click', () => {
    playSound('./assets/sound/select.mp3', 0.3);
    window.location.href = 'index.html';
});

document.querySelectorAll('.answer-btn, #retryButton, #homeButton').forEach(button => {
    button.addEventListener('mouseover', () => {
        playSound('./assets/sound/selection.mp3', 0.2);
    });
});


function stopGameplay() {
    clearInterval(timer);
    const answersDiv = document.querySelectorAll('.answer-btn');
    answersDiv.forEach(btn => {
        btn.onclick = null;
    });
}

function playSound(filePath, volume, loop = false) {
    const sound = new Audio(filePath);
    sound.volume = volume;
    sound.loop = loop;
    sound.play();
    return sound;
}



function startBackgroundMusic() {
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }
    bgMusic = playSound('./assets/sound/bg.mp3', 0.15, true); 
}

function playSound(filePath, volume, loop = false) {
    const sound = new Audio(filePath);
    sound.volume = volume;
    sound.loop = loop;
    sound.play();
    return sound; 
}


function stopLowHpSound() {
    if (!isLowHpPlaying) return;
    isLowHpPlaying = false;
    if (lowHpSound) {
        lowHpSound.pause();
        lowHpSound.currentTime = 0; 
        lowHpSound = null;
    }
    if (bgMusic) {
        bgMusic.play();
    }
}



function playLowHpSound() {
    if (isLowHpPlaying) return; 
    isLowHpPlaying = true;
    if (bgMusic) {
        bgMusic.pause();
    }
    lowHpSound = playSound('./assets/sound/lowhp.mp3', 0.1, true);
}
