const r = require("raylib");
const screenWidth = 800;
const screenHeight = 700;
const targetPosition = {
    x: 400,
    y: 350,
};
function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "first raylib program");
    r.SetTargetFPS(50);
}
update(){

}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawCircle(targetPosition.x, targetPosition.y, 280, r.WHITE);
    r.DrawCircle(targetPosition.x, targetPosition.y, 220, r.BLACK);
    r.DrawCircle(targetPosition.x, targetPosition.y, 150, r.WHITE);
    r.DrawCircle(targetPosition.x, targetPosition.y, 100, r.BLACK);
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
