// step 1: add event listner in the btn
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step 2 :get the input amount from the input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

// step 3:get the current withdraw
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawString);
// step 4 : add amount of current withdraw

const currentWithdarwTotal = newWithdrawAmount + previousWithdrawTotal;
withdrawTotalElement.innerText = currentWithdarwTotal;
// step 5 ; Get balance current toal 

const balanceTotalelement = document.getElementById('balance-total');
const previousBalanceString = balanceTotalelement.innerText;
const previousBalancetal = parseFloat(previousBalanceString);

// step 6: caculate the total balance
const  currentTotalWithdrawBlance = previousBalancetal - currentWithdarwTotal;
if(currentTotalWithdrawBlance > 0 ){
    balanceTotalelement.innerText = currentTotalWithdrawBlance;
}
else{
    alert('Sorry Do not have enough Balance');
}
// step 7 : clear withdraw field
withdrawField.value = '';

})