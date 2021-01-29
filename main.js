// Login button eventHandler

const loginBtn = document.getElementById("login");
 loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block"
})

// deposit button eventHandler 

const depositBtn = document.getElementById("add-deposit");
depositBtn.addEventListener("click", function(){
    const depositNumber = getInputNumber("deposit-amount");

    const currentdeposit = document.getElementById("current-deposit").innerText;
    const currentdepositNumber = parseFloat(currentdeposit);
    const totaldeposit = depositNumber + currentdepositNumber ;
    
    document.getElementById("current-deposit").innerText = totaldeposit;

    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber; 
    document.getElementById("current-balance").innerText = totalBalance;
    
    document.getElementById("deposit-amount").value = "";
})

// withdraw button eventHandler 

const withdrawBtn = document.getElementById("add-withdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdraw-amount");
    console.log(withdrawNumber)

    document.getElementById("withdraw-amount").value = "";
})


function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

