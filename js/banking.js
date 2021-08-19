/* function doubleleft(num){
    const result = num * 2;
    return result;
}
const first = doubleleft(5);
const second = doubleleft(7);
*/

function getInputValue(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    
    // clean input field
    depositInput.value = '';
    return depositAmount;
}

document.getElementById('deposit-button').addEventListener('click',function(){
    /*const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    */
    const depositAmount = getInputValue('deposit-input');
    // get current deposit

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText =depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;


    // upgrade balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText =balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;

    

});
// withdraw balance
document.getElementById('withdraw-button').addEventListener('click',function(){
  /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText =withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    */
    const withdrawAmount = getInputValue('withdraw-input');
    //set withdraw amount

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // upgrade balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - 
    withdrawAmount;

});