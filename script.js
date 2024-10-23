const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

const checkWin = () => {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return cells[a].textContent;
        }
    }
    return null;
};

const handleClick = (event) => {
    const cell = event.target;
    if (cell.textContent) return; // ignore if cell already filled

    cell.textContent = currentPlayer;
    const winner = checkWin();
    
    if (winner) {
        alert(`${winner} wins!`);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
};

cells.forEach(cell => cell.addEventListener('click', handleClick));
