//------------------------------------------Nested Destructuring-------------------------------------------------------------------------------

const songs = [
    { name: "Lucky You", singer: "Joyner", duration: 4.34 },
    { name: "Just Like You", singer: "NF", duration: 3.23 },
    { name: "Humble Singer", singer: "Kendrick Lamar", duration: 2.33 },
    { name: "Old Town Road", singer: "Lil Nas X ", duration: 1.43 },
    { name: "Cold Sholder", singer: "Central Cee ", duration: 5.23 },
];

const [, , , { singer: s }] = songs;

console.log(s);
