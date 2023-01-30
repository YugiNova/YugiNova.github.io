let arrButton = ["CE", "C", "<", "/", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "+/-",
    "0", ".", "="
]
let arrButtonElement = [];
let numFirst = 0,
    numLast = 0,
    result = 0,
    lastCal = "",
    endCal = false;

function renderButton() {
    for (let i = 0; i < arrButton.length; i++) {
        document.getElementById("keyboard").innerHTML +=
            `<div data="${arrButton[i]}" class="col-3 cal-button" id="${arrButton[i]}" onClick = "Calculating(this)">
                <button>${arrButton[i]}</button>
            </div>`
    }
}

let clickNumber = (num) => {
    if (endCal === true) {
        numFirst = 0;
        numLast = 0;
        numLast += num.toString();
        document.querySelector('.screen h1').innerText = numLast;
        document.querySelector('.title h4').innerText = "";
        endCal = false;
    } else {
        numLast += num.toString();
        document.querySelector('.screen h1').innerText = numLast;
    }


}

let clickCalculation = (cal) => {
    numFirst = getResult(lastCal);
    lastCal = cal;
    document.querySelector('.title h4').innerText = `${numFirst} ${cal}`
    numLast = "";
    document.querySelector('.screen h1').innerText = 0;
}

let getResult = (cal) => {
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

let clickEqual = () => {
    let finalCal = `${numFirst} ${lastCal} ${numLast}`;
    document.querySelector('.screen h1').innerText = getResult(lastCal);
    document.querySelector('.title h4').innerText = finalCal;
    endCal = true;
}

let clickDelete = (del) => {

    switch (del) {
        case "<":
            let numTemp = document.querySelector('.screen h1').innerText
            numLast = numTemp.slice(0, numTemp.length - 1);
            document.querySelector('.screen h1').innerText = numLast;
            break;
        case "C":
            document.querySelector('.screen h1').innerText = 0;
            document.querySelector('.title h4').innerText = null;
            numFirst = 0,
                numLast = 0,
                result = 0,
                lastCal = "";
            break;
        default:
            break;
    }
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
        case ".":
            clickNumber(data);
            break;
        case "+":
        case "-":
        case "x":
        case "/":
            clickCalculation(data);
            break;
        case "=":
            clickEqual();
            break;
        case "<":
        case "C":
            clickDelete(data);
            break;
        default:
            document.querySelector('.screen h1').innerText = 0;
            break;
    }
    console.log(`numFirst: ${numFirst}, numLast: ${numLast}`);
}