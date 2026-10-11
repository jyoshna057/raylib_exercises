const r = require("raylib");
const screenWidth = 1000;
const screenHeight = 1000;
const plane = {
    x: 100,
    y: 500,
    width: 800,
    height: 200,
};

const circle1 = {
    x: plane.width * 0.3,
    y: plane.y + plane.height,
};
const circle2 = {
    x: plane.width * 0.9,
    y: plane.y + plane.height,
};
const window = {
    x: plane.width * 0.55,
    y: plane.y,
};
const start = {
    x: window.x,
    y: window.y,
};
const end = {
    x: window.x,
    y: window.y - 150,
};

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "first raylib program");
    r.SetTargetFPS(50);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawRectangleRounded(plane, 2, 8, r.RED);
    r.DrawRectangleRoundedLines(plane, 2, 8, 5, r.BLACK);
    r.DrawCircleV(circle1, 70, r.BROWN);
    r.DrawCircleV(circle1, 35, r.GRAY);
    r.DrawCircleV(circle2, 70, r.BROWN);
    r.DrawCircleV(circle2, 35, r.GRAY);
    r.DrawCircleSector(window, 250, 90, 270, 15, r.RED);
    r.DrawCircleSector(window, 150, 90, 270, 10, r.BLUE);
    r.DrawLineEx(start, end, 5, r.BLACK);



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
