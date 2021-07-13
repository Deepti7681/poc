import React from 'react';
import Card from './Card';
import classes from './ErrorModal.module.css';
import Button from './Button';

const ErrorModal = (props) => {
    const Backdrop=(props)=>{

    }
    return (
        <>
<div className={classes.backdrop} onClick={props.onConfirm}/>
        
        <Card className={classes.modal}>
            <div className={classes.header}>
                <h2>
                    {props.title}
                </h2>
            </div>
            <div className={classes.footer}>
                <p>
                    {props.message}

                </p>
            </div>
            <div className={classes.footer}>
                <Button onClick={props.onConfirm}>OK</Button>
            </div>
        </Card>
        </>
    )

}

export default ErrorModal;