const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  // Calculate NSSF (assuming Tier I contributions)
  let nssfDeduction = 0;
  const nssfRate = 0.06; // 6%
  if (grossSalary <= 18000) {
    nssfDeduction = grossSalary * nssfRate;
  } else {
    nssfDeduction = 1080; // Maximum NSSF deduction
  }

  // Calculate NHIF
  let nhifDeduction = 0;
  if (grossSalary <= 5999) {
    nhifDeduction = 150;
  } else if (grossSalary <= 7999) {
    nhifDeduction = 300;
  } else if (grossSalary <= 11999) {
    nhifDeduction = 400;
  } else if (grossSalary <= 14999) {
    nhifDeduction = 500;
  } else if (grossSalary <= 19999) {
    nhifDeduction = 600;
  } else if (grossSalary <= 24999) {
    nhifDeduction = 750;
  } else if (grossSalary <= 29999) {
    nhifDeduction = 850;
  } else if (grossSalary <= 34999) {
    nhifDeduction = 900;
  } else if (grossSalary <= 39999) {
    nhifDeduction = 950;
  } else if (grossSalary <= 44999) {
    nhifDeduction = 1000;
  } else if (grossSalary <= 49999) {
    nhifDeduction = 1100;
  } else if (grossSalary <= 59999) {
    nhifDeduction = 1200;
  } else if (grossSalary <= 69999) {
    nhifDeduction = 1300;
  } else if (grossSalary <= 79999) {
    nhifDeduction = 1400;
  } else if (grossSalary <= 89999) {
    nhifDeduction = 1500;
  } else if (grossSalary <= 99999) {
    nhifDeduction = 1600;
  } else {
    nhifDeduction = 1700; // For gross salary above 100,000
  }

  // Calculate PAYE (Tax)
  let taxableIncome = grossSalary - nssfDeduction;
  let payeeTax = 0;
  if (taxableIncome <= 24000) {
    payeeTax = taxableIncome * 0.1;
  } else if (taxableIncome <= 32333) {
    payeeTax = 2400 + (taxableIncome - 24000) * 0.25;
  } else {
    payeeTax = 2400 + 2083.25 + (taxableIncome - 32333) * 0.3;
  }

  // Calculate net salary
  const netSalary = grossSalary - nssfDeduction - nhifDeduction - payeeTax;

  return {
    grossSalary: grossSalary.toFixed(2),
    nssfDeduction: nssfDeduction.toFixed(2),
    nhifDeduction: nhifDeduction.toFixed(2),
    payeeTax: payeeTax.toFixed(2),
    netSalary: netSalary.toFixed(2)
  };
}

function promptUser() {
  rl.question('Enter basic salary: ', (basicSalaryInput) => {
    rl.question('Enter benefits: ', (benefitsInput) => {
      const basicSalary = parseFloat(basicSalaryInput);
      const benefits = parseFloat(benefitsInput);

      if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Please enter valid numeric values for salary and benefits.");
        rl.close();
        return;
      }

      const results = calculateNetSalary(basicSalary, benefits);

      console.log(`Gross Salary: KES ${results.grossSalary}`);
      console.log(`NSSF Deduction: KES ${results.nssfDeduction}`);
      console.log(`NHIF Deduction: KES ${results.nhifDeduction}`);
      console.log(`PAYE (Tax): KES ${results.payeeTax}`);
      console.log(`Net Salary: KES ${results.netSalary}`);

      rl.close();
    });
  });
}

promptUser();

