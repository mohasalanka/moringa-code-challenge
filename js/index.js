// The Challenge 1
function ShowGrade(){
    // Get the value entered in the input field
    let mark=parseInt(document.getElementById("grade").value);

    //convert the value to a number mark=Number(mark);
    //caculate the grade based on the mark
  


    let grade;
    
    if(mark>79 && mark <= 100){
         grade="A"
    }else if(mark>= 60 && mark<=79){
         grade="B"
    }else if(mark>= 50 && mark<=59){
        grade="C"
    }else if(mark>= 40 && mark<=49){
         grade="D"
    }
    else if (mark <0 || mark >100){
        grade="invalid number"

    }else{
         grade="E"
    }


    // Display the grade on the page
    document.getElementById("result")
    .innerHTML="The student's grade " + grade;
    
}


let btn=document.getElementById("btn")
btn.addEventListener("click", ()=>{
    ShowGrade()
})
// The challenge 2

function caculater(){
    const speedInput= document.getElementById("speed")
    const speed = speedInput.value;

    const resultDiv = document.getElementById("output")

    if(speed < 70){
        resultDiv.ineerHTML = "OK";
    }else{

        const demeritPoint = Math.floor((speed-70)/5);

        if(demeritPoints >12) {
            resultDiv.innerHTML = "License suspended";
        }else{
            resultDiv.innerHTML = `Points: ${demeritPoints}`;
        }
    }
}


// challenge 3

/**Caculating  Net Salary
 * calculate a persons netsalary of basic salary and benefits
 * calculate Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary values. 
 */


// get user inputs
function calculateNetSalary(basicPay, benefits){
    // Net Salary= grossPay- deductions - paye
    basicPay = parseFloat(basicPay)
    benefits = parseFloat(benefits)
    let grossPay= calculateGrossPay(basicPay, benefits)   
    let nssfDeduction= calculateNssfDeductions(grossPay)
    let nhifDeduction= calculateNssfDeductions(grossPay)
    let payee= calculatePayee(grossPay)
    return grossPay -payee - nssfDeduction - nhifDeduction
}
function calculateGrossPay (basicSalary, benefits){
    return basicSalary + benefits
}

// calculate payee
function calculatePayee(grossPay){
    let taxPercentage=0
    if (grossPay<=24000){
        taxPercentage=10
    }else if(grossPay>=24001 && grossPay<=32333){
        taxPercentage=25
    }else if(grossPay>32333){
        taxPercentage=30
    }   
    let paye = grossPay * taxPercentage/100
    // Deduct personalRelief
    let personalRelief= 2400
    return paye - personalRelief
}

// NHIF Deductions
// Declare constants for NHIF Deductions
const nhifDeductions = [
    { minGrossPay: 0, maxGrossPay: 5999, deduction: 150 },
    { minGrossPay: 6000, maxGrossPay: 7999, deduction: 300 },
    { minGrossPay: 8000, maxGrossPay: 11999, deduction: 400 },
    { minGrossPay: 12000, maxGrossPay: 14999, deduction: 500 },
    { minGrossPay: 15000, maxGrossPay: 19999, deduction: 600 },
    { minGrossPay: 20000, maxGrossPay: 24999, deduction: 750 },
    { minGrossPay: 25000, maxGrossPay: 29999, deduction: 850 },
    { minGrossPay: 30000, maxGrossPay: 34999, deduction: 900 },
    { minGrossPay: 35000, maxGrossPay: 39999, deduction: 950 },
    { minGrossPay: 40000, maxGrossPay: 44999, deduction: 1000 },
    { minGrossPay: 45000, maxGrossPay: 49999, deduction: 1100 },
    { minGrossPay: 50000, maxGrossPay: 59999, deduction: 1200 },
    { minGrossPay: 60000, maxGrossPay: 69999, deduction: 1300 },
    { minGrossPay: 70000, maxGrossPay: 79999, deduction: 1400 },
    { minGrossPay: 80000, maxGrossPay: 89999, deduction: 1500 },
    { minGrossPay: 90000, maxGrossPay: 99999, deduction: 1600 },
    { minGrossPay: 100000, maxGrossPay: Infinity, deduction: 1700 }
  ];

  function caculateNssfDeductions(grasspay){
    // calculate NSSF Deductions old rates
    let nssfDeduction=0
    nssfDeduction=grossPay * 0.5
    if(nssfDeduction > 400){
        return 400
    }
  }