annual_salary = float(input("Enter your annual salary: "))
x = annual_salary
total_cost = 1000000
semi_annual_raise = 0.07
current_savings = 0
portion_down_payment = 0.25 * total_cost
months = 0
target_range = 100
low = 0
high = 10000
steps = 0


while True:
    print('steps', steps)
    portion_saved = (low + high) / 2
    print('portion', portion_saved)
    annual_salary = x
    current_savings = 0
    for month in range(0, 36):
        monthly_salary = annual_salary/12
        current_savings = current_savings + float((monthly_salary * portion_saved) / 10000) + (current_savings * 0.04) /12
        if month % 6 == 0:
            annual_salary = annual_salary + (annual_salary * semi_annual_raise)
    if abs(current_savings - portion_down_payment) <= target_range:
        print('Best saving rate: ', '%.2f' % (portion_saved/100), '%')
        print('Steps in binary search: ', steps)
        print(current_savings)
        break
    elif abs(current_savings - portion_down_payment) > target_range and current_savings > portion_down_payment:
        high = portion_saved
    elif abs(current_savings - portion_down_payment) > target_range and current_savings < portion_down_payment:
        low = portion_saved
    if low == high:
        print('It is not possible to pay the down payment in three years.')
        break
    steps = steps + 1
