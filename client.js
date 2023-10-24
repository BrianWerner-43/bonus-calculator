// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( array) {  
  // your logic here
  // look at each objects of employees
  // Look at employee ratings to figure out bonus
   let bonuses = [];
   let totalBonus;
   let seniorityBonus;
   
  
    let employee = array[0];
    console.log(employee);
    let employeeNumber = employee.employeeNumber;
    console.log('expect 2405: ', employeeNumber);
    let reviewRating = employee.reviewRating;
    console.log('Expect 3', reviewRating);
    let annualSalary = employee.annualSalary;
    console.log('Expect 47000', annualSalary);

    if (reviewRating <= 2){
      totalBonus = 0;
    } else if (reviewRating === 3){
      totalBonus = 0.04 * annualSalary;
    } else if (reviewRating === 4){
      totalBonus = 0.06 * annualSalary;
    } else if (reviewRating === 5){
      totalBonus = 0.10 * annualSalary;
    }
    //  If employeeNumber is 4 digits add 5% to bonus up to 13%
    if (employeeNumber.length === 4 ){
      seniorityBonus = 0.05 * annualSalary;
      totalBonus += seniorityBonus;
    }
  
//   // Look at annualsalary 
//     // If income is greater that $65K subtract 1% down to 0
    if (annualSalary > 65000){
      totalBonus - (0.01 * annualSalary);
    }
  
//   // return new object with bonus results

  return totalBonus;

};
console.log(calculateIndividualEmployeeBonus(employees));