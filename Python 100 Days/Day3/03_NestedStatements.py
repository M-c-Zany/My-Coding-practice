  # Welcome message
print("Welcome to the rollercoaster")

  # Prompt the user for height and age
height = int(input("What is your height in cm? "))
age = int(input("What is your age? "))

  # Check if the user meets the height requirement
if height >= 120:
    print("You can ride the rollercoaster")

      # Nested if-elif-else statements based on age
    if age < 12:
        print("Please pay $5")
    elif 12 <= age <= 18:  # Simplified age condition
        print("Please pay $10")
    else:
        print("Please pay $15.")
else:
    print("Sorry, you have to grow taller before you can ride.")
