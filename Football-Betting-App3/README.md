# ⚽ Football Betting App — Iteration Challenge

This repository contains a small exercise focused on practicing **JavaScript iteration, object handling, and data aggregation** using a football match dataset.

The goal is to work with an existing `game` object and deepen your understanding of how to extract meaningful insights from structured data.

---

## 📌 Objective

You will analyze match information such as:

- Which players scored
- The betting odds for different outcomes
- Statistical summaries derived from the data

This challenge emphasizes **clean logic, dynamic data usage, and avoiding hard-coding values**.

---

## 🧠 What You Will Practice

- Iterating over arrays with access to both values and positions
- Performing calculations based on object data
- Dynamically reading properties from objects
- Building new objects from existing datasets
- Writing readable, well-structured output

---

## 📝 Tasks

### 1️⃣ Goal Log

1. Loop over the game.scored array and print each player name to the console,
   along with the goal number (Example: "Goal 1: Lewandowski")

---

### 2️⃣ Average Odd Calculation

2. Use a loop to calculate the average odd and log it to the console (We already
   studied how to calculate averages, you can go check if you don't remember)

---

### 3️⃣ Nicely Formatted Odds Output

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
   Odd of victory Bayern Munich: 1.33
   Odd of draw: 3.25
   Odd of victory Borrussia Dortmund: 6.5
   Get the team names directly from the game object, don't hardcode them
   (except for "draw"). Hint: Note how the odds and the game objects have the
   same property names 😉

---

### 4️⃣ Bonus — Build a Scorers Summary Object

4. Bonus: Create an object called 'scorers' which contains the names of the
   players who scored as properties, and the number of goals as the value. In this
   game, it will look like this:
   {
   Gnarby: 1,
   Hummels: 1,
   Lewandowski: 2
   }

---

## 🎯 Learning Outcome

By completing this challenge, you will gain confidence in:

- Transforming raw sports data into insights
- Writing flexible code that depends on structure rather than fixed values
- Understanding how real-world datasets are processed in analytics or betting applications

---

## 🚀 Next Steps

After finishing, try extending the app by:

- Adding assists tracking
- Calculating probabilities from odds
- Supporting multiple matches instead of just one

---

Happy coding and enjoy building! ⚽
