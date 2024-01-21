# print(8/3)
# print(int(8/3))
# print(round(8/3))
# print(round(8/3, 2))
# results = 4/2
# results /=2
# print(results)


score = 0
height = 1.8
is_winning = True
score += 1

# Using f-string to display information
print("Your score is " + str(score))  # Using concatenation with str()
print(f"Your score is {score}")  # Using f-string with a variable

# Using f-string to display multiple variables
print(f"Your score is {score}, your height is {height}, Your winning is {is_winning}")
