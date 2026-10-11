const r = require("raylib");
const screenWidth = 1000;
const screenHeight = 1000;
const position = {
    x: 500,
    y: 500,
};

const gray = {
    r: 0, g: 0, b: 0, a: 100,
};
function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "first raylib program");
    r.SetTargetFPS(50);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawCircleV(position, 300, r.RED);
    r.DrawCircleV(position, 150, r.ORANGE);
    r.DrawCircleV(position, 75, r.YELLOW);
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
