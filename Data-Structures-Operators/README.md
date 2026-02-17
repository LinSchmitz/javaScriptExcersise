# JavaScript Destructuring Guide

## 📌 What is Destructuring ?

**Destructuring** allows you to extract values from arrays or objects and assign them to variables in a clean and readable way.

❌ Old way:

```js
const name = restaurant.name;
const categories = restaurant.categories;
```

✅ Modern way:

```js
const { name, categories } = restaurant;
```

---

# 📦 Array Destructuring

## Extract Values by Position

```js
const arr = [2, 3, 4];
const [x, y, z] = arr;

console.log(x, y, z); // 2 3 4
```

⚠️ Order matters in arrays.

---

## Example with Array from Object

```js
const [first, second] = restaurant.categories;

console.log(first); // Italian
console.log(second); // Pizzeria
```

---

## Skip Elements

```js
const [main, , secondary] = restaurant.categories;

console.log(main); // Italian
console.log(secondary); // Vegetarian
```

---

## Swap Variables (Very Useful)

```js
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b); // 2 1
```

---

## Nested Array Destructuring

```js
const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;

console.log(i, j, k); // 2 5 6
```

---

## Default Values

```js
const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r); // 8 9 1
```

---

# 📦 Object Destructuring

## Extract Properties by Name

```js
const { name, openingHours, categories } = restaurant;

console.log(name);
console.log(openingHours);
```

⚠️ Order does NOT matter — names matter.

---

## Rename Variables

```js
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName);
console.log(hours);
```

---

## Default Values in Objects

```js
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu); // [] (default value)
console.log(starters); // renamed property
```

---

## Assign to Existing Variables

```js
let a = 111;
let b = 999;

({ a, b } = { a: 23, b: 7 });

console.log(a, b); // 23 7
```

⚠️ Wrap with parentheses when assigning to existing variables.

---

## Nested Object Destructuring

```js
const {
  fri: { open, close },
} = restaurant.openingHours;

console.log(open, close); // 11 23
```

---

## Rename Nested Values

```js
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;

console.log(o, c); // 11 23
```

---

# 📦 Destructuring in Functions (Real‑World Usage)

Instead of:

```js
function order(obj) {
  console.log(obj.starterIndex, obj.mainIndex);
}
```

Use:

```js
function order({ starterIndex, mainIndex }) {
  console.log(starterIndex, mainIndex);
}

order({
  starterIndex: 1,
  mainIndex: 2,
});
```

This pattern is heavily used in React props and modern APIs.

---

# 🧠 Summary

| Feature              | Arrays    | Objects       |
| -------------------- | --------- | ------------- |
| Order matters        | ✅ Yes    | ❌ No         |
| Based on             | Position  | Property name |
| Default values       | ✅        | ✅            |
| Rename variables     | ❌        | ✅            |
| Nested destructuring | ✅        | ✅            |
| Used in functions    | Sometimes | Very Common   |

---

## ✅ When to Use Destructuring?

✔ Cleaner code
✔ Less repetition
✔ Easier to read
✔ Essential for modern JavaScript & React

---

# 🧩 Rest Pattern & Parameters

The **Rest Pattern** looks like the spread operator (`...`) but has the **opposite purpose**:

- **Spread (`...`)** → expands elements **on the right side of `=` or in function calls**
- **Rest (`...`)** → collects multiple elements **on the left side of `=` or as function parameters**

---

## 1️⃣ Rest in Destructuring Arrays

```js
// Spread (right side)
const arr = [1, 2, ...[3, 4]];
console.log(arr); // [1, 2, 3, 4]

// Rest (left side)
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3, 4, 5]
```

**Explanation:**

- `a` gets `1`
- `b` gets `2`
- `...others` collects the rest `[3, 4, 5]` into an array

---

## 2️⃣ Rest with Arrays + Nested Destructuring

```js
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
```

**Example Output (assuming `mainMenu = ['Pizza','Pasta','Risotto']` and `starterMenu = ['Focaccia','Bruschetta']`):**

```
Pizza Risotto ['Pasta', 'Focaccia', 'Bruschetta']
```

**Explanation:**

- `pizza` → first element of combined array (`Pizza`)
- Skip second element (`Pasta`)
- `risotto` → third element (`Risotto`)
- `...otherFood` → collects the remaining items from the combined array

---

## 3️⃣ Rest in Objects

```js
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
```

**Output Example:**

```
{
  thu: { open: 12, close: 22 },
  fri: { open: 11, close: 23 }
}
```

**Explanation:**

- `sat` → extracted separately
- `...weekdays` → collects **all other properties** into a new object

---

## 4️⃣ Rest in Functions (Variadic Functions)

```js
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25

const x = [23, 5, 7];
add(...x); // 35
```

**Explanation:**

- `...numbers` collects **all arguments passed** into an array
- You can iterate over them using loops, reduce, or other array methods
- Spread operator can also be used to pass an array as separate arguments: `add(...x)`

---

## 5️⃣ Real-world Example with `restaurant.orderPizza`

```js
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
```

**Explanation:**

- If `orderPizza` is defined like this:

```js
orderPizza: function (mainIngredient, ...otherIngredients) { ... }
```

- `mainIngredient` → first argument (`mushrooms`)
- `...otherIngredients` → all remaining ingredients in an array

---

## ✅ Key Notes

| Feature | Spread `...`                             | Rest `...`                                   |
| ------- | ---------------------------------------- | -------------------------------------------- |
| Purpose | Expands elements                         | Collects elements                            |
| Used    | Right-hand side of `=` or function calls | Left-hand side of `=` or function parameters |
| Example | `[1, 2, ...arr]`                         | `[a, b, ...others] = arr`                    |

---

## Author

Built by [**Lin Schmitz**](https://github.com/linschmitz) 🎲
Frontend Developer in progress
