
import { useState } from "react";

function ExpenseForm(){
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
        }
        
        


    
    

    
    
    return(

        <div>
            <form>
                <div>
                <label>Title</label>
                <input type="text " onChange={ChangeTitle}/>

                </div>
                
                <div>
                <label>Amount</label>
                <input type="number" onChange={ChangeAmount}/>

                    
                </div>

                <div>
                <label>Location</label>
                <input type="text" onChange={ChangeLocation}/>

                    
                </div>
                <div>
                <label>Date</label>
                <input type="date" onChange={ChangeDate}/>

                    
                </div>
                <div>
                    <button type="Submit" >Add Expense</button>
                </div>


            </form>



        </div>
        

        
        
    )




}
export default ExpenseForm;