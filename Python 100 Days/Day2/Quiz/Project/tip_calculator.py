# Welcome message
print("Welcome to the Tip Calculator.")

# Get user input for the total bill
bill = float(input("What was the total bill? $"))

# Get user input for the tip percentage
tip = int(input("How much tip would you like to give? 10, 12, or 15 "))

# Get the number of people splitting the bill
people = int(input("How many people are splitting the bill? "))

# Calculate the tip amount as a percentage of the total bill
tip_as_percent = tip / 100
total_tip_amount = bill * tip_as_percent

# Calculate the total bill including the tip
total_bill = bill + total_tip_amount

# Calculate the bill per person
bill_per_person = total_bill / people

# Round the final amount to two decimal places
final_amount = round(bill_per_person, 2)

# Display the amount each person should pay
print(f"Each person should pay: $ {final_amount}")
