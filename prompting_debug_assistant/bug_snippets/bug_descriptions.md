# Bug Descriptions

This document describes the intended behavior, the bug, and its impact for each buggy code snippet.

---

## Bug 1 – bug1.py
**Intended Behavior:** Return the last n items of a list.
**Bug:** Off-by-one error in list slicing. The start index is calculated as `len(items) - n - 1`, which returns one extra item from the end.
**Impact:** The function returns more items than expected. For example, `get_last_n_items([1,2,3,4,5], 2)` returns `[3,4,5]` instead of `[4,5]`.

---

## Bug 2 – bug2.js
**Intended Behavior:** Remove duplicate numbers from an array and return them in ascending order.
**Bug:** Logical error in filtering: the code adds items to the result only if they are already present, instead of if they are not present.
**Impact:** The function returns only repeated numbers, not unique ones. For example, `removeDuplicates([4,2,4,1,3,2])` returns `[]` instead of `[1,2,3,4]`.

---

## Bug 3 – bug3.java
**Intended Behavior:** Calculate the average length of non-null strings in a list, ignoring null values.
**Bug:** No null check before calling `str.length()`. If the list contains null, a `NullPointerException` occurs.
**Impact:** The program crashes if the list contains null values.

---

## Bug 4 – bug4.py
**Intended Behavior:** Calculate the sum of all numeric values stored as strings in a dictionary.
**Bug:** The total is initialized as a string and concatenated with other strings, instead of converting to integers and adding.
**Impact:** The function returns a string of concatenated numbers (e.g., `"10251530"`) instead of their sum (e.g., `80`).

---

## Bug 5 – bug5.js
**Intended Behavior:** Fetch user data from an API and return the user's name in uppercase using async/await.
**Bug:** Syntax error in async/await usage. The function is not declared as async, and `await` is used incorrectly.
**Impact:** The code will not run and throws a syntax error.

---

## Bug 6 – bug6.py
**Intended Behavior:** Find the first pair of consecutive numbers in a list that sum to a target value.
**Bug:** Loop condition and increment logic can cause an infinite loop. The index variable `i` is only incremented when the sum matches, so if no match is found, the loop never progresses.
**Impact:** The function may enter an infinite loop and never return if no consecutive pair matches the target sum.
