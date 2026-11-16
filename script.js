let score = 8;
const result = document.querySelector("#result");
const runBtn = document.querySelector("#runBtn");

runBtn.addEventListener("click", function () {
    result.textContent = "No badge earned yet.";
    if (score >= 5) {
        result.textContent = "Badge unlocked!";
    }
});

runBtn.addEventListener("click", function () {
    if (score >= 9) {
        result.textContent = "Expert investigator";
    } else if (score >= 5) {
        result.textContent = "Junior investigator";
    } else {
        result.textContent = "Keep practicing";
    }
});
let hasPass = true;

runBtn.addEventListener("click", function () {
    const message = hasPass
    ? "Access granted"
    : "Access denied";
    result.textContent = message;
});
let clueType = "key";

runBtn.addEventListener("click", function() {
    let message;
    switch (clueType) {
        case "key":
            message = "Check the locked cabinet.";
            break;
            case "note":
                message = "Read the handwritten clue.";
                break;
                default:
                    message = "unknown evidence type.";
    }
    result.textContent = message;
});

let hasKey = true;
let doorLocked = true;

runBtn.addEventListener("click", function () {
    const canOpen = hasKey === true; 
    result.textContent = "Can open: " + canOpen;
    console.log("Door locked?", doorLocked);
});

let hasCode = false;

runBtn.addEventListener("click", function () {
    const canEnter = (hasKey || hasCode) && doorLocked;
    result.textContent = canEnter
    ? "You can unlock the door."
    : "You cannot unlock the door.";
});