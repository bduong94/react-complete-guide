import React, { useState } from "react";

import ExpenseItemList from "./components/Expenses/ExpenseItemList";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2019, 2, 21),
  },
  {
    id: 2,
    title: "Toilet Paper",
    amount: 20.0,
    date: new Date(2020, 3, 5),
  },
  {
    id: 3,
    title: "Toothpaste",
    amount: 15.0,
    date: new Date(2021, 7, 21),
  },
  {
    id: 4,
    title: "Soda Pop",
    amount: 3.0,
    date: new Date(2022, 8, 19),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItemList expenses={expenses} />
    </div>
  );
}

export default App;
