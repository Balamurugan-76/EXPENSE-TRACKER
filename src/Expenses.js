import React, { useState } from "react";

function Expenses({ transactions, setTransactions }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");
  const [category, setCategory] = useState("Food");

  function addTransaction(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      title: title,
      amount: Number(amount),
      type: type,
      category: category,
    };

    setTransactions([...transactions, newItem]);

    setTitle("");
    setAmount("");
    setType("Expense");
    setCategory("Food");
  }

  function deleteTransaction(id) {
    setTransactions(
      transactions.filter((item) => item.id !== id)
    );
  }

  return (
    <div className="page">
      <h2>Manage Expenses</h2>

      <form className="expense-form" onSubmit={addTransaction}>
        <input type="text" placeholder="Enter description" onChange={(e) => setTitle(e.target.value)}/>

        <input type="number" placeholder="Enter amount" onChange={(e) => setAmount(e.target.value)} />

        <select value={type} onChange={(e) => setType(e.target.value)} >
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Education">Education</option>
          <option value="Bills">Bills</option>
          <option value="Salary">Salary</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit">Add Transaction</button>
      </form>

      <h3>Transaction History</h3>

      {transactions.length === 0 ? (
        <p>No transactions added yet.</p>) : (
        transactions.map((item) => (
          <div className="transaction" key={item.id}>
            <div>
              <strong>{item.title}</strong>
              <p>{item.category} - {item.type}</p>
            </div>

            <strong>
              {item.type === "Income" ? "+" : "-"}₹{item.amount}
            </strong>

            <button className="delete-btn" onClick={() => deleteTransaction(item.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Expenses;