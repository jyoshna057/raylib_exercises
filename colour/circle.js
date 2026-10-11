const r = require("raylib");
const screenWidth = 800;
const screenHeight = 700;
// 

// 

const spaceship = {
    position: {
        x: 100,
        y: 120,
    },

    size: {
        x: 60,
        y: 30,
    },

    color: r.BLACK,
};

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "first raylib program");
    r.SetTargetFPS(50);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    //r.DrawLineEx(start, end, 10, r.BLACK);
    //r.DrawRectangleRoundedLines(rect, 0.2, 20, 10, r.BLUE);
    // r.DrawRectangleGradientV(
    //     panel.x,
    //     panel.y,
    //     panel.width,
    //     panel.height,
    //     r.YELLOW,
    //     r.BLUE,
    //     // r.RED,
    // r.PINK,
    // r.GREEN,
    // r.ORANGE,
    // r.PURPLE,
    // );

    // r.DrawCircleSector(button, 100, 20, 30, 40, r.RED);
    //r.DrawCircleSector(button, 120, 360, 0, 5, r.BLUE);
    //r.DrawRectangleRoundedLines(rect, 0.2, 50, 50, r.BLACK);



    r.DrawRectangleV(spaceship.position, spaceship.size, spaceship.color);
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
