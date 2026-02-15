# JavaScript Destructuring Guide

## 📌 What is Destructuring?

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
