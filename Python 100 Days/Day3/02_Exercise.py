#  odd or even exercise
# Prompt the user for a number to check
number = int(input("Which number do you want to check? "))

# Check if the number is even or odd
if number % 2 == 0:
    print("This is an even number.")
else:
    print("This is an odd number.")

# The code prompts the user to input a number using input and converts the input to an integer using int().
# The if statement checks whether the number is even by using the modulo operator %. If the remainder is 0 when dividing by 2, the number is even.
# If the condition is true, it prints "This is an even number." Otherwise, it prints "This is an odd number."s