const r = require("raylib");
const geometry = require("./geometry");


const screenWidth = 400;
const screenHeight = 300;
const length = 200;
const breath = 100;


let x = geometry.result(screenWidth, length);
let y = geometry.result(screenHeight, breath);


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

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangle(x, y, length, breath, r.RED);
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
    update,
    draw,
    teardown,
};