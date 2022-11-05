
import styled from "styled-components";
import Expense from './Component/ExpenseItem/Expenses/Expense'
import NewExpense from "./Component/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expenses);
  };
  return (
    <Container>
      <NewExpense onAddExpense={addExpenseHandler}/>
       <Expense expenses={expenses}  />
      {/* first expenses is for the prop that is in expense.jsx ={expenses } is referring to the array above  */}
    </Container>
  );
}


const Container = styled.div`
  
`
export default App;
