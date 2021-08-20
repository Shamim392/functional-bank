/* function doubleleft(num){
    const result = num * 2;
    return result;
}
const first = doubleleft(5);
const second = doubleleft(7);
*/

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    
    // clean input field
    inputField.value = '';
    return amountValue;
}

//deposit and withdraw function

function updateTotalField(totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance(){
    
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    
    return previousBalanceTotal;
}

//upgrade balance function
function updateBalance(amount,isAdd){
    const balanceTotal = document.getElementById('balance-total');
    /*
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    */
   const previousBalanceTotal = getCurrentBalance()
    if(isAdd== true){
        balanceTotal.innerText = previousBalanceTotal + 
        amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal -
        amount;
    }
}

document.getElementById('deposit-button').addEventListener('click',function(){
    /*const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    */
    
    // get current deposit
    /*
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText =depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
    */

    // upgrade balance
    /*
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText =balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;

    */
    const depositAmount = getInputValue('deposit-input');
    
    if(depositAmount > 0 ){
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
    


});
// withdraw balance
document.getElementById('withdraw-button').addEventListener('click',function(){
  /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText =withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    */
    //set withdraw amount
    /*
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    */
    
    // upgrade balance
    /*
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - 
    withdrawAmount;
    */
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance =getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('You cannot withdraw more than your current balance');
    }
});