import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 295,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e2",
      title: "New Desk",
      amount: 96.2,
      date: new Date(2021, 6, 15),
    },
    {
      id: "e3",
      title: "Table Lamp",
      amount: 107.5,
      date: new Date(2021, 3, 6),
    },
    {
      id: "e4",
      title: "MacBook Pro",
      amount: 2500,
      date: new Date(2022, 5, 17),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
};

// function App() {
//   // Imperative Approach
//   const para = document.createElement("p");
//   para.textContent = "This is also visible";
//   document.getElementById("root").append(para);
//   return (
//     <div>
//       <h2>Let's get started!</h2>
//     </div>
//   );
// }

export default App;
