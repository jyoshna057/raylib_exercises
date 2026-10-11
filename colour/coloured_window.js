const r = require("raylib");
const screenWidth = 800;
const screenHeight = 700;
const rect = {
    x: 300,
    y: 200,
    width: 300,
    height: 450,
    endheight: 500,
};
const start1 = {
    x: (rect.x + rect.width / 2),
    y: rect.y,
};
const end1 = {
    x: (rect.x + rect.width / 2),
    y: rect.y + rect.height,
};
const start2 = {
    x: rect.x,
    y: (rect.y + rect.height / 2),
};
const end2 = {
    x: rect.x + rect.width,
    y: rect.y + rect.height / 2
};

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "first raylib program");
    r.SetTargetFPS(50);
}


function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    //r.DrawRectangleLines(rect.x, rect.y, rect.width, rect.height, r.BROWN);
    r.DrawRectangleRoundedLines(rect, 0.2, 8, 10, r.BLUE);
    r.DrawLineEx(start1, end1, 30, r.BLACK);
    r.DrawLineEx(start2, end2, 30, r.BLACK);
    r.DrawCircleSector(start1, 150, 90, 270, 100, r.BLUE);

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
