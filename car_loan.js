function calculateEMI(event) {
    event.preventDefault();

    var loanAmount = document.getElementById("loan_amount").value;
    var interestRate = document.getElementById("interest_rate").value;
    var loanTerm = document.getElementById("loan_term").value;
    var termOption = document.getElementById("term_option").value;

    if (termOption === "years") {
        loanTerm *= 12;
    }

    var emi = calculateEMIValue(loanAmount, interestRate, loanTerm);
    var totalPayment = emi * loanTerm;
    var totalInterest = totalPayment - loanAmount;

    // Display the results
    document.getElementById("loanAmount").textContent = "Loan Amount: ₹" + loanAmount;
    document.getElementById("interestRate").textContent = "Interest Rate: " + interestRate + "%";
    document.getElementById("loanTerm").textContent = "Loan Term: " + loanTerm + " months";
    document.getElementById("emi").textContent = "EMI: ₹" + emi.toFixed(2);
    document.getElementById("totalPayment").textContent = "Total Payment: ₹" + totalPayment.toFixed(2);
    document.getElementById("totalInterest").textContent = "Total Interest: ₹" + totalInterest.toFixed(2);

    document.getElementById("resultContainer").style.display = "block";
}

function calculateEMIValue(loanAmount, interestRate, loanTerm) {
    var interest = (interestRate / 100) / 12;
    var numerator = loanAmount * interest * Math.pow(1 + interest, loanTerm);
    var denominator = Math.pow(1 + interest, loanTerm) - 1;
    return numerator / denominator;
}