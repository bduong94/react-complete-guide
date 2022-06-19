import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const expensesList = props.filteredExpenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  if (expensesList.length === 0) {
    return <h2 className=".expenses-list__fallback">Found no expenses</h2>;
  }

  return <ul className="expenses-list">{expensesList}</ul>;
};

export default ExpensesList;
