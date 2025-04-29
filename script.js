// Deck of cards (simplified to 21 cards for the trick)
const suits = ['♥', '♦', '♣', '♠'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let deck = [];
let piles = [[], [], []];
let round = 0;

// Initialize deck with 21 unique cards
function initializeDeck() {
    let cardCount = 0;
    for (let suit of suits) {
        for (let value of values) {
            if (cardCount < 21) {
                deck.push(`${value}${suit}`);
                cardCount++;
            }
        }
    }
    // Shuffle deck
    deck = deck.sort(() => Math.random() - 0.5);
}

// Deal cards into 3 piles
function dealCards() {
    piles = [[], [], []];
    for (let i = 0; i < deck.length; i++) {
        piles[i % 3].push(deck[i]);
    }
    renderPiles();
}

// Render piles to the DOM with animation
function renderPiles() {
    for (let i = 0; i < 3; i++) {
        const pileElement = document.getElementById(`pile${i + 1}`);
        pileElement.innerHTML = '<h3>Pile ' + (i + 1) + '</h3>';
        piles[i].forEach(card => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card dealing';
            cardDiv.textContent = card;
            pileElement.appendChild(cardDiv);
        });
    }
    document.getElementById('controls').style.display = 'block';
}

// Reassemble deck based on selected pile (selected pile goes in the middle)
function reassembleDeck(selectedPileIndex) {
    const selectedPile = piles[selectedPileIndex - 1];
    const otherPiles = [
        ...piles.slice(0, selectedPileIndex - 1),
        ...piles.slice(selectedPileIndex)
    ];
    deck = [...otherPiles[0], ...selectedPile, ...otherPiles[1]];
}

// Handle pile selection
function selectPile(pileIndex) {
    reassembleDeck(pileIndex);
    round++;
    if (round < 3) {
        dealCards();
    } else {
        revealCard();
    }
}

// Reveal the chosen card (always the 11th card after 3 rounds)
function revealCard() {
    document.getElementById('piles').style.display = 'none';
    document.getElementById('controls').style.display = 'none';
    document.getElementById('reveal').style.display = 'block';
    const revealedCard = document.getElementById('revealedCard');
    revealedCard.textContent = deck[10]; // 11th card (0-based index 10)
}

// Start the trick
document.getElementById('startButton').addEventListener('click', () => {
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
    initializeDeck();
    dealCards();
});