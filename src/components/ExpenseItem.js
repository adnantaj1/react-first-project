import React from 'react';
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    return (
        <div className="expense-item">
            <div>
                <div>{}</div>
                <div></div>
                <div></div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price"> $23.4</div>
            </div>
            
        </div>
    )
}

export default ExpenseItem;
