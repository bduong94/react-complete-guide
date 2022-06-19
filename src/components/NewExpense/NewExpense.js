import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [newExpense, setNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    cancelNewExpenseHandler();
  };

  const newExpenseHandler = () => {
    setNewExpense(true);
  };

  const cancelNewExpenseHandler = () => {
    setNewExpense(false);
  };

  return (
    <div className="new-expense">
      {newExpense ? (
        <ExpenseForm
          formViewHandler={cancelNewExpenseHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={newExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
