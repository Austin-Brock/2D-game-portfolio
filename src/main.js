import { k } from "./kaboomCtx";

k.loadSprite("spritesheet", "./spritsheet.png", {
    sliceX: 39,
    sliceY: 31,
    anims: {
        "idle-down": 936,
        "walk-down": { from: 936, to: 939, loop: true, speed: 8 },
        "idle-side": 975,
        "walk-side": { from: 975, to: 978, loop: true, speed: 8 },
        "idle-up": 1014,
        "walk-up": { from: 1014, to: 1017, loop: true, speed: 8 },
    }
})

k.loadSprite("map", "./map.pmg");

k.setBackground(k.Color.fromHex("#311047"));

k.scene("main", async () => {
    const mapData = await (await fetch(".map.json")).json() //used so map data is loaded first
    const layers=mapData.layers;
    const map = k.make([k.sprite("map"), k.pos(0), k.scale()]);
})

k.go("main")