const ticker = document.getElementById('ticker');
const newsItems = [
    "Rival gangs clash in Sector 12",
    "Reality Prism suspected beneath Tir Val'run ruins",
    "CEO of TetraCorp announces new AI initiative"
];

let newsIndex = 0;

// Ticker functionality
setInterval(() => {
    ticker.textContent = newsItems[newsIndex];
    newsIndex = (newsIndex + 1) % newsItems.length;
}, 3000);

// Display and continuously update the current date and time
const dateElement = document.createElement('p');
document.body.insertBefore(dateElement, document.querySelector('.hero'));

function updateDateTime() {
    const now = new Date();
    dateElement.textContent = `Date: ${now.getDate()}/${now.getMonth() + 1}/2145 - Time: ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
}

// Initial call and update every second
updateDateTime();
setInterval(updateDateTime, 1000);
