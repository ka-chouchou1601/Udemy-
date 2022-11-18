import React, { useState } from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  //here is the function it points at and it receives a state that changes what the components renders on the screen
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //how to rendered filtered year and use filter function
 
  return (
    <div>
      <div className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
          //here is an event Listener in the event listener you pass a pointer it point at the function
        />
        {filteredExpenses.length === 0 ? (
        <p>No expenses Fount</p>
          ) :(
           filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
        )
        
         }
         {/* here are the ternury operators */}
       

        {/* <ExpenseItem
          title={props.items[0].title}
          // title="toilet Paper" props can be hard coded
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </div>
    </div>
  );
};

export default Expense;
