const d1 = require("./d1.js");
const d2 = require("./d2.js");
const d3 = require("./d3.js");
const detectorWidth = 30;
const height2 = 40;
const detectorEnd1 = d1.detectorX + detectorWidth;
const detectorEnd2 = d2.detectorX + detectorWidth;
const detectorEnd3 = d3.detectorY + height2;


module.exports = {
    detectorEnd1, detectorEnd2, detectorEnd3, detectorWidth, height2,
}