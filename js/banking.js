//  deposit and withdraw hanlde with event
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get amount deposit
    const depositInput = document.getElementById('deposit-amount');
    const depositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(depositAmountText);
    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const perviousDepositAmountText = depositTotal.innerText;
    const perviousDepositAmount = parseFloat(perviousDepositAmountText);

    const newDepositTotal = perviousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // update blance total
    const blanceTotal = document.getElementById('blance');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText);
    const newBlanceTotal = previousBlanceTotal + newDepositAmount;
    blanceTotal.innerText = newBlanceTotal;
    // clear the input deposit field
    depositInput.value = '';
});

// handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmountText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);

    const newwithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newwithdrawTotal;

    // update blance total
    const blanceTotal = document.getElementById('blance');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText);
    const newBlanceTotal = previousBlanceTotal - newWithdrawAmount;
    blanceTotal.innerText = newBlanceTotal;

    // clear the input withdraw field
    withdrawInput.value = '';
})