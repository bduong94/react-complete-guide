import ExpenseItem from "./components/ExpenseItem";

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
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
