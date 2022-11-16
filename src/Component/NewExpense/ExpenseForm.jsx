import React,{ useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
const [enteredTitle,setEnteredTitle]= useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');
// const [userInput, setUserInput] = useState({
//   enteredTitle: '',
//   enteredAmount: '',
//   enteredDate:''
// });

    const titleChangeHandler=(event)=>{
setEnteredTitle(event.target.value)

// setUserInput({
//   ...userInput,
  
//   enteredTitle: event.target.value,
// })
// //or setUserInput((prevState)=>{
//   return{...prevState,enteredTitle:event.target.value}
// });

    };


    const amountChangeHandler=(event)=>{
      setEnteredAmount(event.target.value)
    //   setUserInput({
    //     ...userInput,
    //     //just to include the other values amount and date if not it would replace it 
    //     enteredAmount: event.target.value,
    //   });
     };


    const dateChangeHandler=(event)=>{
      setEnteredDate(event.target.value)
    //   setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    //   });
    }
const submitHandler=(event)=>{
  event.preventDefault();


  const expenseData = {

    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate)

  };

  
props.onSaveExpenseData(expenseData);
setEnteredTitle('');
setEnteredAmount('');
setEnteredDate('');

};


  return (
    <form onSubmit={submitHandler}>
    {/* submitHandler it listens to the submit button and submits the form */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
          {/* two way binding we feed the state back into the input */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2040-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm 
