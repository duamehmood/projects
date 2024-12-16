
//   ------- Calendar -------

const dates = document.getElementById('dates');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const monthDisplay = document.querySelector('.month');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function generateCalendar(month, year) {
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();

    dates.innerHTML = '';
    monthDisplay.textContent = `${months[month]} ${year}`;

    let count = 0;
    while (count < firstDay) {
        const emptyCell = document.createElement('div');
        dates.appendChild(emptyCell);
        count++;
    }

    let day = 1;
    while (day <= lastDay) {
        const dateCell = document.createElement('div');
        dateCell.textContent = day;
        if (day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            dateCell.classList.add('today');
        }
        dates.appendChild(dateCell);
        day++;
    }
}

function toPreviousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
}

function toNextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
}

previous.addEventListener('click', toPreviousMonth);
next.addEventListener('click', toNextMonth);

generateCalendar(currentMonth, currentYear);


//    ------- Digital-Clock -------

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    document.getElementById('ampm').textContent = ampm;
}

setInterval(updateClock, 1000);
updateClock();