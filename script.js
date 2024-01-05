document.addEventListener("DOMContentLoaded", function () {
  const balanceElement = document.getElementById("balance");
  const transactionListElement = document.getElementById("transaction-list");
  const transactionForm = document.getElementById("transaction-form");
  const nameInput = document.getElementById("name");
  const amountInput = document.getElementById("amount");
  const incomeBtn = document.getElementById("incomeBtn");
  const expenseBtn = document.getElementById("expenseBtn");

  let balance = 0;
  let transactions = [];

  function updateBalance() {
    balanceElement.textContent = `₹${balance.toFixed(2)}`;
  }

  function updateTransactions() {
    transactionListElement.innerHTML = "";
    transactions.forEach((transaction) => {
      const li = document.createElement("li");
      li.innerHTML = `${transaction.name} <span id="${
        transaction.type
      }">${transaction.amount.toFixed(2)}</span>`;
      transactionListElement.appendChild(li);
    });
  }

  function addTransaction(name, amount, type) {
    const transaction = {
      name: name,
      amount: parseFloat(amount),
      type: type,
    };

    transactions.push(transaction);

    if (type === "income") {
      balance += transaction.amount;
    } else {
      balance -= transaction.amount;
    }

    updateBalance();
    updateTransactions();
  }

  incomeBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const amount = amountInput.value.trim();

    if (
      name !== "" &&
      amount !== "" &&
      !isNaN(amount) &&
      parseFloat(amount) > 0
    ) {
      addTransaction(name, parseFloat(amount), "income");
    } else {
      alert("Please enter valid transaction details.");
    }

    nameInput.value = "";
    amountInput.value = "";
  });

  expenseBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const amount = amountInput.value.trim();

    if (
      name !== "" &&
      amount !== "" &&
      !isNaN(amount) &&
      parseFloat(amount) > 0
    ) {
      addTransaction(name, parseFloat(amount), "expense");
    } else {
      alert("Please enter valid transaction details.");
    }

    nameInput.value = "";
    amountInput.value = "";
  });

  transactionForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });
});
