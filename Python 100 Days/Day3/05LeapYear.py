# Get user input for the year
year = int(input("Enter a year: "))

# Check if the year is divisible by 4
if year % 4 == 0:
    # If the year is divisible by 100
    if year % 100 == 0:
        # If the year is divisible by 400, it is a leap year
        if year % 400 == 0:
            print("Leap Year")
        else:
            # If the year is not divisible by 400, it is not a leap year
            print("Not Leap Year")
    else:
        # If the year is not divisible by 100, it is a leap year
        print("Leap Year")
else:
    # If the year is not divisible by 4, it is not a leap year
    print("Not Leap Year")
