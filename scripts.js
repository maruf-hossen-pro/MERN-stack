let currentBalance = 0;

function showError(id, message) {
    let errorElem = document.getElementById(id + '-error');
    if (!errorElem) {
        errorElem = document.createElement('div');
        errorElem.id = id + '-error';
        errorElem.style.color = 'red';
        errorElem.style.fontSize = '0.9em';
        errorElem.style.marginTop = '2px';
        document.getElementById(id).insertAdjacentElement('afterend', errorElem);
    }
    errorElem.textContent = message;
}

function clearError(id) {
    const errorElem = document.getElementById(id + '-error');
    if (errorElem) errorElem.textContent = '';
}

function validateInput(id) {
    const value = document.getElementById(id).value;
    if (value === '' || isNaN(value) || parseFloat(value) < 0) {
        showError(id, 'Please enter a valid non-negative number');
        return false;
    } else {
        clearError(id);
        return true;
    }
}

function calculate() {
    const ids = ['income', 'food', 'rent', 'clothes'];
    let valid = true;
    ids.forEach(id => {
        if (!validateInput(id)) valid = false;
    });
    if (!valid) {
        document.getElementById('total-expenses').textContent = 0;
        document.getElementById('balance').textContent = 0;
        document.getElementById('saving-amount').textContent = 0;
        document.getElementById('remaining-balance').textContent = 0;
        return;
    }

    const income = parseFloat(document.getElementById('income').value) || 0;
    const food = parseFloat(document.getElementById('food').value) || 0;
    const rent = parseFloat(document.getElementById('rent').value) || 0;
    const clothes = parseFloat(document.getElementById('clothes').value) || 0;

    const totalExpenses = food + rent + clothes;
    if (totalExpenses > income) {
        showError('food', '');
        showError('rent', '');
        showError('clothes', '');
        showError('income', 'Expenses exceed income');
        document.getElementById('total-expenses').textContent = 0;
        document.getElementById('balance').textContent = 0;
        document.getElementById('saving-amount').textContent = 0;
        document.getElementById('remaining-balance').textContent = 0;
        return;
    } else {
        clearError('income');
    }

    currentBalance = income - totalExpenses;

    document.getElementById('total-expenses').textContent = totalExpenses;
    document.getElementById('balance').textContent = currentBalance;
    document.getElementById('saving-amount').textContent = 0;
    document.getElementById('remaining-balance').textContent = currentBalance;
}

function calculateSaving() {
    if (!validateInput('save')) {
        document.getElementById('saving-amount').textContent = 0;
        document.getElementById('remaining-balance').textContent = currentBalance;
        return;
    }
    const savePercent = parseFloat(document.getElementById('save').value) || 0;
    if (savePercent < 0 || savePercent > 100) {
        showError('save', 'Enter a percentage between 0 and 100');
        document.getElementById('saving-amount').textContent = 0;
        document.getElementById('remaining-balance').textContent = currentBalance;
        return;
    } else {
        clearError('save');
    }
    const savingAmount = (currentBalance * savePercent) / 100;
    if (savingAmount > currentBalance) {
        showError('save', 'Saving amount exceeds balance');
        document.getElementById('saving-amount').textContent = 0;
        document.getElementById('remaining-balance').textContent = currentBalance;
        return;
    }
    document.getElementById('saving-amount').textContent = savingAmount.toFixed(2);
    document.getElementById('remaining-balance').textContent = (currentBalance - savingAmount).toFixed(2);
}
