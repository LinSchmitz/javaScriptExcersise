# 🐶 JavaScript Coding Challenge #4

This challenge is part of **The Complete JavaScript Course 25–26** and focuses on working with arrays, objects, and data transformations.

Julia and Kate are studying dogs 🐕 and analyzing whether they are eating **too much**, **too little**, or an **okay amount** of food.

---

## 📌 Problem Description

- A dog is eating **too much** if its current food portion is **greater** than the recommended portion.
- A dog is eating **too little** if its current food portion is **less** than the recommended portion.
- A dog is eating an **okay amount** if its current portion is within **±10%** of the recommended portion.

---

## 🧠 Tasks

1. Loop over the `dogs` array containing dog objects, and for each dog:
   - Calculate the recommended food portion.
   - Add it as a new property (`recommendedFood`) to the object.
   - Do NOT create a new array.

   **Formula:**

   ```
   recommendedFood = weight ** 0.75 * 28
   ```

   _(Weight is in kg, result is in grams)_

---

2. Find **Sarah's dog** and log whether it's eating **too much** or **too little**.
   - ⚠️ Note: Dogs can have multiple owners.

---

3. Create two arrays:
   - `ownersEatTooMuch`
   - `ownersEatTooLittle`

---

4. Log strings like:

   ```
   "Matilda and Alice and Bob's dogs eat too much!"
   "Sarah and John and Michael's dogs eat too little!"
   ```

---

5. Log whether **any dog is eating exactly the recommended amount** (`true/false`).

---

6. Log whether **any dog is eating an okay amount** (`true/false`).

---

7. Create an array of dogs that are eating an **okay amount**.

---

8. Create a **shallow copy** of the `dogs` array and sort it by:
   - `recommendedFood` in **ascending order**

---

## 💡 Hints

- Use different array methods (`map`, `filter`, `find`, `some`, `flatMap`, `sort`, etc.)
- The "okay amount" condition:

```js
current > recommended * 0.9 && current < recommended * 1.1;
```

---

## 🧪 Test Data

```js
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
```

---

## 🎯 Goal

Practice:

- Array iteration
- Object mutation
- Conditional logic
- Data transformation
