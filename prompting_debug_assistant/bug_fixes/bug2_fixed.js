// Bug 2 fixed
// Remove duplicates from an array of numbers and return ascending order.

function dedupeAndSort(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    // FIX: add the number only if it is NOT already present.
    if (!result.includes(numbers[i])) {
      result.push(numbers[i]);
    }
  }
  return result.sort((a, b) => a - b);
}

// Simple test
const input = [3, 1, 2, 3, 2, 4, 1];
console.log(dedupeAndSort(input)); // [1,2,3,4]
