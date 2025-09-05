const single= document.getElementById('single');
const two= document.getElementById('two');
const restart= document.getElementById('restart');
const home= document.getElementById('home');
const modeSelection= document.querySelector('.mode');
const gameArea= document.querySelector('.game-area');
const info= document.querySelector('.info');
const playerText=info.querySelector('#player');
const boxes= document.querySelectorAll('.box');

let currentPlayer= 'X';
let gameOver= false;
let board= ['', '', '', '', '', '', '', '', ''];

let winningCombo=[
    [0,1,2],[3,4,5],[6,7,8], // Rows
    [0,3,6],[1,4,7],[2,5,8], // Columns
    [0,4,8],[2,4,6]          // Diagonals
]

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
    boxes.forEach(box => { 
        box.textContent= '';
        box.classList.remove('taken');
        box.removeEventListener('click', boxClick);
        box.addEventListener('click', boxClick, { once: true });
    });

    currentPlayer= 'X';
    gameOver= false;
    board= ['', '', '', '', '', '', '', '', ''];
    playerText.textContent= `Player ${currentPlayer}'s turn`;
    playerText.classList.remove('win', 'draw');
}

function boxClick(event){
    const index= event.target.dataset.index;
    if (board[index]!=='' || gameOver) return;

    board[index]=currentPlayer;
    event.target.textContent=currentPlayer;
    event.target.classList.add('taken');

    if (checkWin()){
        playerText.textContent=`Player ${currentPlayer} wins! 🎉`;
        playerText.classList.add('win');
        gameOver=true;
        return;
    }

    if (box.every(cell => cell !== '')){
        playerText.textContent= "It's a draw! 🤝";
        playerText.classList.add('draw');
        gameOver=true;
        return;
    }

    currentPlayer= currentPlayer==='X' ? 'O' : 'X';
    playerText.textContent= `Player ${currentPlayer}'s turn `;

    if (gameMode==='single' && currentPlayer==='O' && !gameOver) {
        aiMove();
    }
}

function checkWin(){
    // Logic to check for a win or draw can be implemented here
    return winningCombo.some(combo => combo.every(index=> board[index]===currentPlayer));
}



// Event listeners for buttons
single.addEventListener('click',()=>{
    showGameArea();
    playerText.style.display='none';
    initializeGame();
});
two.addEventListener('click', ()=>{
    showGameArea();
    playerText.style.display='block';
    playerText.textContent= "Player X's turn";
    initializeGame();
});

restart.addEventListener('click',()=>{
    initializeGame();
});

home.addEventListener('click', hideGameArea);