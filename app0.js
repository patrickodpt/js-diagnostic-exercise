console.log("THIS IS A TEST VERSION")

let savingsAccount = {
  name: "Savings Account",
  amount: 0,
  withdraw: function (requestedAmount) {
    if (this.amount > requestedAmount) {
      return this.amount -= requestedAmount
    } else {
      return requestedAmount
    }
  },
  deposit: function (providedAmount) {
    return this.amount += providedAmount
  },
}

let checkingAccount = {
  name: "Checking Account",
  amount: 0,
  withdraw: function (requestedAmount) {
    if (this.amount > requestedAmount) {
      return this.amount -= requestedAmount
    } else {
      return requestedAmount
    }
  },
  deposit: function (providedAmount) {
      return this.amount += providedAmount
  },
}

console.log(checkingAccount.name)
console.log(checkingAccount.amount)
console.log(checkingAccount.deposit(200))
console.log(checkingAccount.amount)

















//
// //update balance on click of deposit:
// let savingsBalance = parseInt(document.querySelector('#savings > .balance > span').innerText)
// let checkingBalance = parseInt(document.querySelector('#checking > .balance > span').innerText)
//
// //need 4 different click listeners for Savings: Withdraw/Deposit; Checking: Withdraw/Deposit
// //on click of deposit adjust appropriate balance by inputAsInt
// document.querySelector('#savings > .deposit').addEventListener('click', adjustBalance)
// document.querySelector('#savings > .withdraw').addEventListener('click', adjustBalance)
// document.querySelector('#checking > .deposit').addEventListener('click', adjustBalance)
// document.querySelector('#checking > .withdraw').addEventListener('click', adjustBalance)
//
// function adjustBalance () {
//   //get inputed value and convert to integer
//   // if deposit is clicked
//   if (event.target.className == 'deposit') {
//     depositMoney()
//   }
//   //if withdraw is clicked
//   if (event.target.className == 'withdraw') {
//     withdrawMoney()
//   }
// }
// //funtion that sends a passed notification to user
// function notifyUser(notification) {
//   document.querySelector('#notify-text').innerText = notification
//   document.querySelector('#notify-text').style.visibility = "visible"
//   document.querySelector('#notify-text').style.color = "red"
// }
//
// //function that deposits money
// function depositMoney() {
//   let inputAsInt = parseInt(document.querySelector(`#${event.target.parentNode.id} > .input`).value)
//   //check integer >0
//   if (inputAsInt > 0 && event.target.parentNode.id == 'savings') {
//     savingsBalance += inputAsInt
//     visualizeBalance(savingsBalance)
//     hideNotification()
//     moneyColor("#6C9A74")
//   } else if (inputAsInt > 0 && event.target.parentNode.id == 'checking') {
//     checkingBalance += inputAsInt
//     visualizeBalance(checkingBalance)
//     hideNotification()
//     moneyColor("#6C9A74")
//   } else {
//     // tell user to please input a value greater than
//     notifyUser('PLEASE ENTER A WHOLE NUMBER >0')
//   }
// }
//
// //function that withdraw money
// function withdrawMoney() {
//   inputAsInt = parseInt(document.querySelector(`#${event.target.parentNode.id} > .input`).value)
//   //check integer >0
//   if (inputAsInt > 0 && event.target.parentNode.id == 'savings') {
//     if (inputAsInt <= savingsBalance) {
//       savingsBalance -= inputAsInt
//       visualizeBalance(savingsBalance)
//       hideNotification()
//       moneyColor("#6C9A74")
//     } else {
//       moneyColor("#F52F4F")
//       notifyUser('YOU HAVE INSUFFICIENT FUNDS')
//     }
//   } else if (inputAsInt > 0 && event.target.parentNode.id == 'checking') {
//     if (inputAsInt <= checkingBalance) {
//       checkingBalance -= inputAsInt
//       visualizeBalance(checkingBalance)
//       hideNotification()
//     } else {
//       moneyColor("#F52F4F")
//       notifyUser('YOU HAVE INSUFFICIENT FUNDS')
//     }
//   } else {
//     notifyUser('PLEASE ENTER A WHOLE NUMBER >0')
//     }
// }
//
// function moneyColor(color = "green") {
//   document.querySelector(`#${event.target.parentNode.id}`).style['background-color'] = color
// }
//
// function hideNotification() {
//   document.querySelector('#notify-text').style.visibility = "hidden"
// }
//
// function visualizeBalance(balance) {
//   document.querySelector(`#${event.target.parentNode.id} > .balance > span`).innerText = balance
// }
