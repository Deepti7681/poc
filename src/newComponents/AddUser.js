import React, { useState,useRef, useEffect } from 'react';
import classess from './Card.module.css';
import ErrorModal from './ErrorModal';
import Button from './Button';
import Card from './Card';
import Wrapper from '../Helper/Wrapper';
const AddUser = (props) => {
    const nameInputRef=useRef('');
    const ageInputRef=useRef('');
    useEffect(()=>{
        console.log("check");
    },[]);
    const [error, setError] = useState()
        ; //const [enteredUsername, setEnteredUsername] = useState('');
  //const [enteredAge, setEnteredAge] = useState('');
    /*const userChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
        //e.target.value();

    }*/
   /* const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
        //e.target.value();

    }*/
    const addUserHandler = (e) => {
        e.preventDefault();
        const enteredUsername=nameInputRef.current.value;
        const enteredAge=ageInputRef.current.value;
console.log(nameInputRef.current.value);


        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {

            setError({
                title: 'invalid username',
                message: 'enter correct username'
            });


            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'wrong age',
                message: 'enter correct age >0'
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        //console.log(enteredAge,enteredUsername)
nameInputRef.current.value='';
ageInputRef.current.value='';
       // setEnteredUsername('');
        //setEnteredAge('');

    };
    const errorHandler = () => {
        setError(null);
    }
    return (
        <Wrapper>
            {error &&
                <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} ></ErrorModal>
            }
            <Card className={classess.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">username</label>
                    <input type="text"
                        id="username"
                        ref={nameInputRef}
                     
        ></input>
                    <label htmlFor="age">age</label>
                    <input type="number"
                        id="age"
                        ref={ageInputRef}
                        ></input>
                    <Button type="submit">Add user</Button>
                </form></Card></Wrapper>
    )
};
export default AddUser;