import {useState} from 'react';


import './ExpenseForm.css';
const ExpenseForm = props => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');

    const titleHandler = event => {
        setTitle(event.target.value);
    }

    const priceHandler = event => {
        setPrice(event.target.value);
    }

    const dateHandler = event => {
        setDate(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();

        const expenseData = {
            id: Math.random(),
            title: title,
            amount: price,
            date: new Date(date)
        }

        setTitle('');
        setPrice('');
        setDate('');

        props.onAddNewExpenseData(expenseData);
    }

    return (
        <div>
            <form className="expense-form" onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" id="title" onChange={titleHandler} value={title} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01" id="price" onChange={priceHandler} value={price} name="price"/>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" name="date" id="date" value={date} onChange={dateHandler} />
                </div>
                <div className="form-actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;