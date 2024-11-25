let playerHp;
let monsterHp;
let stage;
let timer;
let correctAnswer;
let score;
let enemyDamage = 10;
let bgMusic = null;
let lowHpSound = null;
let isLowHpPlaying = false;

window.onload = function() {
    countdown(3, startGame);
};
