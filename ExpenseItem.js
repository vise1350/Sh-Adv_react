import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

import "./ExpenseDetails"
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";



function ExpenseItem(props) {


  const [title,setTitle]=useState(props.title);
  const[amount,setExpense]=useState(props.amount)
  
 
  const clickHandler=()=>{
    // console.log("inside clickhandler function")

    setTitle('Updated');
    
    console.log(title);
  };
    


  const clickHandler2=()=>{
    setExpense('$100');
    console.log(amount)

  }













  



  return (
    
    <div className="expense-item">

      <ExpenseDate date={props.date}/>
     

        <ExpenseDetails 
        title={title} 
        loc={props.loc}
        amount= {amount}/>
        <div> <button onClick={clickHandler2}>Change Expense
          </button></div>
        
        <div>
          <button onClick={clickHandler}>Change title
          </button>
          
          
          
          </div>

       
    </div>
     

    
  );
}

export default ExpenseItem;
