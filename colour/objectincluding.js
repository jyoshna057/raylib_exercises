const r = require("raylib");
const screenWidth = 800;
const screenHeight = 700;
const button = {
    position: {
        x: 50,
        y: 50,
    },
    size: {
        x: 50,
        y: 50,
    },
};
const button2 = {
    position: {
        x: 80,
        y: 80,
    },
    size: {
        x: 700,
        y: 600,
    },
};

const button3 = {
    position: {
        x: 50,
        y: 150,
    },
    size: {
        x: 50,
        y: 50,
    },
};

const button4 = {
    position: {
        x: 50,
        y: 250,
    },
    size: {
        x: 50,
        y: 50,
    },
};





const fillup = {
    r: 0,
    g: 0,
    b: 0,
    a: 255,
}
const colour = {
    r: 0,
    g: 0,
    b: 0,
    a: 100,
};
const colour1 = {
    r: 155,
    g: 155,
    b: 155,
    a: 255,


}


function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "first raylib program");
    r.SetTargetFPS(50);
}


function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    //r.DrawRectangleLines(button.position.x, button.position.y, button.size.x, button.size.y, colour);
    r.DrawRectangleV(button.position, button.size, fillup);
    r.DrawRectangleV(button2.position, button2.size, r.SKYBLUE);
    r.DrawRectangleV(button3.position, button3.size, colour);
    r.DrawRectangleV(button4.position, button4.size, colour1);


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
