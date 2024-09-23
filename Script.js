const ticker = document.getElementById('ticker');
let newsItems = [
    "Rival gangs clash in Sector 12",
    "Reality Prism suspected beneath Tir Val'run ruins",
    "CEO of TetraCorp announces new AI initiative"
];

let newsIndex = 0;
setInterval(() => {
    ticker.textContent = newsItems[newsIndex];
    newsIndex = (newsIndex + 1) % newsItems.length;
}, 3000);
