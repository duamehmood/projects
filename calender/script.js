const dates = document.getElementById('dates');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const currentDateDisplay = document.getElementById('current-date');
const monthDisplay = document.querySelector('.month');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function generateCalendar(month, year) {
    const firstDay = new Date(year, month, 1).getDay(); 

    const lastDay = new Date(year, month + 1, 0).getDate(); 

    dates.innerHTML = ''; 

    const today = new Date();
        const formattedDate = `${months[month]} ${year}  (Today-
        ${today.getDate()})
       `;
        currentDateDisplay.textContent = formattedDate;
    
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

// for(var i=1950;i<=2050;i++){
//     const opt = document.createElement('option');
//     opt.innerText = i
//     opt.value  = i
//     year.appendChild(opt);
// }



 