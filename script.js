document.addEventListener('DOMContentLoaded', function() {
    // Selecting elements
    var normalUserBtn = document.getElementById('normalUserBtn');
    var adminBtn = document.getElementById('adminBtn');
    var ticketPriceDisplay = document.getElementById('ticketPrice');
    var userInterface = document.getElementById('userInterface');
    
    // Adding click event listeners for mode selection
    normalUserBtn.addEventListener('click', function() {
        normalUserBtn.classList.add('active');
        adminBtn.classList.remove('active');
        updateUserInterface(); // Update user interface for normal user mode
    });
    
    adminBtn.addEventListener('click', function() {
        adminBtn.classList.add('active');
        normalUserBtn.classList.remove('active');
        updateAdminInterface(); // Update admin interface
    });

    // Function to update user interface for normal user mode
    function updateUserInterface() {
        userInterface.innerHTML = `
            <h2>Choose Number Boards</h2>
            <label for="numBoards">Number of Boards (Max 10 per ticket):</label>
            <input type="number" id="numBoards" min="1" max="10" value="1">
            <button id="generateBoardsBtn">Generate Boards</button>
            <div id="boardsContainer"></div>
        `;

        // Event listener for generate boards button
        var generateBoardsBtn = document.getElementById('generateBoardsBtn');
        generateBoardsBtn.addEventListener('click', function() {
            var numBoards = parseInt(document.getElementById('numBoards').value, 10);
            var ticketPrice = calculateTicketPrice(numBoards);
            ticketPriceDisplay.textContent = `Total Price: R${ticketPrice.toFixed(2)}`;
            generateBoards(numBoards);
        });
    }

    // Function to generate number boards
    function generateBoards(numBoards) {
        var boardsContainer = document.getElementById('boardsContainer');
        boardsContainer.innerHTML = '';

        for (var i = 1; i <= numBoards; i++) {
            var board = generateBoard();
            var boardHtml = `
                <div class="board">
                    <h3>Board ${i}</h3>
                    <div class="board-numbers">${board.join(', ')}</div>
                </div>
            `;
            boardsContainer.innerHTML += boardHtml;
        }
    }

    // Function to generate a single board of numbers
    function generateBoard() {
        var board = [];
        for (var j = 0; j < 6; j++) {
            var number = generateRandomNumber();
            board.push(number);
        }
        return board;
    }

    // Function to generate a random number based on color ranges
    function generateRandomNumber() {
        var randomNumber;
        var randomColor = Math.floor(Math.random() * 4) + 1; // 1 to 4

        switch (randomColor) {
            case 1: // Red: 1 - 13
                randomNumber = Math.floor(Math.random() * 13) + 1;
                break;
            case 2: // Yellow: 14 - 25
                randomNumber = Math.floor(Math.random() * (25 - 14 + 1)) + 14;
                break;
            case 3: // Green: 26 - 37
                randomNumber = Math.floor(Math.random() * (37 - 26 + 1)) + 26;
                break;
            case 4: // Blue: 38 - 52
                randomNumber = Math.floor(Math.random() * (52 - 38 + 1)) + 38;
                break;
            default:
                randomNumber = 1; // Default to 1 if unexpected value
                break;
        }

        return randomNumber;
    }

    // Function to calculate ticket price based on number of boards
    function calculateTicketPrice(numBoards) {
        var lottoBoardPrice = 5.00;
        var lottoPlusPrice = 2.50;
        var totalPrice = numBoards * lottoBoardPrice;
        if (numBoards > 0) {
            totalPrice += (numBoards - 1) * lottoPlusPrice; // First board for Lotto Plus is included in lottoBoardPrice
        }
        return totalPrice;
    }

    // Function to update admin interface
    function updateAdminInterface() {
        userInterface.innerHTML = `
            <h2>Admin Features</h2>
            <button id="simulateDrawBtn">Simulate Draw</button>
            <div id="drawResult"></div>
        `;

        // Event listener for simulate draw button
        var simulateDrawBtn = document.getElementById('simulateDrawBtn');
        simulateDrawBtn.addEventListener('click', function() {
            var drawResult = simulateDraw();
            displayDrawResult(drawResult);
        });
    }

    // Function to simulate a draw
    function simulateDraw() {
        var drawResult = [];
        for (var i = 0; i < 6; i++) {
            var number = generateRandomNumber();
            drawResult.push(number);
        }
        return drawResult;
    }

    // Function to display draw result
    function displayDrawResult(result) {
        var drawResultDiv = document.getElementById('drawResult');
        drawResultDiv.innerHTML = `
            <h3>Draw Result:</h3>
            <p>${result.join(', ')}</p>
        `;
        // Additional logic to check winning tickets and display them
        // This part would need to be expanded based on your application's logic
    }
});


