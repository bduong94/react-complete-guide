import React from "react";
import "./ExpenseItemList.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseItemList(props) {
  const expensesList = props.expenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  return <Card className="expenses">{expensesList}</Card>;
}
