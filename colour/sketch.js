const r = require("raylib");
const screenWidth = 800;
const screenHeight = 700;
const length = 300;
const breadth = 200;
const blue = {
    r: 50,
    g: 100,
    b: 220,
    a: 255,
};
const glass = {
    r: 255,
    g: 50,
    b: 50,
    a: 120,
};

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "first raylib program");
    r.SetTargetFPS(50);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(40, 60, length, breadth, blue);
    r.DrawRectangle(30, 40, length, breadth, glass);
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
    draw,
    teardown,
};

