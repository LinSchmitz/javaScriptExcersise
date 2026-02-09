# Modal Window Project

A simple modal window implementation built with **vanilla JavaScript**.
This project demonstrates DOM manipulation, event handling, and basic UI state management using CSS classes.

---

## Features

- Open modal by clicking buttons
- Close modal by:
  - Clicking the close button
  - Clicking outside the modal (overlay)
  - Pressing the `Escape` key

- Clean separation of logic using reusable functions

---

## Technologies Used

- HTML
- CSS
- JavaScript (ES6)

---

## How It Works

- The modal visibility is controlled by adding and removing a `hidden` CSS class
- Event listeners handle user interactions
- Keyboard accessibility is implemented using the `Escape` key

---

## Project Structure

```
├── index.html
├── style.css
└── script.js
```

---

## JavaScript Logic Overview

- DOM elements are selected once and reused
- `openModal()` shows the modal
- `closeModal()` hides the modal
- Multiple buttons can trigger the modal
- Defensive checks prevent runtime errors

---

## What This Project Demonstrates

- Working with `querySelector` and `querySelectorAll`
- Using `forEach` with NodeLists
- Handling keyboard events
- Clean and readable JavaScript functions
- Basic accessibility considerations

---

## Author

Built by **Lin Schmitz** 🚀
Frontend Developer in progress
