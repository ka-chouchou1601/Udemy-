import React ,{useState}from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
   const [isEditing, setIsEditing] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) =>{
   
const expenseData ={
  ...enteredExpenseData,
  id:Math.random().toString()
}
  props.onAddExpense(expenseData);
  setIsEditing(false)
  };
const startEditingHandler=()=>{
  setIsEditing(true)

}
const stopEditingHandler=()=>{
  setIsEditing(false)
}
 
  return (
    <div className="new-expense">
      {!isEditing && (<button onClick={startEditingHandler}>Add Expenses</button>)}
{/* this button is shown if we aew not editing notice it is only one ! */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense