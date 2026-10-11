const r = require("raylib");
const d = require("./detector.js");
const s = require("./screenDimentions.js");
const f = require("./feildRanges.js");

let detector1 = {};
let detector2 = {};
let detector3 = {};
let p1 = {};
let p2 = {};
let p3 = {};
function setup() {

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(s.screenWidth, s.screenHeight, "first raylib program");
    r.SetTargetFPS(50);
    detector1 = d.detectordim(0, 0, (s.screenWidth / 2) - 30, 0, 4, 30, s.screenHeight);
    detector2 = d.detectordim(s.screenHeight - 100, 0, s.screenWidth - 30, s.screenWidth / 2, 4, 30, s.screenHeight);
    detector3 = d.detectordim(0, 0, s.screenHeight - 40, 0, 4, s.screenWidth, 40);
    p1 = f.particaldim(300, (s.screenWidth / 8) + 300, 100, s.screenHeight);
    p2 = f.particaldim(600, s.screenWidth / 20 + 600, s.screenWidth / 20, s.screenHeight);
    p3 = f.particaldim(250, 250 + 40, s.screenWidth, 40);

}

function update() {
    detector1.x = d.scannerupdate1(detector1);
    detector2.x = d.scannerupdate1(detector2);
    detector3.y = d.scannerupdate2(detector3);
}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);


    f.partical(p1.start, 0, p1.width, s.screenHeight);
    f.partical(0, p3.start, s.screenWidth, p3.height);
    f.partical(p2.start, 0, p2.width, s.screenHeight);

    const detectorColourChange1 = f.overlapping(detector1.width, detector1.x, p1.start, p1.end) ? r.RED : r.WHITE;
    const detectorColourChange2 = f.overlapping(detector2.width, detector2.x, p2.start, p2.end) ? r.RED : r.WHITE;
    const detectorColourChange = f.overlapping(detector3.height, detector3.y, p3.start, p3.end) ? r.RED : r.WHITE;

    f.scanner(detector1.x, detector1.y, detector1.width, s.screenHeight, detectorColourChange1);
    f.scanner(detector2.x, detector2.y, detector2.width, s.screenHeight,detectorColourChange2);
    f.scanner(detector3.x, detector3.y, s.screenWidth, detector3.height,detectorColourChange);
    r.EndDrawing();
}

function running() {
    return !r.WindowShouldClose();
}

function teardown() {
    r.CloseWindow();
}


module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};








