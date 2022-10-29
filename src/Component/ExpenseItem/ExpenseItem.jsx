import React from 'react'
import './ExpenseItem.css';

const ExpenseItem = (props) => {
const month = props.date.toLocaleString("en-US", { month: "long" });
// toLocaleString is a built method in js 
const day= props.date.toLocaleString("en-US",{day: '2-digit'} );
const year= props.date.getFullYear();
// getFullYear() is a builtIn method too
  return (
    <div className="expense-item">
      <div>
        <div> {month}</div>
        <div>{day} </div>
        <div>{year}</div>
      </div>
      {/* toISOString builtIn method to output it as a string   */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}





export default ExpenseItem