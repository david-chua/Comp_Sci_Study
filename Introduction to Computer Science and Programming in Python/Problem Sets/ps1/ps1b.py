annual_salary = float(input("Enter your annual salary: "))

portion_saved = float(input("Enter the percent of your salary to save, as a decimal: "))
total_cost = float(input("Enter the cost of your dream home: "))
semi_annual_raise = float(input("Enter the semi-annual raise, as a decimal: "))

def monthsToSaveDownPayment(annual_salary, portion_saved, total_cost, semi_annual_raise):
    portion_down_payment = total_cost*(0.25)
    current_savings = 0
    returnRate = 0.04
    number_of_months = 0
    original_salary = annual_salary

    while (current_savings <= portion_down_payment):
        if (number_of_months % 6 == 0 and number_of_months > 0):
            annual_salary = annual_salary + ((annual_salary * semi_annual_raise))
        current_savings = current_savings + current_savings * (returnRate/12) + ((annual_salary/12)*portion_saved)
        number_of_months = number_of_months + 1

    return_str = ("Enter your annual salary: " + str(int(original_salary)) 
    +"\n Enter your percent of your salary to save: " + str(portion_saved)
    +"\n Enter the cost of your dream home: " + str(int(total_cost))
    +"\n Enter the semi-annual raise, as a decimal: " + str(semi_annual_raise)
    +"\n Number of months: " + str(number_of_months))

    return return_str


print(monthsToSaveDownPayment(annual_salary, portion_saved, total_cost, semi_annual_raise))
