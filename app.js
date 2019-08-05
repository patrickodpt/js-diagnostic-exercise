console.log("Hello from app.js")

let inputAsInt; //global variable to be striped of '$' and a whole number

//update balance on click of deposit:
let savingsBalance = parseInt(document.querySelector('#savings > .balance > span').innerText)
let checkingBalance = parseInt(document.querySelector('#checking > .balance > span').innerText)

//need 4 different click listeners for Savings: Withdraw/Deposit; Checking: Withdraw/Deposit
//on click of deposit adjust appropriate balance by inputAsInt
document.querySelector('#savings > .deposit').addEventListener('click', adjustBalance)
document.querySelector('#savings > .withdraw').addEventListener('click', adjustBalance)
document.querySelector('#checking > .deposit').addEventListener('click', adjustBalance)
document.querySelector('#checking > .withdraw').addEventListener('click', adjustBalance)

function adjustBalance () {
  //get inputed value and convert to integer
  // if deposit is clicked
  if (event.target.className == 'deposit') {
    depositMoney()
  }
  //if withdraw is clicked
  if (event.target.className == 'withdraw') {
    withdrawMoney()
  }
}
//funtion that sends notifications to user
function notifyUser(notification) {
  document.querySelector('#notify-text').innerText = notification
  document.querySelector('#notify-text').style.visibility = "visible"
  document.querySelector('#notify-text').style.color = "red"
}

//function that deposits money
function depositMoney() {
  inputAsInt = parseInt(document.querySelector(`#${event.target.parentNode.id} > .input`).value)
  //check integer >0
  if (inputAsInt > 0 && event.target.parentNode.id == 'savings') {
    savingsBalance += inputAsInt
    document.querySelector(`#${event.target.parentNode.id} > .balance > span`).innerText = savingsBalance
    document.querySelector('#notify-text').style.visibility = "hidden"
  } else if (inputAsInt > 0 && event.target.parentNode.id == 'checking') {
    checkingBalance += inputAsInt
    document.querySelector(`#${event.target.parentNode.id} > .balance > span`).innerText = checkingBalance
    document.querySelector('#notify-text').style.visibility = "hidden"
  } else {
    // tell user to please input a value greater than
    notifyUser('PLEASE ENTER A WHOLE NUMBER >0')
  }
}

//function that withdraw money
function withdrawMoney() {
  inputAsInt = parseInt(document.querySelector(`#${event.target.parentNode.id} > .input`).value)
  //check integer >0
  if (inputAsInt > 0 && event.target.parentNode.id == 'savings') {
    if (inputAsInt <= savingsBalance) {
      savingsBalance -= inputAsInt

      document.querySelector(`#${event.target.parentNode.id} > .balance > span`).innerText = savingsBalance
      document.querySelector('#notify-text').style.visibility = "hidden"
    } else {
      notifyUser('YOU HAVE INSUFFICIENT FUNDS')
    }
  } else if (inputAsInt > 0 && event.target.parentNode.id == 'checking') {
    if (inputAsInt <= checkingBalance) {
      checkingBalance -= inputAsInt
      document.querySelector(`#${event.target.parentNode.id} > .balance > span`).innerText = checkingBalance
      document.querySelector('#notify-text').style.visibility = "hidden"
    } else {
      notifyUser('YOU HAVE INSUFFICIENT FUNDS')
    }
  } else {
    notifyUser('PLEASE ENTER A WHOLE NUMBER >0')
    }
}
