
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmmountText = inputField.value;
    const ammountValue = parseFloat(inputAmmountText);
    return ammountValue;
}


document.getElementById('calculate-btn').addEventListener('click', function () {

    const monthlyIncome = getInputValue('Monthly-income');
    const foodExpense = getInputValue('food-expense');
    const rentExpense = getInputValue('rent-expense');
    const clothesExpense = getInputValue('clothes-expense');

    const totalExpenses = document.getElementById('total-expenses');

    const totalExpense = foodExpense + rentExpense + clothesExpense;
    totalExpenses.innerText = totalExpense;


    if (monthlyIncome > 0) {
        const balance = document.getElementById('balance');
        balance.innerText = monthlyIncome - totalExpense;
    }

    else {
        console.log(alert('plz input valid number'));
    }

})


