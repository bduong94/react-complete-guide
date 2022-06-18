import React, { useState } from "react";
import "./ExpenseItemList.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

export default function ExpenseItemList(props) {
  const [filteredYear, setFilteredYear] = useState("");

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

  return (
    <div>
      <ExpensesFilter />
      <Card className="expenses">{expensesList}</Card>
    </div>
  );
}
