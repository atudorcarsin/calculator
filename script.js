const operations = {
    "+": (x, y) => {
        if (!y) return x;
        return Math.round((parseFloat(x) + parseFloat(y)) * 1000) / 1000;
    },
    "-": (x, y) => Math.round((x - y) * 1000) / 1000,
    "*": (x, y) => Math.round(x * y * 1000) / 1000,
    "/": (x, y) => {
        if (Math.round(x / y * 1000) / 1000 == Infinity || isNaN(firstNum / secondNum)) return "undefined";
        return Math.round(x / y * 1000) / 1000;
    },
}

let firstNum;
let secondNum;
let operator;

const operate = () => {
    document.getElementById("display").textContent = operations[operator](firstNum, secondNum);
    display = document.getElementById("display").textContent;
}

let display = "";

for (let i = 0; i < 10; i++) {
    let button = document.getElementById(i);
    button.addEventListener("click", (e) => {
        if (display[display.length - 4] != "." && (!isNaN(display) || display == "-")) {
            display += e.target.value;
            let p = document.querySelector("#display");
            p.textContent = display;
        }
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
addEventListener("keydown", (e) => {
    if (e.key == "C" || e.key == "c") {
        clear.click();
    }
});

const operationButtons = document.querySelectorAll(".operation");
operationButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (parseFloat(firstNum) && display) {
            document.getElementById("=").click();
        }
        operator = e.target.textContent;
        if (!firstNum) {
            firstNum = document.querySelector("#display").textContent;
            if (!isNaN(firstNum)) {
                display = "";
                document.querySelector("#display").textContent = "";
                document.getElementById("equation").textContent += firstNum + operator;
            }
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
    if (firstNum && !isNaN(secondNum)) {
        document.getElementById("equation").textContent += secondNum;
        display = "";
        document.getElementById("equation").innerText = "";
        operate();
        firstNum = "";
        secondNum = "";
    }
});
addEventListener("keydown", (e) => {
    if (e.key == "Enter" || e.key == equalButton.id) {
        equalButton.click();
    }
});

const delButton = document.getElementById("del");
delButton.addEventListener("click", () => {
    if (display == "undefined") {
        display = "";
    }
    else {
        display = display.substring(0, display.length - 1);
    }
    document.getElementById("display").textContent = display;
});
addEventListener("keydown", (e) => {
    if (e.key == "Backspace") {
        delButton.click();
    }
});

const dotButton = document.getElementById(".");
dotButton.addEventListener("click", (e) => {
    if (display.indexOf(".") < 0) {
        display += ".";
        document.querySelector("#display").innerText = display;
    }
});
addEventListener("keydown", (e) => {
    if (e.key == ".") {
        dotButton.click();
    }
});

const signButton = document.querySelector("#sign");
signButton.addEventListener("click", (e) => {
    if (!isNaN(display) && display) {
        display *= -1;
        display = display.toString();
        document.getElementById("display").innerText = display;
    }
});

const themeButton = document.querySelector("input");
themeButton.addEventListener("change", (e) => {
    if (e.target.checked) {
        document.querySelector("body").bgColor = "#1f1f1f";
        document.querySelectorAll("button").forEach((btn) => {
            if (btn.className != "invisible") {
                btn.style.backgroundColor = "#28292a";
                btn.style.borderColor = "#ffffff";
                btn.style.color = "#ffffff";
            }
        });
        document.querySelector("p").style.color = "white";
        document.querySelector("#display").style.color = "white";
        document.querySelector("#equation").style.color = "white";
    }
    else {
        document.querySelector("body").bgColor = "#ffffff";
        document.querySelectorAll("button").forEach((btn) => {
            if (btn.className != "invisible") {
                btn.style.backgroundColor = "#ffffff";
                btn.style.borderColor = "#000000";
                btn.style.color = "#000000";
            }
        });
        document.querySelector("p").style.color = "black";
        document.querySelector("#display").style.color = "black";
        document.querySelector("#equation").style.color = "black";
    }
});
