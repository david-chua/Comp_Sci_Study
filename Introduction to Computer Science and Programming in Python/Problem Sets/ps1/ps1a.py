annual_salary = float(input("Enter your annual salary: "))
portion_saved = float(input("Enter the percent of your salary to save, as a decimal: "))
total_cost = float(input("Enter the cost of your dream home: "))

def monthsToSaveDownPayment(annual_salary, portion_saved, total_cost):
    portion_down_payment = total_cost*(0.25)
    current_savings = 0
    returnRate = 0.04
    number_of_months = 0
    
    while (current_savings < portion_down_payment):
        current_savings = current_savings + current_savings * (returnRate/12)
        current_savings = current_savings + ((annual_salary/12)*portion_saved)
        number_of_months = number_of_months + 1
        
    return_str = ("Enter your annual salary: " + str(annual_salary) + "\nEnter your percent of your salary to save: " + str(portion_saved)  
    +"\nEnter the cost of your dream home: " + str(total_cost) 
    +"\nNumber of months: " + str(number_of_months))
    
    return return_str
    

print(monthsToSaveDownPayment(annual_salary, portion_saved, total_cost))    