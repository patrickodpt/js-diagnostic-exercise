console.log("Hello from app.js")

//update balance on click of deposit:
let savingsBalance = parseInt(document.querySelector('#savings > .balance > span').innerText)
let checkingBalance = parseInt(document.querySelector('#checking > .balance > span').innerText)

//need 4 different click listeners for Savings: Withdraw/Deposit; Checking: Withdraw/Deposit
//on click of deposit adjust appropriate balance by inputAsInt
document.querySelector('#savings > .deposit').addEventListener('click', adjustBalance)
document.querySelector('#savings > .withdraw').addEventListener('click', adjustBalance)
document.querySelector('#checking > .deposit').addEventListener('click', adjustBalance)
document.querySelector('#checking > .withdraw').addEventListener('click', adjustBalance)

// determine which function to run when clicked
function adjustBalance () {
  // if deposit is clicked
  if (event.target.className == 'deposit') {
    depositMoney()
  }
  //if withdraw is clicked
  if (event.target.className == 'withdraw') {
    withdrawMoney()
  }
}
//funtion that displays a passed notification to user
function notifyUser(notification) {
  document.querySelector('#notify-text').innerText = notification
  document.querySelector('#notify-text').style.visibility = "visible"
  document.querySelector('#notify-text').style.color = "red"
}

//function that deposits money
function depositMoney() {
  //get input from user and set as integer
  let inputAsInt = parseInt(document.querySelector(`#${event.target.parentNode.id} > .input`).value)
  //check integer >0 and for which id called function
  if (inputAsInt > 0 && event.target.parentNode.id == 'savings') {
    savingsBalance += inputAsInt
    //below inserts balance into span to be displayed
    visualizeBalance(savingsBalance)
    //if function successfully ran, hide previous user notifcations
    hideNotification()
    moneyColor("#6C9A74")
  } else if (inputAsInt > 0 && event.target.parentNode.id == 'checking') {
    checkingBalance += inputAsInt
    //below inserts balance into span to be displayed
    visualizeBalance(checkingBalance)
    //if function successfully ran, hide previous user notifcations
    hideNotification()
    moneyColor("#6C9A74")
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
      //below inserts balance into span to be displayed
      visualizeBalance(savingsBalance)
      //if function successfully ran, hide previous user notifcations
      hideNotification()
      moneyColor("#6C9A74")
    } else {
      moneyColor("#F52F4F")
      notifyUser('YOU HAVE INSUFFICIENT FUNDS')
    }
  } else if (inputAsInt > 0 && event.target.parentNode.id == 'checking') {
    if (inputAsInt <= checkingBalance) {
      checkingBalance -= inputAsInt
      //below inserts balance into span to be displayed
      visualizeBalance(checkingBalance)
      //if function successfully ran, hide previous user notifcations
      hideNotification()
      moneyColor("#6C9A74")
    } else {
      moneyColor("#F52F4F")
      notifyUser('YOU HAVE INSUFFICIENT FUNDS')
    }
  } else {
    notifyUser('PLEASE ENTER A WHOLE NUMBER >0')
    }
}

//will change color of background-color of display divs
function moneyColor(color = "#6C9A74") {
  document.querySelector(`#${event.target.parentNode.id}`).style['background-color'] = color
}

//will hide notification if previously displayed
function hideNotification() {
  document.querySelector('#notify-text').style.visibility = "hidden"
}

//will display balance in appropriate span
function visualizeBalance(balance) {
  document.querySelector(`#${event.target.parentNode.id} > .balance > span`).innerText = balance
}
