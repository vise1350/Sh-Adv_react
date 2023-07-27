
import { useState } from "react";

function ExpenseForm(){
    function ChangeDetail(event){
        console.log(event.target.value)

    }
    
    return(

        <div>
            <form>
                <div>
                <label>Title</label>
                <input type="text " onChange={ChangeDetail}/>

                </div>
                
                <div>
                <label>Amount</label>
                <input type="number" onChange={ChangeDetail}/>

                    
                </div>

                <div>
                <label>Location</label>
                <input type="text" onChange={ChangeDetail}/>

                    
                </div>
                <div>
                <label>Date</label>
                <input type="date" onChange={ChangeDetail}/>

                    
                </div>
                <div>
                    <button type="Submit">Add Expense</button>
                </div>


            </form>



        </div>
        

        
        
    )




}
export default ExpenseForm;