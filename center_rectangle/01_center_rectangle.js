const r = require("raylib");
const screenWidth = 400;
const screenHeight = 300;
const length = 200;
const breath = 100;
let x = result(screenWidth, length);
let y = result(screenHeight, breath);

function setup() {
    r.InitWindow(screenWidth, screenHeight, "first raylib program");
    r.SetTargetFPS(60);
}
function update() {
    if (x > screenWidth) {
        x = (-x) + 1
    }
    x = x + 1;
}
function result(a, b) {
    return ((a / 2) - (b / 2));
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangle(x, y, length, breath, r.RED);
    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}


function main() {
    setup();
    loop();
    r.CloseWindow();
}


main();

