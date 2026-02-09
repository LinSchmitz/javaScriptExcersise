# Pig Game

A classic **Pig Dice Game** built with **vanilla JavaScript**.
This project focuses on DOM manipulation, game state management, and event-driven logic.

---

![alt text](<Screenshot 2026-02-09 094313.png>)

## Game Rules

- The game has **2 players**
- Players take turns rolling a dice
- Each roll adds to the **current score**
- Rolling a **1** resets the current score and switches the player
- Players can **hold** to add the current score to their total score
- The first player to reach **100 points** wins the game

---

## Features

- Dice roll with random values
- Player turn switching
- Current score and total score tracking
- Win condition handling
- Game reset functionality

---

## Technologies Used

- HTML
- CSS
- JavaScript (ES6)

---

## How It Works

- Game state is stored in JavaScript variables
- UI updates are handled through DOM manipulation
- CSS classes are used to reflect active players and winners
- Event listeners manage user interactions

---

## Project Structure

```
├── index.html
├── style.css
└── script.js
```

---

## JavaScript Logic Overview

- Random dice generation using `Math.random()`
- Player switching logic
- Score accumulation and reset
- Win state handling
- Game initialization function for resetting state

---

## What This Project Demonstrates

- Managing application state
- Updating the UI based on state changes
- Handling multiple event listeners
- Writing clean and readable functions
- Implementing simple game logic

---

## Author

Built by **Lin Schmitz** 🎲
Frontend Developer in progress
