Documentation of the Code

HTML (index.html):
Provides the structure for the game, including a title, instructions, start button, game area with three piles, control buttons for pile selection, and a reveal section.
Uses display: none to hide elements initially, which are shown dynamically via JavaScript.

CSS (styles.css):
Styles the layout with a centered container, formatted card piles, and individual card designs.
Includes hover effects and animations for dealing cards (deal animation) and a highlighted reveal effect for the final card.

JavaScript (script.js):
Deck Management: Initializes a deck of 21 cards using suits and values, shuffles it randomly.

Game Logic:
Implements the 21 Card Trick by dealing cards into 3 piles, reassembling the deck based on user-selected pile (placing it in the middle), and repeating for 3 rounds.
User Interaction:
Listens for clicks on pile selection buttons and progresses the game or reveals the card after the third round.
Rendering and Animation:
Dynamically updates the DOM to show piles with a dealing animation and reveals the final card (always at index 10 after 3 rounds).
Key Trick Principle:
After 3 rounds of placing the selected pile in the middle, the chosen card is mathematically guaranteed to be the 11th card in the deck.
How to Use
Open index.html in a web browser.
Click "Start Trick" to begin.
Mentally select a card from the displayed piles.
Indicate which pile contains your card by clicking the corresponding button (repeat for 3 rounds).
After the third round, the application reveals your card with a highlighted animation.
Limitations and Potential Improvements
Visuals:
Currently uses basic card styling; could integrate card images or a more polished design.
Animations:
Card movements between piles are simplified; could add more detailed transitions.
Deck Size:
Limited to 21 cards for the trick; could be expanded with a different mathematical principle.
User Experience:
Add instructions per round or a restart button after reveal.

This implementation provides a functional and engaging demonstration of a mathematical card trick, focusing on JavaScript logic for state management and user interaction, with CSS enhancing the visual appeal.
