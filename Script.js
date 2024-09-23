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

// Display current date and time
const dateElement = document.createElement('p');
dateElement.textContent = `Date: ${new Date().toLocaleString('en-US', { year: 2145 })}`;
document.body.insertBefore(dateElement, document.querySelector('.hero'));
