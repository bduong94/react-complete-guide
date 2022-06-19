import React, { useState } from "react";
import "./ExpenseItemList.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

export default function ExpenseItemList(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterYear={filterYearHandler}
      />
      <ExpensesList expenses={props.expenses} filteredYear={filteredYear} />
    </Card>
  );
}
