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
});

const addButton = document.getElementById("+");
addButton.addEventListener("click", (e) => {
    firstNum = document.querySelector("#display").textContent;
    document.querySelector("#display").textContent = "";
    operator = e.target.textContent;
    display = "";
});

const subtractButton = document.getElementById("-");
subtractButton.addEventListener("click", (e) => {
    firstNum = document.querySelector("#display").textContent;
    document.querySelector("#display").textContent = "";
    operator = e.target.textContent;
    display = "";
});

const multiplyButton = document.getElementById("*");
multiplyButton.addEventListener("click", (e) => {
    firstNum = document.querySelector("#display").textContent;
    document.querySelector("#display").textContent = "";
    operator = e.target.textContent;
    display = "";
});

const divideButton = document.getElementById("/");
divideButton.addEventListener("click", (e) => {
    firstNum = document.querySelector("#display").textContent;
    document.querySelector("#display").textContent = "";
    operator = e.target.textContent;
    display = "";
});

const equalButton = document.getElementById("=");
equalButton.addEventListener("click", (e) => {
    secondNum = display;
    display = "";
    operate();
});