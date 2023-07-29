import ExpenseItem from "./ExpenseItem"

import "./ExpensesList.css"

const ExpenseList=props =>{
   


    if(props.items.length===0){
        return (
            <h2 className="expenses-list__fallback">Found no Expenses</h2>
        )
    }
    else if(props.items.length===1){
        return(
            <h2> Only Single Expense Here . Please Add more...</h2>
        )
    }







    return <ul className="expenses-List">
   
        {props.items.map((expense)=> (
            <ExpenseItem
            key={expense.id}
             title={expense.title} 
              amount={expense.amount} 
              date={expense.date} 
              />
              ))
            }








    </ul>      

}
export default ExpenseList