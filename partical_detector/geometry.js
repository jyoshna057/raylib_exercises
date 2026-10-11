r = require("raylib");
//function overlapping(a, c, b, d) {
//    return ((a >= b) && (c <= d));
//}
function overlapping(detectorWidth, detectorStart, particleStart, particleEnd) {
    const detectorEnd = detectorWidth + detectorStart; 
    console.log((detectorStart <= particleEnd));
    return ((detectorEnd >= particleStart) && (detectorStart <= particleEnd));
}


module.exports = {
    overlapping,
}