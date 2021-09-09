import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // And useState, this hook, always returns an array
  // with exactly two elements.
  // That's always the case.
  // And it's always the case
  // that the first element is the current state value.
  // And the second element is a function for updating that.
  const [title, setTitle] = useState(props.title);
  // console.log("ExpenseItem evaluted by React");

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
