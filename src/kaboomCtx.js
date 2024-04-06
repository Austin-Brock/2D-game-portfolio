import kaboom from "kaboom";

export const k = kaboom({
    global: false,
    touchTomouse: true,
    canvas: document.getElementById("game"),
});