import {drawPreview, drawNewPoint, safePreDraw, safeNewDraw} from "./src/main/webapp/script/drawer";
import {getXValues} from "./src/main/webapp/script/utils";

let inputR = document.getElementById('hitInfo:r-value_input')
let increaseButtonR = document.getElementById('hitInfo:r-value-increase')
let decreaseButtonR = document.getElementById('hitInfo:r-value-decrease')

let inputY = document.getElementById('hitInfo:y-value')

let inputX = document.getElementById('choiceX')

let submitButton = document.getElementById('hitInfo:tryHit')

let svg = document.getElementById("graphSVG");
let svgInitData = document.getElementById("graphSVG").innerHTML;
let svgLastData = document.getElementById("graphSVG").innerHTML;

let dataTableDiv = document.getElementById('results-div')

let clearDiv = document.getElementById('clearDiv')
let isClearing = false



increaseButtonR.addEventListener('click', () => {
    let xValues = getXValues()
    safePreDraw(xValues, inputY.value, inputR.value)
});

decreaseButtonR.addEventListener('click', () => {
    let xValues = getXValues()
    safePreDraw(xValues, inputY.value, inputR.value)
});

inputY.addEventListener("input", function() {
    let xValues = getXValues()
    safePreDraw(xValues, inputY.value, inputR.value)
});

inputX.addEventListener("click", function() {
    let xValues = getXValues()
    safePreDraw(xValues, inputY.value, inputR.value)
});

inputR.addEventListener("change", function() {
    let xValues = getXValues()
    safePreDraw(xValues, inputY.value, inputR.value)
});

svg.addEventListener('click', function (event) {

    let hiddenSubmitButton = document.getElementById('hitInfoHidden:tryHitHidden')
    let hiddenX = document.getElementById('hitInfoHidden:x-value-hidden')
    let hiddenY = document.getElementById('hitInfoHidden:y-value-hidden')
    let hiddenR = document.getElementById('hitInfoHidden:r-value-hidden')

    let r = inputR.value
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
    safeNewDraw(xValues, inputY.value, inputR.value)
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
