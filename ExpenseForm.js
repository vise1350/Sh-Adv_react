
import { useState } from "react";


function ExpenseForm(props){
    const[enteredTitle,setEnteredTitle]=useState("")
    const[enteredAmount,setEnteredAmount]=useState("")
    const[enteredDate,setEnteredDate]=useState("")
    const[enteredLocation,setEnteredLocaion]=useState("")

    function ChangeTitle(event){
        setEnteredTitle(event.target.value)}

        // console.log(event.target.value)
        function ChangeAmount(event){
            setEnteredAmount(event.target.value)
        }

        function ChangeLocation(event){
            setEnteredLocaion(event.target.value)
        }
        function ChangeDate(event){
            setEnteredDate(event.target.value)
        };


        function onSubmitHandler(event){
            event.preventDefault();

            const expenseData={
                title:enteredTitle,
                amount:enteredAmount,
                location:enteredLocation,
                date:new Date(enteredDate)
            };
            props.onSaveExpenseData(expenseData)
            setEnteredTitle("")
            setEnteredAmount("")
            setEnteredLocaion("")
            setEnteredDate("")

        }

            


        
        
        

    
    return(

        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                <label>Title</label>
                <input type="text " value={enteredTitle} onChange={ChangeTitle}/>

                </div>
                
                <div>
                <label>Amount</label>
                <input type="number" value={enteredAmount} onChange={ChangeAmount}/>

                    
                </div>

                <div>
                <label>Location</label>
                <input type="text" value={enteredLocation} onChange={ChangeLocation}/>

                    
                </div>
                <div>
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={ChangeDate}/>

                    
                </div>
                <div>
                    <button type="Submit" >Add Expense</button>
                </div>


            </form>



        </div>
        

        
        
    )




}
export default ExpenseForm;