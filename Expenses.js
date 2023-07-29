import { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import ExpenseFilter from "./ExpenseFilter"
import "./Expenses.css"
const Expenses=(props)=>{
    const[filteredYear,setFilteredYear]=useState("2020");

    const filterChangeHandler=(selectedYear) =>{
        setFilteredYear(selectedYear)
    };
    const filteredExpense=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;

    })



return (
    <div>
        <Card className="expenses">
            <ExpenseFilter 
            selected={filteredYear} 
            onChangeFilter ={filterChangeHandler}/>
            {filteredExpense.map((expense)=>(
                 <ExpenseItem
                 key={expense.id}
                  title={expense.title} 
                   amount={expense.amount} 
                   date={expense.date} />))}

        </Card>
{/* 
            <ExpenseItem 
        title={props.items[0].title} 
        amount={props.items[0].amount} 
        date={props.items[0].date}
        loc={props.items[0].loc}
        
        ></ExpenseItem>

        <ExpenseItem
         title={props.items[1].title}
          amount={props.items[1].amount}
           date={props.items[1].date}
           loc={props.items[1].loc}
           ></ExpenseItem>

        <ExpenseItem 
        title={props.items[2].title} 
        amount={props.items[2].amount}
        date={props.items[2].date}
        loc={props.items[2].loc}
        ></ExpenseItem>

        <ExpenseItem 
        title={props.items[3].title} 
        amount={props.items[3].amount} 
        date={props.items[3].date}
        loc={props.items[3].loc}
        ></ExpenseItem> */}





        







    </div>
)
}
export default Expenses;