const r = require("raylib");
const geometry = require("./geometry");
const width = 400;
const height = 300;
const radius1 = 30;
const radius2 = 40;
const x1 = 100;
const y1 = 150;
const x2 = 99;
const y2 = 170;
let sqaure1 = geometry.sqaure(x2, x1, y2, y1);
let distance1 = geometry.distance(sqaure1);
let colour = r.BLACK;

function setup() {
    r.InitWindow(width, height, "first raylib program");
    r.SetTargetFPS(50);
}

function running() {
    return (!r.WindowShouldClose());
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    if (distance1 <= radius1 + radius2) {
        colour = r.RED;
    } else {
        colour = r.BLACK;
    }
    r.DrawCircle(x1, y1, radius1, colour);
    r.DrawCircle(x2, y2, radius2, colour);
    r.EndDrawing();

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