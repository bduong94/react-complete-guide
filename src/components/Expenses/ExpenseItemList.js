import React, { useState } from "react";
import "./ExpenseItemList.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

export default function ExpenseItemList(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearHandler = (year) => {
    setFilteredYear(year);
  };

  const expensesList = props.expenses
    .filter((expense) => expense.date.getFullYear().toString() === filteredYear)
    .map((expense) => {
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
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterYear={filterYearHandler}
      />
      {expensesList}
    </Card>
  );
}
