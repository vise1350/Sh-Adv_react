// import logo from './logo.svg';
import './App.css';
// import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import { useState } from 'react';

  const DummyExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      loc:"Boston",
    },
    { id: 'e2',
     title: 'New TV',
      amount: 799.49, 
      date: new Date(2021, 2, 12) ,
      loc:"Singapore",},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      loc:"India",
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      loc:"NewYork",
    },
  ];

  



  const App=() => {
    const[expenses,setExpenses] = useState(DummyExpenses);

    const addExpenseHandler=(expense) =>{
      setExpenses((prevExpenses)=>{
        return [expense, ...prevExpenses];
      })
    };
  

    

  return (
    
        <div>

        
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
      
      
    </div> )
  
}

export default App;
