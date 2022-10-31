import React ,{useState}from 'react'
import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';




const ExpenseItem = (props) => {

const [title,setTitle]=useState(props.title);
// title is a pointer at that managed value
// setTitle is a function which we can later call set a new title 
// use state always returns an array with exactly 2 values

const clickHandler=()=>{
 setTitle('Updated');
 //here will set the new title wich will be updated in this particular case

}
  return (
    <div className="expense-item">
      
       <ExpenseDate date={props.date}/>
      
      {/* toISOString builtIn method to output it as a string   */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
      {/* here we just point to the function clickHandler */}
    </div>
  );
}





export default ExpenseItem