# Rock-Paper-Scissors Game

## Description
This is a simple Rock-Paper-Scissors game implemented using HTML, CSS, and JavaScript. The game includes an interactive UI where users can play against the computer. The computer uses a strategy to counter the user's most frequent moves, making the game more challenging. It also features a dark/light theme toggle.

---

## Features

### Personalized User Experience
- Users can enter their name, which is displayed throughout the game to make it more engaging.

### Smart Computer Opponent
- The computer adapts to the user's move patterns to make its choices smarter.

### Real-Time Scoring
- Scores for the user and the computer are updated and displayed after each round.

### Dark/Light Mode
- Players can toggle between dark and light themes by clicking the theme button.

### Interactive UI
- Clickable icons for Rock, Paper, and Scissors allow users to make their choices easily.

---

## How to Play

1. **Enter Your Name**:
   - When the page loads, a popup will prompt you to enter your name. Submit it to start the game.

2. **Make a Choice**:
   - Click on one of the three options:
     - 🪐 Rock
     - ✂️ Scissors
     - 📄 Paper

3. **View Results**:
   - The game will display the result of the round:
     - "It's a tie"
     - "Computer Wins"
     - "[Your Name] Wins"

4. **Track Scores**:
   - The scores for both you and the computer are displayed below the game area.

5. **Toggle Theme**:
   - Click the theme button in the top right corner to switch between dark and light themes.

---

## Game Logic

1. The computer's choices are based on the user's move history:
   - If the user frequently picks "Rock," the computer will counter with "Paper."
   - Similarly, it adapts to counter "Paper" and "Scissors."
   - If no frequent move is detected, the computer makes a random choice.

2. The game checks for the winner based on the standard Rock-Paper-Scissors rules:
   - **Rock beats Scissors**
   - **Scissors beats Paper**
   - **Paper beats Rock**

---

## File Structure
```
├── index.html       # Main HTML file
├── index.css        # CSS for styling
├── index.js         # JavaScript for game logic
├── white.svg        # Icon for light mode
├── dark.svg         # Icon for dark mode
├── rock.svg         # Icon for Rock
├── paper.svg        # Icon for Paper
├── scissor.svg      # Icon for Scissors
├── logo.png         # Favicon for the webpage
```

---

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/rock-paper-scissors-game.git
   ```

2. Navigate to the project folder:
   ```bash
   cd rock-paper-scissors-game
   ```

3. Open `index.html` in your favorite web browser to play the game.

---

## Future Enhancements

1. Add sound effects for each action.
2. Implement a "Best of X Rounds" mode.
3. Add animations for better visual feedback.
4. Provide a leaderboard to save scores.

---

## Technologies Used

- **HTML**: Structure of the webpage
- **CSS**: Styling the game interface
- **JavaScript**: Game logic and interactivity

---

## Author
**Muhammad Hassaan Shahid**  
Feel free to reach out for any questions or suggestions!

---

## License
This project is licensed under the [MIT License](LICENSE).

