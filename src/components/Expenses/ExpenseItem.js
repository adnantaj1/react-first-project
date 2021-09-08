import './ExpenseItem.css';
import './ExpenseDate';
import React ,{ useState } from 'react';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const changeTitleHandler = () =>{
        setTitle('Changed');
        console.log(title)
    }
  return (
    <div className='expense-item'>
      <div>
          <ExpenseDate date={props.date}> </ExpenseDate>
      </div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={changeTitleHandler}>change Title</button>
      </div>
    </div>
  );
}

export default ExpenseItem;