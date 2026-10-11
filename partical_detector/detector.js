const s = require("./screenDimentions.js");

function detectordim(x, y, upper, lower, velocity, width, height, detectorEnd) {
    return {
        x,
        y,
        upper,
        lower,
        velocity,
        width,
        height,
        detectorEnd
    };
}

function isOutOfBoundary(dx, end, start) {
    return (dx >= end) || (dx < start);
}

function changeDirection(dx, end, start, velocity) {
    return isOutOfBoundary(dx, end, start) ? -velocity : velocity;
}

function scannerupdate1(detector) {
    detector.velocity = changeDirection(detector.x, detector.upper, detector.lower, detector.velocity);
    return detector.x + detector.velocity;
} function scannerupdate2(detector) {
    detector.velocity = changeDirection(detector.y, detector.upper, detector.lower, detector.velocity);
    return detector.y + detector.velocity;
}


module.exports = {
    detectordim, scannerupdate1, scannerupdate2,
}





















