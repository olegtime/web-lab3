import {checkStatus} from "./utils";

export function drawPreview(x, y, r) {
    const circle = document.getElementById('point')

    const rLabel = document.getElementsByClassName("r-label");
    const rMinusLabel = document.getElementsByClassName("r-minus-label");
    const rHalfLabel = document.getElementsByClassName("r-half-label");
    const rMinusHalfLabel = document.getElementsByClassName("r-half-minus-label");

    const centerX = 200;
    const centerY = 200;
    const scaleFactor = 100 / r;

    const scaledX = (x * scaleFactor) + centerX;
    const scaledY = (y * -scaleFactor) + centerY;

    // set new coordinates for red circle
    circle.setAttribute("cx", scaledX.toString());
    circle.setAttribute("cy", scaledY.toString());


    // set values instead of R markers
    for (let label of rLabel) {
        label.innerHTML = r.toString();
    }

    for (let label of rMinusLabel) {
        label.innerHTML = (-r).toString();
    }

    for (let label of rHalfLabel) {
        label.innerHTML = (r/2).toString();
    }

    for (let label of rMinusHalfLabel) {
        label.innerHTML = (-r/2).toString();
    }

}

export function drawNewPoint(x, y, r) {
    let svg = document.getElementById("graphSVG");

    let newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    if (checkStatus(x, y, r)) {
        newElement.setAttribute("fill", "green");
    } else {
        newElement.setAttribute("fill", "grey");
    }

    const centerX = 200;
    const centerY = 200;
    const scaleFactor = 100 / r;

    const scaledX = (x * scaleFactor) + centerX;
    const scaledY = (y * -scaleFactor) + centerY;

    newElement.setAttribute("cx", scaledX.toString());
    newElement.setAttribute("cy", scaledY.toString());
    newElement.setAttribute("r", "3");

    svg.appendChild(newElement);
}

export function safeNewDraw(xValues, y, r) {
    if (xValues.length === 0) {
        drawNewPoint(0, y, r)
    } else {
        xValues.forEach(x => drawNewPoint(x, y, r))
    }
}

export function safePreDraw(xValues, y, r) {
    if (xValues.length === 0) {
        drawPreview(0, y, r)
    } else {
        xValues.forEach(x => drawPreview(x, y, r))
    }
}