const r = require("raylib");
const geometry = require("./geometry");
const wb = 400;
const wl = 300;
const l1 = 200;
const b1 = 100;
const l2 = 100;
const b2 = 70;
let x1 = geometry.result1(wb, l1);
let y1 = geometry.result1(wl, b1);
let x2 = geometry.result1(wb, l2);
let y2 = geometry.result1(wl, b2);



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
    return (!r.WindowShouldClose());
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