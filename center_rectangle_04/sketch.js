const r = require("raylib");
const geomerty = require("./geomerty");


const width = 400;
const height = 300;
const radius = 10;
const x1 = 100;
const y1 = 150;
const x2 = 250;
const y2 = 100;
const x3 = 350;
const y3 = 280;
let square1 = geomerty.square(x2, x1, y2, y1);
let square2 = geomerty.square(x3, x1, y3, y1);
let distance1 = geomerty.distance(square1);
let distance2 = geomerty.distance(square2);


function setup() {
    r.InitWindow(width, height, "first raylib program");
    r.SetTargetFPS(50);
}


function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawCircle(x1, y1, radius, r.RED);
    r.DrawCircle(x2, y2, radius, r.BLUE);
    r.DrawCircle(x3, y3, radius, r.GREEN);
    if (distance1 > distance2) {
        r.DrawLine(x1, y1, x3, y3, r.BLACK);
    } else {
        r.DrawLine(x1, y1, x2, y2, r.BLACK);
    }

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