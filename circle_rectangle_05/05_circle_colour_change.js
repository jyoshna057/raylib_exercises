const r = require("raylib");
const width = 400;
const height = 300;
const radius = 10;
const x1 = 100;
const y1 = 150;
const x2 = 250;
const y2 = 100;
const x3 = 350;
const y3 = 280;
const sx1 = x1 + y1;
const sx2 = x2 + y2;
const sx3 = x3 + y3;
let tx1 = root((square(sx1)) + (square(sx2)));
let tx2 = root((square(sx1) + square(sx3)));

function setup() {
    r.InitWindow(width, height, "first raylib program");
    r.SetTargetFPS(50);
}

function square(x) {
    return (x ** 2);
}
function root(f, g) {
    return (Math.sqrt(f + g));
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawCircle(x1, y1, radius, r.RED);
    r.DrawCircle(x2, y2, radius, r.BLUE);
    r.DrawCircle(x3, y3, radius, r.GREEN);
    distance();
    r.EndDrawing();


}

function loop() {
    while (!r.WindowShouldClose()) {
        draw();
    }
}


function main() {
    setup();
    loop();
    r.CloseWindow();
}
main();