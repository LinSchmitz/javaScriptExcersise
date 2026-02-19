```markdown
# ⚽ Football Betting App - Coding Challenge #1

We're building a **football betting app**

Suppose we get data from a web service about a certain game (`game` variable). In this challenge, we're going to work with that data.

---

## 📝 Tasks

### 1️⃣ Create player arrays for each team

- Create arrays `players1` and `players2` containing all players of each team.

---

### 2️⃣ Separate goalkeeper and field players

- For Bayern Munich (team 1), the **first player is the goalkeeper** (`gk`) and the rest are **field players** (`fieldPlayers`).

---

### 3️⃣ Combine all players

- Create an array `allPlayers` containing all **22 players** from both teams.

---

### 4️⃣ Add substitute players

- During the game, Bayern Munich used **3 substitute players**.
- Create `players1Final` including `'Thiago'`, `'Coutinho'` and `'Perisic'`.

---

### 5️⃣ Extract odds

- From the `game.odds` object, create variables `team1`, `draw`, and `team2`.

---

### 6️⃣ Function to print goals

- Write a function `printGoals` that:
  - Receives an **arbitrary number of player names** (not an array)
  - Prints each player's name
  - Prints the **total number of goals scored**

**Test Data:**

- First, use players: `'Davies'`, `'Muller'`, `'Lewandowski'`, `'Kimmich'`
- Then, call the function again with players from `game.scored`

---

### 7️⃣ Team more likely to win

- Print which team is more likely to win (**team with the lower odd**)
- **Do NOT use if/else or ternary operators**

---

## ℹ️ Notes

- Use **destructuring**, **spread operator**, and **short-circuiting** wherever possible
- Focus on **clean, readable, and concise code**

---

**Author:** LinSchmitz  
**Challenge:** Coding Challenge #1 - Football Betting App
```
