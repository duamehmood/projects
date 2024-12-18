

const dates = document.getElementById('dates');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const yearDrop = document.getElementById('yearDrop');
const monthDrop = document.getElementById('monthDrop');
const currentDateDisplay = document.getElementById('current-date');

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function generateCalendar(month, year) {
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();

    dates.innerHTML = '';

    const today = new Date();
    currentDateDisplay.textContent = `${months[month]} ${year}`;


    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        dates.appendChild(emptyCell);
    }


    for (let day = 1; day <= lastDay; day++) {
        const dateCell = document.createElement('div');
        dateCell.textContent = day;

        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dateCell.classList.add('today');
        }

        dates.appendChild(dateCell);
    }
}

function toPreviousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
        updateYearDrop();
    }
    updateMonthDrop();
    generateCalendar(currentMonth, currentYear);
}

function toNextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
        updateYearDrop();
    }
    updateMonthDrop();
    generateCalendar(currentMonth, currentYear);
}

function yearDropdown() {
    const startYear = 1950;
    const endYear = 2050;

    for (let year = startYear; year <= endYear; year++) {
        const opt = document.createElement('option');
        opt.value = year;
        opt.textContent = year;
        yearDrop.appendChild(opt);
    }
    yearDrop.value = currentYear;
}


function monthDropdown() {

    for (let i = 0; i < months.length; i++) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = months[i];
        monthDrop.appendChild(opt);
    }
    monthDrop.value = currentMonth;
}

function updateYearDrop() {
    yearDrop.value = currentYear;
}

function updateMonthDrop() {
    monthDrop.value = currentMonth;
}

yearDrop.addEventListener('change', () => {
    currentYear = parseInt(yearDrop.value, 10);
    generateCalendar(currentMonth, currentYear);
});

monthDrop.addEventListener('change', () => {
    currentMonth = parseInt(monthDrop.value, 10);
    generateCalendar(currentMonth, currentYear);
});


previous.addEventListener('click', toPreviousMonth);
next.addEventListener('click', toNextMonth);


yearDropdown();
monthDropdown();
generateCalendar(currentMonth, currentYear);
