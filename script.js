const form = document.getElementById("form")
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent redireciton
    // Prepare the two numbers for comparison
    var num1Val, num2Val, num1FactorsSum = 0, num2FactorsSum = 0
    num1Val = num1.value
    num2Val = num2.value
    // Find the factors of the two numbers
    for (let i = 0; i < num1Val; i++) {
        if (num1Val % i == 0) {
            num1FactorsSum += i 
        }
    }
    for (let i = 0; i < num2Val; i++) {
        if (num2Val % i == 0) {
            num2FactorsSum += i 
        }
    }
    // Check if they are amicable
    if (num1FactorsSum == num2Val && num2FactorsSum == num1Val) {
        document.getElementById("result").innerHTML = "The numbers: " + num1Val + " and " + num2Val + " are amicable";
    } else {
        document.getElementById("result").innerHTML = "The numbers: " + num1Val + " and " + num2Val + " are not amicable";
    }
})