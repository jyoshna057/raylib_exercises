const cretaingObject = require("./cretaingObject.js");

function loop() {
    while (cretaingObject.running()) {
        cretaingObject.draw();
    }
}

function main() {
    cretaingObject.setup();
    loop();
    cretaingObject.teardown();
}

main();