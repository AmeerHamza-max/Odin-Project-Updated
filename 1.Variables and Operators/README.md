
---

# Variables and Operators: Foundations Course

## Introduction

In the previous sections, you learned how to structure webpages with HTML and style them with CSS. The next step is to make the webpage **interactive**, which is exactly what JavaScript is for.

In this section, we will focus on the fundamentals of JavaScript and how you can use it to manipulate the various interactions between the web page and the user.

## Lesson Overview

This section contains a general overview of topics that you will learn:

* Running JavaScript code using an HTML file.
* Declaring variables with `let` and `const`.
* Performing number operations.
* Performing string operations.
* Using logical and mathematical operators.

---

## How to Run JavaScript Code

All JavaScript we write in the Foundations course will be run via the browser. This means the browser will execute our code, even if it comes from a local file.

### 1. Using the Script Tag

The simplest way to get started is to create an HTML file with the JavaScript code inside of it. In VS Code, use the `! + TAB` snippet to create a skeleton and include the `<script>` tag:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JS Foundations</title>
</head>
<body>

  <script>
    // Your JavaScript goes here!
    console.log("Hello, World!");
  </script>

</body>
</html>

```

### 2. Accessing the Console

To see your code's output:

1. Open the HTML file in a web browser.
2. **Right-click** on the blank page.
3. Click **"Inspect"** or **"Inspect Element"**.
4. Select the **"Console"** tab. You should see `Hello, World!` printed there.

### 3. External JavaScript

For more complex scripts, we use external files with the `.js` extension:

```html
<script src="javascript.js"></script>

```

> **Tip:** You can use the **Live Preview** extension in VS Code to automatically refresh the browser whenever you save your changes.

---

## Variables

Variables are **"storage containers"** for data. They are the building blocks of any program.

### `let` (Re-assignable)

You can declare variables using the `let` keyword. These can be changed later.

```javascript
let firstName = "John";
let age = 11;

console.log(age); // Outputs: 11

age = 54; // Re-assigning (No 'let' needed here)
console.log(age); // Outputs: 54

```

### `const` (Constant)

If you don't want a variable to be changed (like the value of Pi), use `const`.

```javascript
const pi = 3.14;
pi = 10; // This will throw an ERROR!

```

**Why errors?** Errors are helpful! They tell us exactly what is wrong and where the issue is, preventing our code from behaving unexpectedly.

### `var` (Legacy)

`var` was the original way to declare variables. While it still works, it has "quirks" that were fixed by `let` and `const`. It is rarely used in modern development.

---

## Numbers

JavaScript follows the standard mathematical **Order of Operations** (PEMDAS/BODMAS):

1. **P**arentheses / Brackets
2. **E**xponents
3. **M**ultiplication and **D**ivision (Left to Right)
4. **A**ddition and **S**ubtraction (Left to Right)

**Example:**
The expression `(3 + 2) - 76 * (1 + 1)` is perfectly valid JavaScript and will be evaluated mathematically.

---

