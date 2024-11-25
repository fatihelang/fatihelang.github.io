async function countdown(seconds, callback) {
    const countdownDiv = document.getElementById('countdown');
    if (!countdownDiv) {
        console.error('Countdown div not found!');
        return;
    }
    countdownDiv.style.display = 'block';

    let count = seconds;
    let currentImg = document.getElementById(`img-${count}`);
    if (!currentImg) {
        console.error(`Image for img-${count} not found!`);
        countdownDiv.style.display = 'none';
        return;
    }
    currentImg.style.display = 'block';

    while (count >= 0) {
        playCountdownSound(count); // Play the countdown sound for the current image
        await delay(1000);
        currentImg.style.display = 'none';
        count--;
        if (count >= 0) {
            currentImg = document.getElementById(`img-${count}`);
            if (!currentImg) {
                console.error(`Image for img-${count} not found!`);
                countdownDiv.style.display = 'none';
                callback();
                return;
            }
            currentImg.style.display = 'block';
        }
    }

    countdownDiv.style.display = 'none';
    callback();
}

function playCountdownSound(count) {
    let sound;
    if (count === 0) {
        sound = new Audio('./assets/sound/math.mp3'); 
        sound.volume = 0.1; 
    } else {
        sound = new Audio('./assets/sound/321.mp3');
        sound.volume = 0.3; 
    }
    sound.play();
}
