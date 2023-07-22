
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

import "./ExpenseDetails"
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const clickHandler=()=>{
    console.log("Clicked!!!!")
  }

  

  

  return (
    
    <div className="expense-item">

      <ExpenseDate date={props.date}/>
     

        <ExpenseDetails 
        title={props.title} 
        loc={props.loc}
        amount= {props.amount}/>
        <div>
          <button onClick={clickHandler}>Delete Item
          </button>
          
          
          
          </div>

       
    </div>
    
   

    
  );
}

export default ExpenseItem;
