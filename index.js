function reverseString() {
    var input = document.getElementById('reverseInput').value;
    var reversed = "";
    for (var i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    document.getElementById("reverse").innerHTML = `${reversed}`;
}

function isPalindrome() {
    var input = parseInt(document.getElementById('palinInput').value);

    var reverseInputStr = input.toString().split('').reverse().join('');
    var reverseInput = parseInt(reverseInputStr);
    var resultOutput = document.getElementById("palindrome");
    if (input == reverseInput) {
        resultOutput.innerHTML = `${input} is a palindrome!`;
    }
    else {
        resultOutput.innerHTML = `${input} is not a palindrome.`;
    }
}

function calculateBill() {
    var inputBill = parseFloat(document.getElementById('billInput').value);
    var inputTip = parseFloat(document.getElementById('tipInput').value);

    if (isNaN(inputBill) || isNaN(inputTip)) {
        document.getElementById("tipcalc").innerHTML = "Invalid input. Please try again.";
        return;
    }

    var tipAmt = inputBill * (inputTip/100);
    var totalBill = inputBill + tipAmt;

    document.getElementById("tipcalc").innerHTML = `Total Bill: $${totalBill.toFixed(2)}`;
}