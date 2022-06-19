import React, { useState } from "react";
import "./ExpenseItemList.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpenseChart";

export default function ExpenseItemList(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterYear={filterYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList
        filteredExpenses={filteredExpenses}
        filteredYear={filteredYear}
      />
    </Card>
  );
}
