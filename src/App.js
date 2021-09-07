//import React, { useState } from 'react';
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: "$23.4",
      date: new Date(2021, 9, 10),
    },
    {
      id: 2,
      title: "New Desk",
      amount: "$23.4",
      date: new Date(2021, 9, 10),
    },
    {
      id: 1,
      title: "Health Care",
      amount: "$23.4",
      date: new Date(2021, 9, 10),
    },
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem title={expenses[1].title}></ExpenseItem>
      <ExpenseItem title={expenses[2].title}></ExpenseItem>
    </div>
  );
}

export default App;
