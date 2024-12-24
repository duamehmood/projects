
let income = document.getElementById("total-income")
let expense = document.getElementById("total-expense")
const title = document.getElementById("title")
const amount = document.getElementById("amount")
const types = document.getElementsByName('type')
const btn = document.getElementById('add')
let list = document.getElementById('list')
let total_income = 0
let total_expense = 0

btn.addEventListener('click', addExpense)

function addExpense() {
    let selectedType = null
    types.forEach((type) => {
        if (type.checked) {
            selectedType = type.value;
        }
    })
    if (title.value == '' || amount.value == "" || selectedType == null) {
        alert("Please fill all info")
        return;
    }
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();
    const expenseItem = {
        title: title.value,
        amount: amount.value,
        type: selectedType,
        date: date,
        time: time
    }
    let expenses = JSON.parse(localStorage.getItem('expenses'))
    if (expenses) {
        expenses.push(expenseItem)
    }
    else {
        expenses = [expenseItem]
    }
    localStorage.setItem('expenses', JSON.stringify(expenses))
    displayExpense(expenseItem)

    title.value = ""
    amount.value = ""
    types.forEach(type => type.checked = false)

}

function loadExpenses() {
    const expenses = JSON.parse(localStorage.getItem('expenses'))
    if (expenses) {
        expenses.forEach((expense) => {
            displayExpense(expense)
        })
    }
}

function displayExpense(data) {
    let task = document.createElement("div");
    task.classList.add("p-3")
    task.classList.add("m-3")
    task.classList.add(data.type)
    task.innerHTML = `<h4 class="pb-2">${data.title}</h4>
    <p>Amount: $${data.amount}</p>
    <p>Date: ${data.date}</p>
    <p>Time: ${data.time}</p>
    <button class=delete-btn oncLick='deleteItem("${data.date}", "${data.time}")'>x</button>`
    list.appendChild(task)

    if (data.type == 'income') {
        total_income += Number.parseInt(data.amount)
        income.innerHTML = `$${total_income}`
    }
    if (data.type == 'expense') {
        total_expense += Number.parseInt(data.amount)
        expense.innerHTML = `$${total_expense}`
    }
}
loadExpenses()

function deleteItem(date, time) {

    let expenses = JSON.parse(localStorage.getItem('expenses'));
    const updatedExpenses = expenses.filter(expense => !(expense.date === date && expense.time === time));
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    const items = document.querySelectorAll('.p-3.m-3');
    items.forEach(item => {
        const itemDate = item.querySelector('p:nth-of-type(2)').textContent.split(': ')[1];
        const itemTime = item.querySelector('p:nth-of-type(3)').textContent.split(': ')[1];
        if (itemDate === date && itemTime === time) {
            item.remove();
        }
    });

    // Resetting

    total_income = 0;
    total_expense = 0;
    updatedExpenses.forEach(expense => {
        if (expense.type === 'income') {
            total_income += Number.parseInt(expense.amount);
        } else if (expense.type === 'expense') {
            total_expense += Number.parseInt(expense.amount);
        }
    });
    income.innerHTML = `$${total_income}`;
    expense.innerHTML = `$${total_expense}`;

}



