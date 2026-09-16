const leftInput = document.getElementById("left-val");
const rightInput = document.getElementById("right-val");
const operatorSelect = document.getElementById("operator");
const submitBtn = document.getElementById("submit-btn");

function isPositiveInteger(str) {
    return /^\d+$/.test(str.trim());
}

submitBtn.addEventListener("click", function() {
    const leftRaw = leftInput.value;
    const rightRaw = rightInput.value;

    if (!isPositiveInteger(leftRaw) || !isPositiveInteger(rightRaw)) {
        alert("Error :(");
        return;
    }

    const left = parseInt(leftRaw, 10);
    const right = parseInt(rightRaw, 10);
    const op = operatorSelect.value;

    if ((op === "/" || op === "%") && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result = 0;
    if (op === "+") {
        result = left + right;
    } else if (op === "-") {
        result = left - right;
    } else if (op === "*") {
        result = left * right;
    } else if (op === "/") {
        result = left / right;
    } else if (op === "%") {
        result = left % right;
    }

    alert(result);
    console.log(result);
});

/*setInterval(function() {
    alert("Please, use me...");
}, 30000);*/
