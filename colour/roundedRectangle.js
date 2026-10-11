const r = require("raylib");
const screenWidth = 800;
const screenHeight = 700;
const panel = {
    x: 40,
    y: 50,
    width: 400,
    height: 300,
};

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "first raylib program");
    r.SetTargetFPS(50);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawRectangleRoundedLines(panel, 500, 2, 10, r.BLACK);
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
