import logo from './logo.svg';
import './App.css';
import AddUser from './newComponents/AddUser';
import React, { useState } from 'react';
//import ExpenseItem from './component/ExpenseItem';
import Expenses from './component/Expenses';
import NewExpense from './component/NewExpense';
import UserList from './newComponents/UserList';
const dummy_expenses = [
  {
    id: 1,
    title: "car insurance",
    amount: 234.89,
    date: new Date(2021, 12, 28),

  },
  {
    id: 2,
    title: "car insurance",
    amount: 234.89,
    date: new Date(2021, 12, 28),
  },
  {

    title: "car insurance",
    amount: 234.89,
    date: new Date(2021, 12, 28),
  }
];


const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [{ name: uName, age: uAge,id:Math.random().toString }, ...prevUsersList ];
   

    });
    console.log(uName,uAge);
  };

  const [expense, setExpenses] = useState(dummy_expenses)
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
    // console.log(expense);
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expense}></Expenses>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={usersList}></UserList>
    </>
  );

};
export default App;
