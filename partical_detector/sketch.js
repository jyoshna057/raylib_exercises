const r = require("raylib");
const geometry = require("./geometry");

const screenWidth = 800;
const screenHeight = 500;
const firstlength = screenHeight;
const scannerBreadth1 = 30;
const particalBreadth1 = screenWidth / 8;
const particalBreadth2 = screenWidth / 20;
const scannerBreadth2 = 30;
const particalBreadth3 = screenWidth;
const scannerBreadth3 = screenWidth;
const secondHeight = 40;
let x1 = 0;
let y1 = 0;
let x2 = 300;
let x3 = 600;
let x4 = 400;
let x5 = 0;
let x6 = 0;
let y3 = 0;
let y2 = 250;
let rightside1 = (x2 + particalBreadth1) - scannerBreadth1;
let leftside1 = 0;
let rightside2 = screenWidth - scannerBreadth2;
let leftside2 = x2 + particalBreadth1;
let topside = 0;
let bottomside = screenHeight - secondHeight;
let move1 = 5;
let move2 = 5;
let move3 = 1;
let scannercolour1;
let scannercolour2;
let scannercolour3;
function setup() {
    r.InitWindow(screenWidth, screenHeight, "first raylib program");
    r.SetTargetFPS(50);
}
function movement2() { //(x4, rightside2, move2, leftside2) {
    if (x4 === rightside2) {
        move2 = -5;
    }

    if (x4 === leftside2) {
        move2 = +5;
    }
    x4 = x4 + move2;

}
function movement1() { //(x1, rightside1, move1, leftside1) {
    if (x1 === rightside1) {
        move1 = -5;
    }

    if (x1 === leftside1) {
        move1 = +5;
    }
    x1 = x1 + move1;

}
function movement3() {
    if (y3 === bottomside) {
        move3 = -1;
    }

    if (y3 === topside) {
        move3 = +1;
    }
    y3 = y3 + move3;

}


function update() {
    movement1();//x1, rightside1, move1, leftside1, 1);
    movement2(); //x4, rightside2, move2, leftside2, 2);
    movement3();
    // if (x1 === rightside) {
    //     move = -1;
    // }

    // if (x1 === leftside) {
    //     move = 1;
    // }
    // x1 = x1 + move;
}


function Colourdetector(e) {
    return (e ? r.RED : r.WHITE);
}

function draw() {
    let range1 = x1 + scannerBreadth1;
    let range2 = x4 + scannerBreadth2;
    let range3 = y3 + secondHeight;
    let particalRange1 = x2 + particalBreadth1;
    let particalRange2 = x3 + particalBreadth2;
    let particalRange3 = y2 + secondHeight;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(x2, y1, particalBreadth1, firstlength, r.SKYBLUE);
    r.DrawRectangle(x5, y2, particalBreadth3, secondHeight, r.SKYBLUE);
    r.DrawRectangle(x3, y1, particalBreadth2, firstlength, r.SKYBLUE);
    scannercolour1 = geometry.ColourChange1(range1, x2, x1, particalRange1);
    scannercolour2 = geometry.ColourChange1(range2, x3, x4, particalRange2);
    scannercolour3 = geometry.ColourChange1(range3, y2, y3, particalRange3);
    let colourfirst = Colourdetector(scannercolour1);
    let coloursecond = Colourdetector(scannercolour2);
    let colourthird = Colourdetector(scannercolour3);
    r.DrawRectangle(x1, y1, scannerBreadth1, firstlength, colourfirst);
    r.DrawRectangle(x4, y1, scannerBreadth1, firstlength, coloursecond);
    r.DrawRectangle(x6, y3, scannerBreadth3, secondHeight, colourthird);
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