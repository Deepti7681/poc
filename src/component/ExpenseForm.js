import { useState } from "react";

function ExpenseForm(props) {
     const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');
    /*const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });*/
    ///document.getElementById('').addEventListener()
    const titleChangeHandler = (e) => {
        //console.log(e.target.value);
       /* setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: e.target.value
            }
        })*/


        setEnteredTitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
        //console.log(e.target.value);
         setEnteredAmount(e.target.value)
       /* setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: e.target.value
            }
        })*/
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        /*setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: e.target.value
            }
        })*/
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        //console.log(expenseData);
props.onSaveExpenseData(expenseData);
       setEnteredTitle('');
       setEnteredAmount('');
       setEnteredDate('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button >add expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;