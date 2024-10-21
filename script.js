let ticketNumber = '000';
let ticketInfo = 'X1';

document.querySelectorAll('.button[data-number]').forEach(button => {
    button.addEventListener('click', () => {
        addNumber(parseInt(button.getAttribute('data-number')));
    });
});

function addNumber(number) {
    ticketNumber = (ticketNumber + number).slice(-3).padStart(3, '0');
    updateDisplay();
}

function setX() {
    let currentNumber = parseInt(ticketInfo.slice(1)) || 1;
    currentNumber = (currentNumber % 9) + 1;
    ticketInfo = `X${currentNumber}`;
    updateDisplay();
}

function clearDisplay() {
    ticketNumber = '000';
    ticketInfo = 'X1';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('ticketNumber').textContent = ticketNumber;
    document.getElementById('ticketInfo').textContent = ticketInfo;
}

function printTicket() {
    const printCount = parseInt(ticketInfo.slice(1));
    for (let i = 0; i < printCount; i++) {
        window.print();
    }
    clearDisplay();
}

// Eventos del teclado
document.addEventListener('keydown', function(event) {
    const keyMap = {
        '1': 1, '2': 2, '3': 3,
        '4': 4, '5': 5, '6': 6,
        '7': 7, '8': 8, '9': 9,
        '0': 0
    };

    if (event.key in keyMap) {
        addNumber(keyMap[event.key]);
    } else if (event.key === '*' || event.key === 'x' || event.key === 'X') {
        setX();
    } else if (event.key === '-') {
        clearDisplay();
    } else if (event.key === 'Enter') {
        printTicket();
    }
});
