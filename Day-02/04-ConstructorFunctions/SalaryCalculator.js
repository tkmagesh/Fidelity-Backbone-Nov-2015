/*
Create a class "SalaryCalculator"
with the following attributes
    - basic
    - hra
    - da
    - tax (%)
    - salary

    - calculate()

by default, the salary is initialized with '0'
when invoked the 'calculate()' method, the salary is calculated
based on the below formula and updated in the 'salary' attribute

    salary = (basic + hra + da) - tax%

Usage :

var calculator = new SalaryCalculator();

calculator.salary // => 0
calculator.basic = 10000
calculator.hra = 2000
calculator.da = 3000
calculator.tax = 10


or
var calculator = new SalaryCalculator(10000,3000,2000,10)



calculator.calculate();

calculator.salary // => 13500

*/
