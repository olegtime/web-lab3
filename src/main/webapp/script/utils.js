export function getXValues() {
    let xValues = []
    if (document.getElementById('hitInfo:x-4').checked === true) {
        xValues.push(-4)
    }
    if (document.getElementById('hitInfo:x-3').checked === true) {
        xValues.push(-3)
    }
    if (document.getElementById('hitInfo:x-2').checked === true) {
        xValues.push(-2)
    }
    if (document.getElementById('hitInfo:x-1').checked === true) {
        xValues.push(-1)
    }
    if (document.getElementById('hitInfo:x0').checked === true) {
        xValues.push(0)
    }
    if (document.getElementById('hitInfo:x1').checked === true) {
        xValues.push(1)
    }
    if (document.getElementById('hitInfo:x2').checked === true) {
        xValues.push(2)
    }
    if (document.getElementById('hitInfo:x3').checked === true) {
        xValues.push(3)
    }
    if (document.getElementById('hitInfo:x4').checked === true) {
        xValues.push(4)
    }

    return xValues
}

export function checkStatus(x, y, r) {
    if (x >= 0) {
        return (y >= 0) ? (x <= r) && (y <= r / 2) : Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2);
    } else {
        return (y >= 0) ? false : -(x + y) <= (r / 2);
    }
}