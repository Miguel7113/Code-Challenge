# Code-Challenge

## GradeGenerator

Starting with a node readline module l1 to l6 is just allowing us to prompt the user and get an input from them through readline

l7 to l9 is the function declaration as well as the user prompt code written using the readline module

l11 starts the if else statement for the function with l11 - l12 disallowing any numbers that do not fall into 0-100

l13 to l23 continues the else statements with each marks section generating and console.logging a specific Grade



## speed_detector.js

Starting with a node readline module l1 to l6 is just allowing us to prompt the user and get an input from them through readline

l8 to l11 declared the speedDetector function and proceeds to prompt for a speed input using the readline module (r1.question)
speed is assigned to the input with parseint which will change the input into an intager
the speedLimit is also assigned a const speed of 70 that will be immutable

l13 to l16 does not permit the input of anything thats not a number or less than 0, it also console.logs a prompt for the user to let them know the input is unapplicable, then closing the readline.

l19 to l23 starts by console.logging anything under or on the speed limit as ok
l22 assigns overSpeed to speed - speedLimit as any positive intager would be over the speedLimit
l23 initializes the demeritPoints to 0

l26 to l29 is the while loop which loops the function any time the speed over the speedLimit increases by 5 a demeritPoint is added

l31 is the console.log return that the user would get after their speed input using $ as a changing demeritPoint

l33 to l34 limit the function to 14 demeritPoints as anything over that gets the license suspended

l38 closes the readline with rl.close() no longer reading for input



## Net Salary

Starting with a node readline module l1 to l6 is just allowing us to prompt the user and get an input from them through readline

l8 to l9 is the function declaration with the benefits and basicSalary parameters as they are what the user will input. As well as assigning grossSalary to being those two inputs added together.

l11 to l18 has the nssf(National Social Security Fund) which is calculated as 6% of the grossSalary for salaries up to 18,000. Using an if else statement we assign the nssfDeduction to grossSalary * the 6% rate

l21 to l54 calculates the NHIF(National Hospital Insurance Fund) using an if else statement and the given brackes that correspond to the grossSalary 

l59 to l67 is the PAYE is calculated based on the taxable income (gross salary minus NSSF deduction) where Up to 24,000 KES: 10%
24,001 - 32,333 KES: 25% of the amount above 24,000 KES plus 2,400 KES
32,334 KES and above: 30% of the amount above 32,333 KES plus 4,483.25 KES
using another if else we can link the 3 taxable incomes.

l70 is the netSalary equation that deducts the tax, NSSF, and NHIF

l73 to l77 formats the calculated salary to 2 decimal places as a float is returned

l81 to l85 consists of the function prompt for the basicSalary and benefits

l87 to l90 does not permit anything under 0 or not a number 

l95 to l99 console.logs each of the results based on calculations in the code