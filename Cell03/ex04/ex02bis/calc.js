$(document).ready(function() {
    function isPositiveInteger(str) {
        return /^\d+$/.test(str.trim());
    }

    $("#submit-btn").click(function() {
        const leftRaw = $("#left-val").val();
        const rightRaw = $("#right-val").val();

        if (!isPositiveInteger(leftRaw) || !isPositiveInteger(rightRaw)) {
            alert("Error :(");
            return;
        }

        const left = parseInt(leftRaw, 10);
        const right = parseInt(rightRaw, 10);
        const op = $("#operator").val();

        if ((op === "/" || op === "%") && right === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let result = 0;
        if (op === "+") result = left + right;
        else if (op === "-") result = left - right;
        else if (op === "*") result = left * right;
        else if (op === "/") result = left / right;
        else if (op === "%") result = left % right;

        alert(result);
        console.log(result);
    });

    setInterval(function() {
        alert("Please, use me...");
    }, 30000);
});
