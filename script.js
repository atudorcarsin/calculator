const operations = {
    "+": (x, y) => {
        if (!y) return x;
        return Math.round((parseFloat(x) + parseFloat(y)) * 1000) / 1000;
    },
    "-": (x, y) => Math.round((x - y) * 1000) / 1000,
    "*": (x, y) => Math.round(x * y * 1000) / 1000,
    "/": (x, y) => {
        if (Math.round(x / y * 1000) / 1000 == Infinity) return undefined;
        return Math.round(x / y * 1000) / 1000;
    },
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
    addEventListener("keydown", (e) => {
        if (e.key == i) {
            button.click();
        }
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
    addEventListener("keydown", (e) => {
        if (e.key == button.id) {
            button.click();
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
addEventListener("keydown", (e) => {
    if (e.key == "Enter" || e.key == equalButton.id) {
        equalButton.click();
    }
});

const delButton = document.getElementById("del");
delButton.addEventListener("click", () => {
    display = display.substring(0, display.length - 1);
    document.getElementById("display").textContent = display;
});
addEventListener("keydown", (e) => {
    if (e.key == "Backspace") {
        delButton.click();
    }
});