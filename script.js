const form = document.getElementById("form")
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")

function amicable() {
    // Prepare the two numbers for comparison
    var num1Val, num2Val, num1Factors = [], num2Factors = [], n1fDisplay = "", n2fDisplay = "", num1fSum = 0, num2fSum = 0
    num1Val = num1.value
    num2Val = num2.value
    // Find the factors of the two numbers
    for (let i = 0; i < num1Val; i++) {
        if (num1Val % i == 0) {
            num1Factors.push(i)
            n1fDisplay += " " + i
            num1fSum += i
        }
    }
    for (let i = 0; i < num2Val; i++) {
        if (num2Val % i == 0) {
            num2Factors.push(i)
            n2fDisplay += " " + i
            num2fSum += i
        }
    }
    alert("Factors of number 1 are:" + n1fDisplay + '\n' + "Factors of number 2 are:" + n2fDisplay)
    // Check if they are amicable
    if (num1fSum == num2Val && num2fSum == num1Val) {
        document.getElementById("result").textContent = "The numbers: " + num1Val + " and " + num2Val + " are amicable"
    } else {
        document.getElementById("result").textContent = "The numbers: " + num1Val + " and " + num2Val + " are not amicable"
    }
}
