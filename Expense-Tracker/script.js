
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
    let task = document.createElement("div");
    task.classList.add("p-3")
    task.classList.add("m-3")
    task.classList.add(selectedType)
    task.innerHTML = `<h4 class="pb-2">${title.value}</h4>
<p>Amount: $${amount.value}</p>
<p>Date: ${date}</p>
<p>Time: ${time}</p>`
    list.appendChild(task)

    if (selectedType == 'income') {
        total_income += Number.parseInt(amount.value)
        income.innerHTML = `$${total_income}`
    }
    if (selectedType == 'expense') {
        total_expense += Number.parseInt(amount.value)
        expense.innerHTML = `$${total_expense}`
    }

    // console.log("Button Clicked");
    // console.log('$', amount.value, " ", title.value, selectedType)

}