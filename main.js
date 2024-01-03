import {drawPreview, drawNewPoint, safePreDraw, safeNewDraw} from "./src/main/webapp/script/drawer";
import {getXValues} from "./src/main/webapp/script/utils";

let input_R = document.getElementById('hitInfo:r-value_input')
let increaseButton_R = document.getElementById('hitInfo:r-value-increase')
let decreaseButton_R = document.getElementById('hitInfo:r-value-decrease')

let input_Y = document.getElementById('hitInfo:y-value')

let input_X = document.getElementById('choiceX')

let submitButton = document.getElementById('hitInfo:tryHit')

let svg = document.getElementById("graphSVG");
let svgInitData = document.getElementById("graphSVG").innerHTML;
let svgLastData = document.getElementById("graphSVG").innerHTML;

let dataTableDiv = document.getElementById('results-div')

let clearDiv = document.getElementById('clearDiv')
let isClearing = false



increaseButton_R.addEventListener('click', () => {
    let xValues = getXValues()
    safePreDraw(xValues, input_Y.value, input_R.value)
});

decreaseButton_R.addEventListener('click', () => {
    let xValues = getXValues()
    safePreDraw(xValues, input_Y.value, input_R.value)
});

input_Y.addEventListener("input", function() {
    let xValues = getXValues()
    safePreDraw(xValues, input_Y.value, input_R.value)
});

input_X.addEventListener("click", function() {
    let xValues = getXValues()
    safePreDraw(xValues, input_Y.value, input_R.value)
});

input_R.addEventListener("change", function() {
    let xValues = getXValues()
    safePreDraw(xValues, input_Y.value, input_R.value)
});

svg.addEventListener('click', function (event) {

    let hiddenSubmitButton = document.getElementById('hitInfoHidden:tryHitHidden')
    let hiddenX = document.getElementById('hitInfoHidden:x-value-hidden')
    let hiddenY = document.getElementById('hitInfoHidden:y-value-hidden')
    let hiddenR = document.getElementById('hitInfoHidden:r-value-hidden')

    let r = input_R.value
    let x = (event.offsetX - 200) / (100 / r)
    let y = (event.offsetY - 200) / (-100 / r)

    safeNewDraw([x], y, r)

    hiddenX.value = x
    hiddenY.value = y
    hiddenR.value = r

    hiddenSubmitButton.click()

    svgLastData = svg.innerHTML

    clearDiv.style.display = 'block'
    dataTableDiv.style.padding = '20px 20px 0 20px'
    isClearing = false
});

submitButton.addEventListener('click', () => {
    let xValues = getXValues()
    safeNewDraw(xValues, input_Y.value, input_R.value)
    svgLastData = svg.innerHTML

    clearDiv.style.display = 'block'
    dataTableDiv.style.padding = '20px 20px 0 20px'
    isClearing = false
})

clearDiv.addEventListener('click', function () {
    isClearing = true
    svg.innerHTML = svgInitData
    svgLastData = svgInitData

    clearDiv.style.display = 'none'
    dataTableDiv.style.padding = '20px'
})
