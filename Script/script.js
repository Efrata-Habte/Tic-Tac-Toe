const single= document.getElementById('single');
const two= document.getElementById('two');
const restart= document.getElementById('restart');
const home= document.getElementById('home');
const modeSelection= document.querySelector('.mode');
const gameArea= document.querySelector('.game-area');
const info= document.querySelector('.info');
const playerText=info.querySelector('#player');
const boxes= document.querySelectorAll('.box');

// Function to show the game area and hide mode selection
function showGameArea(){
    modeSelection.style.display= 'none';
    gameArea.style.display= 'block';
}

// Function to hide the game area and show mode selection
function hideGameArea(){
    modeSelection.style.display= 'block';
    gameArea.style.display= 'none';
}

// Initialize or reset the game state
function initializeGame(){
    if (single) {
        if (playerText) {
            playerText.style.display = 'none';
        }
    }
    boxes.forEach(box=>{
        box.innerText='';
    });
}


// Event listeners for buttons
single.addEventListener('click',()=>{
    showGameArea();
    playerText.style.display='none';
});
two.addEventListener('click', showGameArea);

restart.addEventListener('click',()=>{
    initializeGame();
});

home.addEventListener('click', hideGameArea);