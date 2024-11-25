function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function toggleQuiz(enable) {
    document.querySelectorAll('.answer-btn').forEach(button => {
        button.disabled = !enable;
    });
}

function startTimer(stage) {
    const alertDiv = document.querySelector('.alert');
    const alertImg = document.getElementById('alert-img');
    clearInterval(timer);
    let timeLeft;

    if (stage >= 4) {
        timeLeft = 5;
    } else if (stage == 3) {
        timeLeft = 8;
    } else {
        timeLeft = 10;
    }

    const timeBar = document.getElementById('timeBar');
    if (!timeBar) return;

    timeBar.style.width = '100%';
    timeBar.style.backgroundColor = '#89CFF0';
    timeBar.innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        const percentage = (timeLeft / (stage >= 4 ? 5 : (stage == 3 ? 8 : 10))) * 100;
        timeBar.style.width = `${percentage}%`;

        timeBar.style.backgroundColor = timeLeft > (stage >= 4 ? 4 : (stage == 3 ? 6 : 8)) ? '#89CFF0' : 
        timeLeft > (stage >= 4 ? 3 : (stage == 3 ? 4 : 5)) ? '#90EE90' : 
        timeLeft > (stage >= 4 ? 1 : (stage == 3 ? 2 : 2)) ? '#FFFACD' : 
                       '#FFB6C1';  

        timeBar.innerText = timeLeft >= 0 ? timeLeft : '';
        if (timeLeft < 0) {
            clearInterval(timer);
            playSound('./assets/sound/timesup.mp3', 0.2);
            alertImg.src = './assets/game/whbis.png';

            alertDiv.style.display = 'block';
            alertImg.classList.add('alert-img');
        
            setTimeout(() => {
                alertDiv.style.display = 'none';
            }, 1500);
            
            DAttack(() => {
                playerHp -= enemyDamage;
                updateHpImages();
                showStageQuestion();
            });
            if (playerHp <= 0) {
                heroOver();
                endGame();
            }
        }
    }, 1000);
}


function addShakeEffect() {
    const gameContainer = document.getElementById('game');
    gameContainer.classList.add('shake');

    setTimeout(() => {
        gameContainer.classList.remove('shake');
    }, 500);
}
