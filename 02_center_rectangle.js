const r = require("raylib");
const wb = 400;
const wl = 300;
const l1 = 200;
const b1 = 100;
const l2 = 100;
const b2 = 70;


function setup() {
    r.InitWindow(wb, wl, "first raylib program");
    r.SetTargetFPS(50);

}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(result1(wb, l1), result1(wl, b1), l1, b1, r.WHITE);
    r.DrawRectangle(result1(wb, l2), result1(wl, b2), l2, b2, r.BLACK);
    r.EndDrawing();
}
function result1(a, b) {
    return ((a / 2) - (b / 2));
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