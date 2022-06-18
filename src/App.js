import React from "react";

import ExpenseItemList from "./components/Expenses/ExpenseItemList";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpensesFilter/ExpensesFilter";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 21),
    },
    {
      id: 2,
      title: "Toilet Paper",
      amount: 20.0,
      date: new Date(2021, 3, 5),
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
      date: new Date(2021, 8, 19),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItemList expenses={expenses} />
    </div>
  );
}

export default App;
