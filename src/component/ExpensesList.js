import ExpenseItem from "./ExpenseItem";
const ExpensesList=(props)=>{
//let expenseContent=<p>no expense found</p>;
if(props.items.length===0){

return <h2>found no expense</h2>}
    
    return(
        <div>
  <ul className="expense-list">
      {props.items.map((expense)=>(
          <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date} />
      ))}
  
  </ul>
        </div>
    )
}
export default ExpensesList;