function DAttack(callback) {
    toggleQuiz(false);
    clearInterval(timer);
    const enemy = document.querySelector('.enemy');
    if (!enemy) return;

    const originalId = enemy.id;
    let walkId, attackId, damagedId;
    switch (originalId) {
        case 'divide':
            walkId = 'd-walk';
            attackId = 'd-attack';
            damagedId = 'damagedDivide';
            break;
        case 'minus':
            walkId = 'm-walk';
            attackId = 'm-attack';
            damagedId = 'm-damage';
            break;
        case 'cross':
            walkId = 'c-walk';
            attackId = 'c-attack';
            damagedId = 'c-damage';
            break;
        case 'plus':
        default:
            walkId = 'p-walk';
            attackId = 'p-attack';
            damagedId = 'p-damage';
            break;
    }

    enemy.id = walkId;
    setTimeout(() => {
        enemy.id = attackId;
        addShakeEffect();
        playSound('./assets/sound/hit.mp3', 0.15);
        damagedHero(() => {
            enemy.id = originalId;
            toggleQuiz(true);
            callback();
        });
    }, 2000);
}

function damagedHero(callback) {
    toggleQuiz(false);
    clearInterval(timer);
    const hero = document.querySelector('.hero');
    if (!hero) return;
    hero.id = 'damagedHero';

    setTimeout(() => {
        hero.id = 'walk';
        toggleQuiz(true);
        callback();
    }, 500);
}

function damagedEnemy(callback) {
    toggleQuiz(false);
    clearInterval(timer);
    const enemy = document.querySelector('.enemy');
    if (!enemy) return;

    const originalId = enemy.id;
    let damagedId;
    switch (originalId) {
        case 'divide':
            damagedId = 'damagedDivide';
            break;
        case 'minus':
            damagedId = 'm-damage';
            break;
        case 'cross':
            damagedId = 'c-damage';
            break;
        case 'plus':
        default:
            damagedId = 'p-damage';
            break;
    }

    enemy.id = damagedId;
    setTimeout(() => {
        enemy.id = originalId;
        toggleQuiz(true);
        callback();
    }, 500);
}

function attackHero(callback) {
    toggleQuiz(false);
    clearInterval(timer);
    const hero = document.querySelector('.hero');
    if (!hero) return;
    hero.id = 'move';

    setTimeout(() => {
        hero.id = 'attack';
        playSound('./assets/sound/hit.mp3', 0.15);
        addShakeEffect();
        damagedEnemy(() => {
            hero.id = 'walk';
            toggleQuiz(true);
            callback();
        });
    }, 2000);
}

function heroOver() {
    toggleQuiz(false);
    clearInterval(timer);
    const hero = document.querySelector('.hero');
    if (!hero) return;
    hero.id = 'heroOver';
}
