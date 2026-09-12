let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.reset');
let newGameButton = document.querySelector('.newbtn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');

let turnO = true;

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hidden');
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('Box clicked');
        if(turnO) {
            box.textContent = 'O';
            turnO = false;
        } else {
            box.textContent = 'X';
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});



const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }   
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.textContent = '';
    }   
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove('hidden');
};

const checkWinner = () => {
    for(let combination of winningCombinations) {
        let pos1value = boxes[combination[0]].innerText;
        let pos2value = boxes[combination[1]].innerText;
        let pos3value = boxes[combination[2]].innerText;
        if(pos1value !== '' && pos1value === pos2value && pos2value === pos3value) {
            if(pos1value === pos2value && pos2value === pos3value) {
                console.log("winner",pos1value);
                showWinner(pos1value);
            }
        }
    }
};

newGameButton.addEventListener('click', () => {
    resetGame();
});
resetButton.addEventListener('click', () => {
    resetGame();
});

