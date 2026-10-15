import React from "react";

function Dashboard({ transactions }) {
  let income = 0;
  let expenses = 0;

  transactions.forEach((item) => {
    if (item.type === "Income") {
      income += item.amount;
    } else {
      expenses += item.amount;
    }
  });

  const balance = income - expenses;

  return (
    <div className="page">
      <h2>Dashboard</h2>

      <div className="cards">
        <div className="card">
          <h3>Total Income</h3>
          <h2>₹{income}</h2>
        </div>

        <div className="card">
          <h3>Total Expenses</h3>
          <h2>₹{expenses}</h2>
        </div>

        <div className="card">
          <h3>Balance</h3>
          <h2>₹{balance}</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;