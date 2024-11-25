// Function to play sound
function playSound(filePath, volume, loop = false) {
    const sound = new Audio(filePath);
    sound.volume = volume;
    sound.loop = loop;
    sound.play();
    return sound; // Return the audio object
}

// Define a variable to hold the Audio object for the theme sound
let themeSound;
let isSoundOn = false;

// Function to start the game
function startGame() {
    window.location.href = "game.html";
}

// Function to toggle sound
function toggleSound(state) {
    if (state) {
        // Play the theme sound
        const themeSoundPath = './assets/sound/theme.mp3';
        themeSound = playSound(themeSoundPath, 0.2, true);
        isSoundOn = true;
        document.getElementById('sound-on').style.display = 'none';
        document.getElementById('sound-off').style.display = 'block';
    } else {
        // Stop the theme sound
        if (themeSound) {
            themeSound.pause();
            themeSound.currentTime = 0; // Reset the sound
        }
        isSoundOn = false;
        document.getElementById('sound-on').style.display = 'block';
        document.getElementById('sound-off').style.display = 'none';
    }
}

// Function to check input and redirect page if necessary
function checkInput(input) {
    // Define the keyword to trigger the page redirect
    const keyword = "o"; // Ganti dengan kata kunci yang diinginkan

    // Check if the input matches the keyword
    if (input.toLowerCase() === keyword.toLowerCase()) {
        // Redirect to the target page
        window.location.href = "dokumentasi.html";
    }
}

// Wait for the DOM content to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Set up the start button click event
    document.getElementById('start-btn').addEventListener('click', function() {
        startGame();
    });

    // Set up the button hover sound effect
    document.querySelectorAll('#start-btn, .sound-btn').forEach(button => {
        button.addEventListener('mouseover', () => {
            playSound('./assets/sound/selection.mp3', 0.2); // Button hover sound
        });
    });

    // Set up the button hover sound effect
    document.querySelectorAll('#start-btn, .sound-btn').forEach(button => {
        button.addEventListener('mousedown', () => {
            playSound('./assets/sound/button.mp3', 0.2); // Button hover sound
        });
    });

    // Set up the sound toggle button events
    document.getElementById('sound-on').addEventListener('click', function() {
        toggleSound(true);
    });
    document.getElementById('sound-off').addEventListener('click', function() {
        toggleSound(false);
    });

    // Set up event listener for key press
    document.addEventListener('keypress', function(event) {
        // Get the input from the key press event
        const input = event.key;
        
        // Check the input against the keyword
        checkInput(input);
    });

    // Initialize the sound button visibility
    document.getElementById('sound-on').style.display = 'block';
    document.getElementById('sound-off').style.display = 'none';
});
