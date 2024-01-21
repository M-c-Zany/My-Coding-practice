# User Input
height = input("Enter your height in meters: ")
weight = input("Enter your weight in kilograms: ")

# Convert to Numbers
weight_as_integer = int(weight)
height_as_float = float(height)

# BMI Calculation
bmi = weight_as_integer / (height_as_float * height_as_float)

# Convert BMI to Integer
bmi_as_int = int(bmi)

# Print Result
print("Your BMI is:", bmi_as_int)
