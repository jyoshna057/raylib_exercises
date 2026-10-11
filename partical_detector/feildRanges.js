const s = require("./screenDimentions.js");
const d = require("./detector.js");
const sketch = require("./sketch");
const r = require("raylib");


function particaldim(start, end, width, height) {
    return {
        start,
        end,
        width,
        height,
    };
}
function partical(x, y, width, height) {
    r.DrawRectangle(x, y, width, height, r.SKYBLUE);
}
function scanner(x, y, width, height, colour) {
    r.DrawRectangle(x, y, width, height, colour);
}
function overlapping(detectorWidth, detectorStart, particleStart, particleEnd) {
    const detectorEnd = detectorWidth + detectorStart; 
    return ((detectorEnd >= particleStart) && (detectorStart <= particleEnd));
}
module.exports = {
    particaldim, partical, scanner,overlapping,

}
