// step 1:add eventlistener to the button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step 2: Get the deposit amount from input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    if(isNaN(newDepositAmount)){
        alert('insert valid number');
        return;
    }

    // step 3: get the  current doposit
    const depositTotalElement = document.getElementById('diposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 4: add the amount to deposit
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    depositTotalElement.innerText = currentDepositTotal;

    // step 5 ; Get balance current toal 
    const balanceTotalelement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalelement.innerText;
    const previousBalancetal = parseFloat(previousBalanceString);
    
    // step  6 : calculate current totl balance
    const CurrentBalncetotal = previousBalancetal + newDepositAmount;
    balanceTotalelement.innerText = CurrentBalncetotal;

// step 7: Clear the deposit field
depositField.value = '';
})