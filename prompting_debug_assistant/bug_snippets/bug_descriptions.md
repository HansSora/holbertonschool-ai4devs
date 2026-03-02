# Bug Descriptions

This document describes the intended behavior, bug type, bug details, and consequences for each buggy code snippet.

---

## Bug 1 – `bug1.py`

### Intended Behavior
The function `get_last_n_items(items, n)` should return the **last `n` elements** of a list. For example, given `[1, 2, 3, 4, 5]` and `n=2`, it should return `[4, 5]`.

### Bug Type
Off-by-one error (incorrect index calculation in list slicing).

### Bug Description
The start index is computed as `len(items) - n - 1` instead of the correct `len(items) - n`. The subtraction of an extra `1` shifts the slice one position too far to the left, causing one additional element to be included.

### Consequences
The function returns `n+1` items instead of `n`. For example, `get_last_n_items([1, 2, 3, 4, 5], 2)` returns `[3, 4, 5]` instead of `[4, 5]`, silently producing wrong results with no error raised.

---

## Bug 2 – `bug2.js`

### Intended Behavior
The function `removeDuplicates(numbers)` should filter out duplicate numbers from an array and return the unique values sorted in **ascending order**. For example, `[4, 2, 4, 1, 3, 2]` should return `[1, 2, 3, 4]`.

### Bug Type
Logical error (inverted condition in duplicate-detection).

### Bug Description
The condition `if (result.includes(numbers[i]))` adds a number to `result` only when it is **already present**, which is the opposite of the intended behavior. It should use `!result.includes(numbers[i])` to add numbers that have **not yet been seen**.

### Consequences
All unique (non-duplicate) values are excluded and only numbers that appear more than once are kept — and even those are not added correctly. Most inputs produce an empty array instead of the deduplicated, sorted list.

---

## Bug 3 – `bug3.java`

### Intended Behavior
The method `calculateAverageLength(List<String> strings)` should compute the **average character length** of all non-null strings in the list, silently skipping any `null` entries.

### Bug Type
Runtime exception – `NullPointerException`.

### Bug Description
Inside the loop, `str.length()` is called without first checking whether `str` is `null`. When a `null` element is encountered, the JVM throws a `NullPointerException` and the program terminates.

### Consequences
The program crashes at runtime whenever the input list contains a `null` value. No average is computed or returned, and the exception is unhandled, making the method unsafe for lists with optional/missing string entries.

---

## Bug 4 – `bug4.py`

### Intended Behavior
The function `sum_string_numbers(data)` should parse numeric strings stored as dictionary values and return their **integer sum**. For example, `{"apples": "10", "oranges": "25", "bananas": "15", "grapes": "30"}` should return `80`.

### Bug Type
Data type misuse (string concatenation instead of integer addition).

### Bug Description
The accumulator `total` is initialized as the string `"0"` instead of the integer `0`. Inside the loop, `total = total + value` performs **string concatenation** rather than numeric addition, because both operands are strings.

### Consequences
The function returns a concatenated string (e.g., `"010251530"`) instead of the numeric sum (`80`). The result is silently wrong — no exception is raised — which makes this bug particularly difficult to catch without explicit type checking or test cases.

---

## Bug 5 – `bug5.js`

### Intended Behavior
The function should call a simulated async API to retrieve user data by ID and return the user's name converted to **uppercase**. It relies on `async/await` for asynchronous control flow.

### Bug Type
Syntax / semantic error (incorrect use of `async`/`await`).

### Bug Description
The outer function that calls `await fetchUserData(userId)` is not declared with the `async` keyword. Using `await` outside an `async` function is a syntax error in JavaScript, preventing the script from executing at all.

### Consequences
The script throws a `SyntaxError` at parse time and does not run. No user data is fetched and no name is returned. Any code depending on this function will also fail to execute.

---

## Bug 6 – `bug6.py`

### Intended Behavior
The function should iterate through a list and find the **first pair of consecutive elements** whose sum equals a given target value, returning that pair. If no such pair exists, it should return `None`.

### Bug Type
Logic error (missing index increment causing an infinite loop).

### Bug Description
The loop index `i` is only incremented inside the `if` block that checks for a matching pair. When the current pair does **not** match the target, `i` is never incremented, so the loop repeatedly evaluates the same pair forever.

### Consequences
If no matching consecutive pair exists (or if the first pair checked does not match), the function enters an **infinite loop**, hanging the program indefinitely. This is a critical correctness issue that makes the function unusable for inputs without an early matching pair.
