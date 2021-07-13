import ExpenseItem from "./ExpenseItem";
import React,{useState} from "react";
import ExpensesChart from './ExpensesChart'
import Card from "./Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter"

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
<ExpensesChart expenses={filterExpenses} ></ExpensesChart>
<ExpensesList items={filterExpenses}></ExpensesList>
           {/* {props.items.map((expense) =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />)}

           */}

        </Card>
    )
}


export default Expenses;