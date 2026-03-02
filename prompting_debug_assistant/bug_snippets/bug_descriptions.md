# Bug Descriptions

This document describes the intended behavior of each buggy code snippet and the type of error it contains.

---

## Bug 1 – bug1.py
**Intended Behavior**: Return the last n items of a list.  
**Issue Type**: Off-by-one error.  
**Language**: Python  
**Notes**: The function incorrectly calculates the start index by subtracting one extra from the length. When slicing `items[start_index:]`, the calculation `len(items) - n - 1` causes it to include one extra item at the beginning. For example, getting the last 2 items from `[1, 2, 3, 4, 5]` returns `[3, 4, 5]` instead of `[4, 5]`.

---

## Bug 2 – bug2.js
**Intended Behavior**: Remove duplicate numbers from an array and return them in ascending order.  
**Issue Type**: Logical error.  
**Language**: JavaScript  
**Notes**: The condition in the loop is reversed. It checks `if (result.includes(numbers[i]))` and then adds the item, which means it only adds items that are ALREADY in the result array (duplicates). It should check if the item is NOT in the result array (`!result.includes(numbers[i])`) before adding it. This causes the function to return an empty array or only items that appeared multiple times.

---

## Bug 3 – bug3.java
**Intended Behavior**: Calculate the average length of strings in a list, ignoring null values.  
**Issue Type**: Runtime exception (NullPointerException).  
**Language**: Java  
**Notes**: The function attempts to call `.length()` on string elements without first checking if they are null. When the list contains a null value, calling `str.length()` throws a NullPointerException. The function should check `if (str != null)` before accessing the length property.

---

## Bug 4 – bug4.py
**Intended Behavior**: Calculate the sum of all numeric values stored as strings in a dictionary.  
**Issue Type**: Misuse of data types.  
**Language**: Python  
**Notes**: The function initializes `total` as a string `"0"` instead of an integer, and uses string concatenation (`total + value`) instead of numeric addition. This causes the result to be a concatenated string like `"010251530"` instead of the sum `80`. The values should be converted to integers using `int(value)` and added numerically.
