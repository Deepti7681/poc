
import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    //let title = props.title;
    const clickHandler = () => {
        setTitle('updated!!')
            ;       // title = "updated !";
        console.log(title);
        //console.log('clicked');
    }
    return (
        <li>
            <Card className="expense-item">

                <div className="expense-item-description"><h2>Expense Item</h2></div>
                <div>{props.title}</div>
                <div className="expense-item-price">{props.amount}</div>
                <ExpenseDate date={props.date}></ExpenseDate>
                <button onClick={clickHandler}>change title</button>

            </Card> </li>
    );
}

export default ExpenseItem;