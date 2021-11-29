import {useState} from 'react';

import ExpenseForm from "./ExpenseForm"

import './NewExpense.css';

const NewExpense = props => {
    const [editing, setEditing] = useState(false);

    const startEdithandler = event => {
        setEditing(true);
    }

    const stopEdithandler = event => {
        setEditing(false);
    }

    return <div className="new-expense">
        {!editing && <button type="button" onClick={startEdithandler}>Add New Expense</button>}
        {editing && <ExpenseForm onCancel={stopEdithandler} onAddNewExpenseData={props.onExpenseData}/>}
    </div>
}

export default NewExpense;