# overview of some common mathematical operations and functions in Python:
#  Arithmetic Operators:
# Python supports the basic arithmetic operators:

# - Addition `+`
# - Subtraction `-`
# - Multiplication `*`
# - Division `/` (results in a float)
# - Floor Division `//` (results in an integer by truncating the decimal part)
# - Modulus `%` (returns the remainder after division)
# - Exponentiation `**`

# Example:
a = 5
b = 2

sum_result = a + b
difference_result = a - b
product_result = a * b
division_result = a / b
floor_division_result = a // b
modulus_result = a % b
exponentiation_result = a ** b

print(sum_result, difference_result, product_result, division_result, floor_division_result, modulus_result, exponentiation_result)


# Math Module:
# Python also provides a `math` module that contains many mathematical functions. You need to import this module before using its functions:


import math

# Example of math functions
sqrt_result = math.sqrt(25)  # Square root
ceil_result = math.ceil(4.1)  # Ceil (round up to the nearest integer)
floor_result = math.floor(4.9)  # Floor (round down to the nearest integer)
abs_result = math.abs(-10)  # Absolute value
pi_value = math.pi  # Value of pi


# Random Module:
# The `random` module is another module frequently used in mathematical contexts, allowing you to generate random numbers:


import random

random_number = random.random()  # Random float between 0 and 1
randint_result = random.randint(1, 10)  # Random integer between 1 and 10


# Complex Numbers:
# Python supports complex numbers as well:


complex_num = 3 + 4j
real_part = complex_num.real
imaginary_part = complex_num.imag


# These are some of the basics of mathematical operations in Python. Depending on your needs, you can explore more advanced mathematical functions and libraries, such as NumPy, for extensive mathematical operations and array manipulation.