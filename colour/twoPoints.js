const r = require("raylib");
const screenWidth = 1000;
const screenHeight = 1000;
const point1 = {
    x: 100,
    y: 800,
};
const point2 = {
    x: 800,
    y: 100,
};

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "first raylib program");
    r.SetTargetFPS(50);
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawCircleV(point1, 30, r.BLUE);
    r.DrawCircleV(point2, 30, r.BLUE);
    r.DrawLineEx(point1, point2, 5, r.BLACK);
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
