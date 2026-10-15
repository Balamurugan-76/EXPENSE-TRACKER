import React from "react";

function Report({ transactions }) {
  const expenses = transactions.filter(
    (item) => item.type === "Expense"
  );

  const total = expenses.reduce(
    (sum, item) => sum + item.amount,0 );

  const categories = [...new Set(
    expenses.map((item) => item.category)
  )];

  return (
    <div className="page">
      <h2>Expense Report</h2>

      <div className="card">
        <h3>Total Spending</h3>
        <h2>₹{total}</h2>
      </div>

      <h3>Category-wise Report</h3>

      {categories.length === 0 ? (
        <p>No expense data available.</p>
      ) : (
        categories.map((category) => {
          const categoryTotal = expenses
            .filter((item) => item.category === category)
            .reduce((sum, item) => sum + item.amount, 0);

          return (
            <div className="report-row" key={category}>
              <span>{category}</span>
              <strong>₹{categoryTotal}</strong>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Report;