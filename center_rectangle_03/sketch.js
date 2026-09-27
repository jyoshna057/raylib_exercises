
const r = require("raylib");
const geometry = require("./geometry");


const wb = 400;
const wl = 300;
const l1 = 250;
const b1 = 100;
const l2 = l1 * 0.5;
const b2 = b1 * 0.5;

const x1 = geometry.result1(wb, l1);
const y1 = geometry.result1(wl, b1);
const x2 = geometry.result1(wb, l2);
const y2 = geometry.result1(wl, b2);



function setup() {
    r.InitWindow(wb, wl, "first raylib program");
    r.SetTargetFPS(50);
}


function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(x1, y1, l1, b1, r.WHITE);
    r.DrawRectangle(x2, y2, l2, b2, r.BLACK);
    r.EndDrawing();

}


function running() {
    return (!r.WindowShouldClose())
}


function teardown() {
    r.CloseWindow()

}

module.exports = {
    running,
    setup,
    draw,
    teardown,
};