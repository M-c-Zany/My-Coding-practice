# Get user input for height and weight
height = float(input("Enter your height in meters: "))
weight = float(input("Enter your weight in kilograms: "))

# Calculate BMI
bmi = weight / (height * height)

# Display BMI category based on the calculated BMI
if bmi < 18.5:
    print("Your BMI is {:.2f}, you are underweight".format(bmi))
elif 18.5 <= bmi < 25:
    print("Your BMI is {:.2f}, you have a normal weight".format(bmi))
elif 25 <= bmi < 30:
    print("Your BMI is {:.2f}, you are overweight".format(bmi))
elif 30 <= bmi < 35:
    print("Your BMI is {:.2f}, you are obese".format(bmi))
else:
    print("Your BMI is {:.2f}, you are clinically obese".format(bmi))


# Added comments to explain each section of the code.
# Used a formatted string to display BMI with two decimal places for better readability.
# Adjusted the BMI range conditions for better clarity and correctness.