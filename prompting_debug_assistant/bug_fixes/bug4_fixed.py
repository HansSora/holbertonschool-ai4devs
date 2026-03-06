"""Bug 4 fixed

Sum values in a dict where values are numeric strings.
"""

from typing import Dict


def sum_string_values(values: Dict[str, str]) -> int:
    total = 0 # FIX: start at 0 for integer addition
    for value in values.values():
        total += int(value) # FIX: convert string to int before adding
    return total # FIX: returns an int


if __name__ == "__main__":
    d = {"apples": "10", "oranges": "5", "pears": "2"}
    print(sum_string_values(d))
