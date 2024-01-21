#  Control flow with if/else and conditional operators

# Prompt the user for their height in centimeters
print("Welcome to the rollercoaster.")
height = int(input("What is your height in cm? "))

# Check if height is greater than 120 cm
if height > 120:
    print("You can ride the rollercoaster.")
else:
    print("Sorry, you have to grow taller before you can ride.")

# Check if height is greater than or equal to 150 cm
if height >= 150:
    print("You can ride the advanced rollercoaster.")
else:
    print("Sorry, you need to be at least 150 cm tall for the advanced rollercoaster.")

# Check if height is exactly equal to 130 cm
if height == 130:
    print("You can ride the special rollercoaster for 130 cm tall individuals.")
else:
    print("Sorry, this special ride is only for those who are exactly 130 cm tall.")

# Check if height is less than 90 cm
if height < 90:
    print("Sorry, you are too small to ride any rollercoaster.")
else:
    print("You can ride the regular rollercoaster.")

# Check if height is less than or equal to 110 cm
if height <= 110:
    print("Sorry, you have to grow a bit taller to ride the medium rollercoaster.")
else:
    print("You can ride the medium rollercoaster.")

# Check if height is not equal to 140 cm
if height != 140:
    print("You can choose from various rollercoasters, but not the one designed for 140 cm tall individuals.")
else:
    print("Sorry, this rollercoaster is specifically for those who are 140 cm tall.")
