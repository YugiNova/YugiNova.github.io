let arrButton = ["CE", "C", "<", "/", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "+/-",
    "0", ".", "="
]
let arrButtonElement = [];
let numFirst = 0,
    numLast = 0,
    result = 0,
    lastCal = "";

function renderButton() {
    for (let i = 0; i < arrButton.length; i++) {
        document.getElementById("keyboard").innerHTML +=
            `<div data="${arrButton[i]}" class="col-3 cal-button" id="${arrButton[i]}" onClick = "Calculating(this)">
                <button>${arrButton[i]}</button>
            </div>`
    }
}

let clickNumber = (num) => {
    numLast += num.toString();
    document.querySelector('.screen h1').innerText = numLast;

}

let clickCalculation = (cal) => {
    numFirst = getResult(lastCal);
    lastCal = cal;
    document.querySelector('.title h4').innerText = `${numFirst} ${cal}`
    numLast = "";
    document.querySelector('.screen h1').innerText = 0;
}

let getkResult = (cal) => {
    switch (cal) {
        case "+":
            result = Number(numFirst) + Number(numLast);
            break;
        case "-":
            result = Number(numFirst) - Number(numLast);
            break;
        case "x":
            result = Number(numFirst) * Number(numLast);
            break;
        case "/":
            result = Number(numFirst) / Number(numLast);
            break;
        default:
            result = numLast;
            break;
    }
    return result;
}

function Calculating(attr) {
    let data = attr.getAttribute("data");
    switch (data) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            getNumber(data);
            break;
        case "+":
        case "-":
        case "x":
        case "/":
            getCalculation(data);
            break;

        default:
            document.querySelector('.screen h1').innerText = 0;
            break;
    }
    console.log(`numFirst: ${numFirst}, numLast: ${numLast}`);
}