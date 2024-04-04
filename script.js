const operations = {
    "+": (x, y) => parseInt(x) + parseInt(y),
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
}

let firstNum;
let secondNum;
let operator;

const operate = () => {
    document.getElementById("display").textContent = operations[operator](firstNum, secondNum);
}

let display = "";

for (let i = 0; i < 10; i++) {
    let button = document.getElementById(i);
    button.addEventListener("click", (e) => {
        display += e.target.value;
        let p = document.querySelector("#display");
        p.textContent = display;
    });
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    display = "";
    let p = document.querySelector("#display");
    p.textContent = display;
    firstNum = "";
    secondNum = "";
    operator = "";
    document.getElementById("equation").innerText = "";
});

const operationButtons = document.querySelectorAll(".operation");
operationButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (firstNum && display) {
            document.getElementById("=").click();
        }
        operator = e.target.textContent;
        if (!firstNum) {
            firstNum = document.querySelector("#display").textContent;
            display = "";
            document.querySelector("#display").textContent = "";
            document.getElementById("equation").textContent += firstNum + operator;
        }
    });
});

const equalButton = document.getElementById("=");
equalButton.addEventListener("click", (e) => {
    secondNum = display;
    if (secondNum) {
        document.getElementById("equation").textContent += secondNum;
    }
    display = "";
    document.getElementById("equation").innerText = "";
    operate();
    firstNum = "";
    secondNum = "";
});