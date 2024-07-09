// DOM Elements
const normalUserBtn = document.getElementById('normalUserBtn');
const adminBtn = document.getElementById('adminBtn');
const userInterface = document.getElementById('userInterface');

// Event Listeners
normalUserBtn.addEventListener('click', switchToNormalUser);
adminBtn.addEventListener('click', switchToAdmin);

// Initial mode: Normal User
let isAdminMode = false;

// Function to switch to Normal User mode
function switchToNormalUser() {
    isAdminMode = false;
    normalUserBtn.classList.add('active');
    adminBtn.classList.remove('active');
    renderUserInterface();
}

// Function to switch to Admin mode
function switchToAdmin() {
    isAdminMode = true;
    adminBtn.classList.add('active');
    normalUserBtn.classList.remove('active');
    renderAdminInterface();
}

// Function to render user interface for Normal User
function renderUserInterface() {
    userInterface.innerHTML = ''; // Clear previous interface

    const title = document.createElement('h2');
    title.textContent = 'Normal User Interface';
    userInterface.appendChild(title);

    // User selects 6 numbers
    const numbersLabel = document.createElement('div');
    numbersLabel.classList.add('label');
    numbersLabel.textContent = 'Select 6 numbers (1 - 52):';
    userInterface.appendChild(numbersLabel);

    const numbersInput = document.createElement('select');
    numbersInput.classList.add('select');
    numbersInput.setAttribute('multiple', true);
    for (let i = 1; i <= 52; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        numbersInput.appendChild(option);
    }
    userInterface.appendChild(numbersInput);

    // Option to use same numbers for Lotto Plus 1 and Lotto Plus 2
    const sameNumbersLabel = document.createElement('div');
    sameNumbersLabel.classList.add('label');
    sameNumbersLabel.textContent = 'Use same numbers for Lotto Plus 1 and Lotto Plus 2:';
    userInterface.appendChild(sameNumbersLabel);

    const sameNumbersCheckbox = document.createElement('input');
    sameNumbersCheckbox.type = 'checkbox';
    sameNumbersCheckbox.id = 'sameNumbersCheckbox';
    userInterface.appendChild(sameNumbersCheckbox);

    // Number of boards selection
    const boardsLabel = document.createElement('div');
    boardsLabel.classList.add('label');
    boardsLabel.textContent = 'Number of boards (1 - 10):';
    userInterface.appendChild(boardsLabel);

    const boardsInput = document.createElement('input');
    boardsInput.type = 'number';
    boardsInput.classList.add('select');
    boardsInput.min = 1;
    boardsInput.max = 10;
    userInterface.appendChild(boardsInput);

    // Button to generate tickets
    const generateBtn = document.createElement('button');
    generateBtn.classList.add('btn');
    generateBtn.textContent = 'Generate Tickets';
    generateBtn.addEventListener('click', generateTickets);
    userInterface.appendChild(generateBtn);
}

// Function to render user interface for Admin
function renderAdminInterface() {
    userInterface.innerHTML = ''; // Clear previous interface

    const title = document.createElement('h2');
    title.textContent = 'Admin Interface';
    userInterface.appendChild(title);

    // Button to simulate draw
    const simulateDrawBtn = document.createElement('button');
    simulateDrawBtn.classList.add('btn');
    simulateDrawBtn.textContent = 'Simulate Draw';
    simulateDrawBtn.addEventListener('click', simulateDraw);
    userInterface.appendChild(simulateDrawBtn);
}

// Function to generate tickets based on user input
function generateTickets() {
    // Fetch user input
    const numbersSelected = Array.from(document.getElementsByTagName('option'))
                                .filter(option => option.selected)
                                .map(option => parseInt(option.value));
    const useSameNumbers = document.getElementById('sameNumbersCheckbox').checked;
    const numBoards = parseInt(document.querySelector('input[type="number"]').value);

    // Generate tickets logic goes here...
    console.log('Generating tickets...');
}

// Function to simulate draw (for Admin)
function simulateDraw() {
    // Simulate draw logic goes here...
    console.log('Simulating draw...');
}
